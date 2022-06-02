import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
	NbButtonModule,
	NbCardModule,
	NbIconModule,
	NbLayoutModule,
	NbSelectModule
} from '@nebular/theme';
import { ConfigComponent } from './config.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
	imports: [
		CommonModule,
		NbIconModule,
		NbLayoutModule,
		NbCardModule,
		NbSelectModule,
		NbButtonModule,
		ReactiveFormsModule,
		RouterModule
	],
	declarations: [ConfigComponent]
})
export class ConfigModule {}
