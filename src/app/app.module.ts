import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import {
	NbDialogModule,
	NbLayoutModule,
	NbMenuModule,
	NbThemeModule
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
		NbMenuModule.forRoot()
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {}
