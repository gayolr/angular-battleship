import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import {
	NbDialogModule,
	NbGlobalLogicalPosition,
	NbLayoutModule,
	NbMenuModule,
	NbThemeModule,
	NbToastrModule
} from '@nebular/theme';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { CoreRoutingModule } from 'src/core/core-routing.module';
@NgModule({
	declarations: [AppComponent],
	imports: [
		AppRoutingModule,
		BrowserModule,
		BrowserAnimationsModule,
		CoreRoutingModule,
		RouterModule,
		NbLayoutModule,
		NbThemeModule.forRoot(),
		NbDialogModule.forRoot(),
		NbMenuModule.forRoot(),
		NbToastrModule.forRoot({
			position: NbGlobalLogicalPosition.BOTTOM_END,
			toastClass: 'toast-close'
		})
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {}
