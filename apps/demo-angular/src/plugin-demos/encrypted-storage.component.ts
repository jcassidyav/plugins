import { Component, NgZone } from '@angular/core';
import { DemoSharedEncryptedStorage } from '@demo/shared';
import {} from '@nativescript/encrypted-storage';

@Component({
	selector: 'demo-encrypted-storage',
	templateUrl: 'encrypted-storage.component.html',
})
export class EncryptedStorageComponent {
	demoShared: DemoSharedEncryptedStorage;

	constructor(private _ngZone: NgZone) {}

	ngOnInit() {
		this.demoShared = new DemoSharedEncryptedStorage();
	}
}
