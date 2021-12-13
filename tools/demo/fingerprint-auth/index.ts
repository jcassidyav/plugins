import { DemoSharedBase } from '../utils';
import { FingerprintAuth, BiometricIDAvailableResult } from '@nativescript/fingerprint-auth';

const CONFIGURED_PASSWORD = 'MyPassword';

export class DemoSharedFingerprintAuth extends DemoSharedBase {
	private fingerprintAuth: FingerprintAuth;
	status: string = 'Tap a button below..';

	constructor() {
		super();
		this.fingerprintAuth = new FingerprintAuth();
	}

	doCheckAvailable(): void {
		this.fingerprintAuth
			.available()
			.then((result: BiometricIDAvailableResult) => {
				console.log('doCheckAvailable result: ' + JSON.stringify(result));
				this.set('status', 'Biometric ID available? - ' + (result.any ? (result.face ? 'Face' : 'Touch') : 'NO'));
			})
			.catch((err) => {
				console.log('doCheckAvailable error: ' + err);
				this.set('status', 'Error: ' + err);
			});
	}

	doCheckFingerprintsChanged(): void {
		this.fingerprintAuth.didFingerprintDatabaseChange().then((changed: boolean) => {
			this.set('status', 'Biometric ID changed? - ' + (changed ? 'YES' : 'NO'));
		});
	}

	doVerifyFingerprint(): void {
		this.fingerprintAuth
			.verifyFingerprint({
				title: 'Enter your password',
				message: 'Scan yer finger', // optional
			})
			.then(() => this.set('status', 'Biometric ID / passcode OK'))
			.catch((err) => {
				alert({
					title: 'Biometric ID NOT OK / canceled',
					message: JSON.stringify(err),
					okButtonText: 'Mmkay',
				});
			});
	}

	doVerifyFingerprintWithPinFallBack(): void {
		this.fingerprintAuth
			.verifyFingerprint({
				title: 'Enter your password',
				message: 'Scan yer finger', // optional
				android: { pinFallback: true },
			})
			.then(() => {
				this.set('status', 'Biometric ID OK');
			})
			.catch((err) => this.set('status', `Biometric ID NOT OK: " + ${JSON.stringify(err)}`));
	}

	doVerifyFingerprintWithCustomFallback(): void {
		this.fingerprintAuth
			.verifyFingerprintWithCustomFallback(
				{
					title: 'Enter your password',
					message: 'Scan yer finger', // optional
					fallbackMessage: 'Enter PIN', // optional
				},
				true
			)
			.then(() => this.set('status', 'Biometric ID OK'))
			.catch((error) => {
				this.set('status', 'Biometric ID NOT OK: ' + JSON.stringify(error));
				alert({
					title: 'Biometric ID NOT OK',
					message: error.code === -3 ? 'Show custom fallback' : error.message,
					okButtonText: 'Mmkay',
				});
			});
	}

	doVerifyFingerprintWithEncrypt(): void {
		this.fingerprintAuth
			.verifyFingerprint({
				title: 'Enter your password',
				message: 'Scan yer finger', // optional
				android: { pinFallback: true, keyName: 'MySecretKeyName', encryptText: CONFIGURED_PASSWORD },
			})
			.then((result) => {
				this.set('status', 'Biometric ID OK');
			})
			.catch((err) => this.set('status', `Biometric ID NOT OK: " + ${JSON.stringify(err)}`));
	}
	doVerifyFingerprintWithDecrypt(): void {
		this.fingerprintAuth
			.verifyFingerprint({
				title: 'Enter your password',
				message: 'Scan yer finger', // optional
				android: { pinFallback: true },
			})
			.then(() => {
				this.set('status', 'Biometric ID OK');
			})
			.catch((err) => this.set('status', `Biometric ID NOT OK: " + ${JSON.stringify(err)}`));
	}
}
