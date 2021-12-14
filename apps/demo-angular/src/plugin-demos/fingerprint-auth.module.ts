import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule, NativeScriptFormsModule } from '@nativescript/angular';
import { FingerprintAuthComponent } from './fingerprint-auth.component';

@NgModule({
	imports: [NativeScriptCommonModule, NativeScriptFormsModule, NativeScriptRouterModule.forChild([{ path: '', component: FingerprintAuthComponent }])],
	declarations: [FingerprintAuthComponent],
	schemas: [NO_ERRORS_SCHEMA],
})
export class FingerprintAuthModule {}
