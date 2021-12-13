export * from './common';
import { BiometricIDAvailableResult, FingerprintAuthApi, VerifyFingerprintOptions, VerifyFingerprintWithCustomFallbackOptions, BioMetricResult } from './common';
export declare class FingerprintAuth implements FingerprintAuthApi {
	available(): Promise<BiometricIDAvailableResult>;
	didFingerprintDatabaseChange(): Promise<boolean>;
	/**
	 * IOS: This 'default' method uses keychain instead of localauth so the passcode fallback can be used
	 *
	 * Android: Depending on the options may or may not use crypto in conjunction with authentication.
	 *
	 * @param options options as to what to show.
	 */
	verifyFingerprint(options: VerifyFingerprintWithCustomFallbackOptions): Promise<BioMetricResult>;
	/**
	 * IOS: This implementation uses LocalAuthentication and has no built-in passcode fallback
	 *
	 * Android: This is a passthrough to verifyFingerprint usePasscodeFallback is ignored.
	 *
	 * @param options options as to what to show.
	 * @param usePasscodeFallback indicate fallback to passcode for ios only, ignored by android use options.android.
	 */
	verifyFingerprintWithCustomFallback(options: VerifyFingerprintWithCustomFallbackOptions, usePasscodeFallback?: boolean): Promise<BioMetricResult>;
	close(): void;
}
export { BioMetricResult };
