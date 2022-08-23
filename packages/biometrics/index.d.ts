export * from './common';
import { BiometricIDAvailableResult, BiometricApi, VerifyBiometricOptions, BiometricResult, ERROR_CODES } from './common';
export declare class BiometricAuth implements BiometricApi {
	available(): Promise<BiometricIDAvailableResult>;
	/**
	 * Options is optional, to verify if the DB changed in android the key needs to be tested so you should
	 * provide the same options as a call to decrypt, otherwise for android no check is made and false will be returned.
	 *
	 * In android false will also be returned if the key does not exist.
	 *
	 * @param options pass same options as a call to decrypt.
	 */
	didBiometricDatabaseChange(options?: VerifyBiometricOptions): Promise<boolean>;
	/**
	 * IOS: This 'default' method uses keychain instead of localauth so the passcode fallback can be used
	 *
	 * Android: Depending on the options may or may not use crypto in conjunction with authentication.
	 *
	 * @param options options as to what to show.
	 */
	verifyBiometric(options: VerifyBiometricOptions): Promise<BiometricResult>;

	close(): void;
}
export { BiometricResult, ERROR_CODES };
