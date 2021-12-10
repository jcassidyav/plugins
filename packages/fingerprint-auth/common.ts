export enum ERROR_CODES {
	PASSWORD_FALLBACK_SELECTED = -3, // historically this is what iOS uses, so using that as well
	SUCCESS = 0,
	DEVELOPER_ERROR = 10,
	NOT_AVAILABLE = 20,
	NOT_CONFIGURED = 30,
	NOT_RECOGNIZED = 40,
	RECOVERABLE_ERROR = 50,
	USER_CANCELLED = 60,
	UNEXPECTED_ERROR = 70,
}

export interface VerifyFingerprintOptions {
	/**
	 * The required title in the fingerprint page for android.
	 * Default: whatever the device default is ('Confirm your password' is likely)
	 */
	title?: string;
	/**
	 * The optional subtitle in the fingerprint page for android.
	 * Default: Empty
	 */
	subTitle?: string;
	/**
	 * The optional message in the fingerprint dialog on ios and page description on android.
	 * Default: 'Scan your finger' on iOS and the device default on Android (which is likely 'Enter your device password to continue').
	 */
	message?: string;
	/**
	 * The optional confirm button after biometrics have been verified in the fingerprint page for android.
	 * Default: False
	 */
	confirm?: boolean;
}

export interface VerifyFingerprintWithCustomFallbackOptions extends VerifyFingerprintOptions {
	/**
	 * The optional button label when scanning the fingerprint fails.
	 * Default: 'Enter password'.
	 *
	 * Android:  When pinFallback is true this will be the text displayed on the pin dialog.
	 * 			 When pinFallback is false this will be the Negative button text on the Biometric Prompt.
	 */
	fallbackMessage?: string;
	android?: {
		/***
		 * Allow Fallback to Pin on Android - note if true no cryptographic operations will happen and face id is not available.
		 */
		pinFallback: boolean;
	};
}

export interface BiometricIDAvailableResult {
	/**
	 * Has Bio
	 *
	 * Note: will be true if no bio available on android but device is secure ( has pin etc. set).
	 */
	any: boolean;
	/***
	 * IOS Only
	 */
	touch?: boolean;
	/***
	 * IOS Only
	 */
	face?: boolean;
	/***
	 * Android Only
	 */
	biometrics?: boolean;
}

//noinspection JSUnusedGlobalSymbols
export interface FingerprintAuthApi {
	available(): Promise<BiometricIDAvailableResult>;

	didFingerprintDatabaseChange(): Promise<boolean>;
	/**
	 * This (recommended) method uses keychain instead of localauth so the passcode fallback can be used.
	 * On Android, when 'useCustomAndroidUI' is set to 'true', and the user opted for manually entering the password,
	 * this method may return a string (the entered password) for you to compare to the actual password.
	 */
	verifyFingerprint(options: VerifyFingerprintOptions): Promise<BioMetricResult>;

	/**
	 * This implementation uses LocalAuthentication and has no built-in passcode fallback on iOS.
	 * On Android this is exactly the same as 'verifyFingerprint'
	 */
	verifyFingerprintWithCustomFallback(options: VerifyFingerprintWithCustomFallbackOptions): Promise<BioMetricResult>;

	/**
	 * Note will not do anyting on android if using pin fallback.
	 */
	close(): void;
}

export interface BioMetricResult {
	code: ERROR_CODES;
	message: string;
}
