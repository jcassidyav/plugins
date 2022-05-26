import { Application, knownFolders } from '@nativescript/core';
import { GetOptions, SetOptions, RemoveOptions, RemoveAllOptions, EncryptedStorageCommon } from './common';
const MasterKeys = androidx.security.crypto.MasterKeys;
const EncryptedSharedPreferences = androidx.security.crypto.EncryptedSharedPreferences;
const DEFAULT_FILE_NAME = 'encrypted_preferences';
export class EncryptedStorage extends EncryptedStorageCommon {
	private sharedPreferences: android.content.SharedPreferences;

	constructor() {
		super();
	}

	get(arg: GetOptions): Promise<any> {
		return Promise.resolve(this.getSync(arg));
	}
	getSync(arg: GetOptions) {
		return this.getSharedPreferences().getString(arg.key, null);
	}
	set(arg: SetOptions): Promise<boolean> {
		return Promise.resolve(this.setSync(arg));
	}
	setSync(arg: SetOptions): boolean {
		return this.getSharedPreferences().edit().putString(arg.key, arg.value).commit();
	}
	remove(arg: RemoveOptions): Promise<boolean> {
		return Promise.resolve(this.removeSync(arg));
	}
	removeSync(arg: RemoveOptions): boolean {
		return this.getSharedPreferences().edit().remove(arg.key).commit();
	}
	removeAll(arg?: RemoveAllOptions): Promise<boolean> {
		return Promise.resolve(this.removeAllSync(arg));
	}
	removeAllSync(arg?: RemoveAllOptions): boolean {
		return this.getSharedPreferences().edit().clear().commit();
	}

	private getSharedPreferences() {
		if (this.sharedPreferences == null) {
			// try to create shared preferences
			this.createSharedPreferencesRetry();
		}

		if (this.sharedPreferences == null) {
			// dead at this point throw an error.
		}
		return this.sharedPreferences;
	}

	private createSharedPreferencesRetry() {
		try {
			this.createSharedPreferences();
		} catch {
			console.log('Cannot Catch Exception');
			this.deleteSharedPreferences();

			try {
				this.createSharedPreferences();
			} catch {
				console.log('Cannot initiate storage');
			}
		}
	}

	private createSharedPreferences() {
		const context = Application.android.context;

		const masterKeyAlias = MasterKeys.getOrCreate(MasterKeys.AES256_GCM_SPEC);
		this.sharedPreferences = EncryptedSharedPreferences.create(
			DEFAULT_FILE_NAME, // fileName
			masterKeyAlias, // masterKeyAlias
			context, // context
			EncryptedSharedPreferences.PrefKeyEncryptionScheme.AES256_SIV, // prefKeyEncryptionScheme
			EncryptedSharedPreferences.PrefValueEncryptionScheme.AES256_GCM // prefvalueEncryptionScheme
		);
		console.log('Deleting for the crack');
		this.deleteSharedPreferences();
	}

	private deleteSharedPreferences() {
		try {
			const context = Application.android.context;
			console.log('deleting preferences');

			context.getSharedPreferences(DEFAULT_FILE_NAME, android.content.Context.MODE_PRIVATE).edit().clear().apply();

			const sharedPrefs = knownFolders.currentApp().getFolder('shared_prefs');
			sharedPrefs.getFile('encrypted_preferences.xml').removeSync();

			const keyStore = java.security.KeyStore.getInstance('AndroidKeyStore');
			keyStore.load(null);
			keyStore.deleteEntry(MasterKeys.AES256_GCM_SPEC.getKeystoreAlias());
		} catch (e) {
			console.log('Error deleting preferences', e);
		}
	}
}
