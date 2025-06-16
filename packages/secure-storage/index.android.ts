import { GetOptions, SetOptions, RemoveOptions, RemoveAllOptions, SecureStorageCommon } from './common';
import { ApplicationSettings } from '@nativescript/core';

declare const com: any;

export class SecureStorage extends SecureStorageCommon {
	protected static IS_FIRST_RUNA = '__IS_FIRST_RUN__A';

	constructor() {
		super();
		this.isFirst = ApplicationSettings.getBoolean(SecureStorage.IS_FIRST_RUNA, true);
		if (this.isFirst) {
			ApplicationSettings.setBoolean(SecureStorage.IS_FIRST_RUNA, false);
		}
	}

	get(arg: GetOptions): Promise<any> {
		return new Promise((resolve, reject) => {
			resolve(this.getSync(arg));
		});
	}

	getSync(arg: GetOptions): any {
		const result = ApplicationSettings.getString(arg.key);
		return result === undefined ? null : result;
	}

	set(arg: SetOptions): Promise<boolean> {
		return new Promise((resolve, reject) => {
			resolve(this.setSync(arg));
		});
	}

	setSync(arg: SetOptions): boolean {
		ApplicationSettings.setString(arg.key, arg.value);
		return true;
	}

	remove(arg: RemoveOptions): Promise<boolean> {
		return new Promise((resolve, reject) => {
			resolve(this.removeSync(arg));
		});
	}

	removeSync(arg: RemoveOptions): boolean {
		ApplicationSettings.remove(arg.key);
		return true;
	}

	removeAll(arg?: RemoveAllOptions): Promise<boolean> {
		return new Promise((resolve, reject) => {
			resolve(this.removeAllSync());
		});
	}

	removeAllSync(arg?: RemoveAllOptions): boolean {
		//Get first run
		ApplicationSettings.clear();
		//reset first run
		return true;
	}
}
