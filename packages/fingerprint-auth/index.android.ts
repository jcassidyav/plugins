import { BiometricIDAvailableResult, ERROR_CODES, FingerprintAuthApi, VerifyFingerprintWithCustomFallbackOptions, BioMetricResult } from './common';
import { Application, AndroidActivityResultEventData, Utils, AndroidApplication } from '@nativescript/core';

declare const com: any;

const KEY_NAME = 'fingerprintauth';
const SECRET_BYTE_ARRAY = Array.create('byte', 16);
const REQUEST_CODE_CONFIRM_DEVICE_CREDENTIALS = 788; // arbitrary

const AuthenticationCallback = (<any>androidx.biometric.BiometricPrompt.AuthenticationCallback).extend({
	resolve: null,
	reject: null,
	onAuthenticationError(code: number, error: string) {
		// TODO map code to response

		this.reject({
			code: ERROR_CODES.RECOVERABLE_ERROR,
			message: error,
		});
	},
	onAuthenticationFailed() {
		this.reject({
			code: ERROR_CODES.NOT_RECOGNIZED,
			message: 'Fingerprint not recognized.',
		});
	},
	onAuthenticationSucceeded(result: androidx.biometric.BiometricPrompt.AuthenticationResult): void {
		try {
			if (result.getCryptoObject()) {
				result.getCryptoObject().getCipher().doFinal(SECRET_BYTE_ARRAY);
			}
			this.resolve({
				code: ERROR_CODES.SUCCESS,
				message: 'All OK',
			});
		} catch (error) {
			console.log(`Error in onAuthenticationSucceeded: ${error}`);
			this.reject({
				code: ERROR_CODES.UNEXPECTED_ERROR,
				message: error,
			});
		}
	},
});

export class FingerprintAuth implements FingerprintAuthApi {
	private keyguardManager: android.app.KeyguardManager;

	private biometricPrompt: any;

	constructor() {
		this.keyguardManager = Utils.android.getApplicationContext().getSystemService('keyguard');
	}

	available(): Promise<BiometricIDAvailableResult> {
		return new Promise((resolve, reject) => {
			try {
				if (!this.keyguardManager || !this.keyguardManager.isKeyguardSecure()) {
					resolve({
						any: false,
					});
					return;
				}

				// The fingerprint API is only available from Android 6.0 (M, Api level 23)
				if (android.os.Build.VERSION.SDK_INT < 23) {
					reject(`Your api version doesn't support fingerprint authentication`);
					return;
				}

				const biometricManager = androidx.biometric.BiometricManager.from(Utils.android.getApplicationContext());
				const biometricConstants = androidx.biometric.BiometricManager;
				const biometricNoHardwareErrors: Array<number> = [biometricConstants.BIOMETRIC_ERROR_HW_UNAVAILABLE, biometricConstants.BIOMETRIC_ERROR_NO_HARDWARE, biometricConstants.BIOMETRIC_ERROR_SECURITY_UPDATE_REQUIRED, biometricConstants.BIOMETRIC_ERROR_UNSUPPORTED];
				const canAuthenticate = biometricManager.canAuthenticate();
				if (!biometricManager || biometricNoHardwareErrors.includes(canAuthenticate)) {
					// Device doesn't support biometric authentication
					reject(`Device doesn't support biometric authentication or requires an update`);
				} else if (canAuthenticate === androidx.biometric.BiometricManager.BIOMETRIC_ERROR_NONE_ENROLLED || canAuthenticate == biometricConstants.BIOMETRIC_STATUS_UNKNOWN) {
					// If the user has not enrolled any biometrics, they still might have the device secure so we can fallback
					// to present the user with the swipe, password, pin device security screen regardless
					// the developer can handle this resolve by checking the `touch` property and determine if they want to use the
					// verifyFingerprint method or not since they'll know the user has no finger prints enrolled but do have a security option enabled
					// https://developer.android.com/reference/android/app/KeyguardManager.html#isDeviceSecure() only 23+
					if (this.keyguardManager.isDeviceSecure()) {
						resolve({
							any: true,
							biometrics: false,
						});
					} else {
						reject(`User hasn't enrolled any biometrics to authenticate with`);
					}
				} else {
					// Phone has biometric hardware and is enrolled
					resolve({
						any: true,
						biometrics: true,
					});
				}
			} catch (ex) {
				console.log(`fingerprint-auth.available: ${ex}`);
				reject(ex);
			}
		});
	}

