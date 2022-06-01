import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { NbThemeModule } from '@nebular/theme';
@NgModule({
	declarations: [AppComponent],
	imports: [BrowserModule, BrowserAnimationsModule, NbThemeModule.forRoot()],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {}
