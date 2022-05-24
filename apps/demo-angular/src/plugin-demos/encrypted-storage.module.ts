import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { EncryptedStorageComponent } from './encrypted-storage.component';

@NgModule({
	imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: EncryptedStorageComponent }])],
	declarations: [EncryptedStorageComponent],
	schemas: [NO_ERRORS_SCHEMA],
})
export class EncryptedStorageModule {}