	didFingerprintDatabaseChange(): Promise<boolean> {
		return Promise.resolve(false);
	}

	// Following: https://developer.android.com/training/sign-in/biometric-auth#java as a guide
	verifyFingerprint(options: VerifyFingerprintWithCustomFallbackOptions): Promise<BioMetricResult> {
		return new Promise<BioMetricResult>((resolve, reject) => {
			try {
				if (!this.keyguardManager) {
					reject({
						code: ERROR_CODES.NOT_AVAILABLE,
						message: 'Keyguard manager not available.',
					});
				}

				if (this.keyguardManager && !this.keyguardManager.isKeyguardSecure()) {
					reject({
						code: ERROR_CODES.NOT_CONFIGURED,
						message: 'Secure lock screen hasn\'t been set up.\n Go to "Settings -> Security -> Screenlock" to set up a lock screen.',
					});
				}
				const pinFallback = options?.android?.pinFallback;

				let cryptoObject;

				if (!pinFallback) {
					FingerprintAuth.generateSecretKey();

					const cipher = this.getCipher();
					const secretKey = this.getSecretKey();
					cipher.init(javax.crypto.Cipher.ENCRYPT_MODE, secretKey);

					cryptoObject = org.nativescript.plugins.fingerprint.Utils.createCryptoObject(cipher);
				}

				const executor = androidx.core.content.ContextCompat.getMainExecutor(Utils.android.getApplicationContext());
				let authCallback = new AuthenticationCallback();
				authCallback.resolve = resolve;
				authCallback.reject = reject;

				this.biometricPrompt = new androidx.biometric.BiometricPrompt(this.getActivity(), executor, authCallback);

				if (pinFallback && android.os.Build.VERSION.SDK_INT < 30) {
					this.promptForPin(resolve, reject, options);
				} else if (pinFallback) {
					const builder = new androidx.biometric.BiometricPrompt.PromptInfo.Builder()
						.setTitle(options.title ? options.title : 'Login')
						.setSubtitle(options.subTitle ? options.subTitle : null)
						.setDescription(options.message ? options.message : null)
						.setConfirmationRequired(options.confirm ? options.confirm : false) // Confirm button after verify biometrics=
						.setAllowedAuthenticators(androidx.biometric.BiometricManager.Authenticators.BIOMETRIC_STRONG | androidx.biometric.BiometricManager.Authenticators.DEVICE_CREDENTIAL); // PIN Fallback or Cancel
					this.biometricPrompt.authenticate(builder.build());
				} else {
					const info = new androidx.biometric.BiometricPrompt.PromptInfo.Builder()
						.setTitle(options.title ? options.title : 'Login')
						.setSubtitle(options.subTitle ? options.subTitle : null)
						.setDescription(options.message ? options.message : null)
						.setConfirmationRequired(options.confirm ? options.confirm : false) // Confirm button after verify biometrics=
						.setNegativeButtonText(options.fallbackMessage ? options.fallbackMessage : 'Enter your password') // PIN Fallback or Cancel
						.setAllowedAuthenticators(androidx.biometric.BiometricManager.Authenticators.BIOMETRIC_STRONG) // PIN Fallback or Cancel
						.build();

					this.biometricPrompt.authenticate(info, cryptoObject);
				}
			} catch (ex) {
				console.log(`Error in fingerprint-auth.verifyFingerprint: ${ex}`);
				reject({
					code: ERROR_CODES.UNEXPECTED_ERROR,
					message: ex,
				});
			}
		});
	}

