import { EncryptedStorageCommon, GetOptions, RemoveAllOptions, RemoveOptions, SetOptions } from './common';

export class EncryptedStorage extends EncryptedStorageCommon {
	get(arg: GetOptions): Promise<any> {
		throw new Error('Method not implemented.');
	}
	getSync(arg: GetOptions) {
		throw new Error('Method not implemented.');
	}
	set(arg: SetOptions): Promise<boolean> {
		throw new Error('Method not implemented.');
	}
	setSync(arg: SetOptions): boolean {
		throw new Error('Method not implemented.');
	}
	remove(arg: RemoveOptions): Promise<boolean> {
		throw new Error('Method not implemented.');
	}
	removeSync(arg: RemoveOptions): boolean {
		throw new Error('Method not implemented.');
	}
	removeAll(arg?: RemoveAllOptions): Promise<boolean> {
		throw new Error('Method not implemented.');
	}
	removeAllSync(arg?: RemoveAllOptions): boolean {
		throw new Error('Method not implemented.');
	}
}