	verifyFingerprintWithCustomFallback(options: VerifyFingerprintWithCustomFallbackOptions): Promise<BioMetricResult> {
		return this.verifyFingerprint(options);
	}

	close(): void {
		this.biometricPrompt.cancelAuthentication();
	}

	/**
	 * Creates a symmetric key in the Android Key Store which can only be used after the user has
	 * authenticated with device credentials within the last X seconds.
	 */
	private static generateSecretKey(): void {
		const keyStore = java.security.KeyStore.getInstance('AndroidKeyStore');
		keyStore.load(null);
		const keyGenerator = javax.crypto.KeyGenerator.getInstance(android.security.keystore.KeyProperties.KEY_ALGORITHM_AES, 'AndroidKeyStore');

		const builder = new android.security.keystore.KeyGenParameterSpec.Builder(KEY_NAME, android.security.keystore.KeyProperties.PURPOSE_ENCRYPT | android.security.keystore.KeyProperties.PURPOSE_DECRYPT).setBlockModes([android.security.keystore.KeyProperties.BLOCK_MODE_CBC]).setEncryptionPaddings([android.security.keystore.KeyProperties.ENCRYPTION_PADDING_PKCS7]).setUserAuthenticationRequired(true);
		if (android.os.Build.VERSION.SDK_INT > 23) {
			builder.setInvalidatedByBiometricEnrollment(true);
		}
		keyGenerator.init(builder.build());
		keyGenerator.generateKey();
	}
	public promptForPin(resolve, reject, options) {
		const onActivityResult = (data: AndroidActivityResultEventData) => {
			if (data.requestCode === REQUEST_CODE_CONFIRM_DEVICE_CREDENTIALS) {
				if (data.resultCode === android.app.Activity.RESULT_OK) {
					// OK = -1
					// the user has just authenticated via the ConfirmDeviceCredential activity
					resolve({
						code: ERROR_CODES.SUCCESS,
						message: 'All OK',
					});
				} else {
					// the user has quit the activity without providing credendials

					reject({
						code: ERROR_CODES.USER_CANCELLED,
						message: 'User cancelled.',
					});
				}
			}
			Application.android.off(AndroidApplication.activityResultEvent, onActivityResult);
		};

		Application.android.on(AndroidApplication.activityResultEvent, onActivityResult);

		this.showAuthenticationScreen(options);
	}
	private getSecretKey() {
		const keyStore = java.security.KeyStore.getInstance('AndroidKeyStore');

		// Before the keystore can be accessed, it must be loaded.
		keyStore.load(null);
		return keyStore.getKey(KEY_NAME, null);
	}

	private getCipher(): javax.crypto.Cipher {
		return javax.crypto.Cipher.getInstance(`${android.security.keystore.KeyProperties.KEY_ALGORITHM_AES}/${android.security.keystore.KeyProperties.BLOCK_MODE_CBC}/${android.security.keystore.KeyProperties.ENCRYPTION_PADDING_PKCS7}`);
	}

	private getActivity(): any /* android.app.Activity */ {
		return Application.android.foregroundActivity || Application.android.startActivity;
	}

	/**
	 * Starts the built-in Android ConfirmDeviceCredential activity.
	 */
	private showAuthenticationScreen(options): void {
		// https://developer.android.com/reference/android/app/KeyguardManager#createConfirmDeviceCredentialIntent(java.lang.CharSequence,%2520java.lang.CharSequence)
		const intent = (this.keyguardManager as any).createConfirmDeviceCredentialIntent(options && options.title ? options.title : null, options && options.fallbackMessage ? options.fallbackMessage : null);
		if (intent !== null) {
			this.getActivity().startActivityForResult(intent, REQUEST_CODE_CONFIRM_DEVICE_CREDENTIALS);
		}
	}
}
