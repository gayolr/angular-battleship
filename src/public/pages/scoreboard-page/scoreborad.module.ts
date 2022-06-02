import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
	NbButtonModule,
	NbCardModule,
	NbIconModule,
	NbLayoutModule,
	NbListModule
} from '@nebular/theme';
import { ScoreboardComponent } from './scoreboard.component';
import { RouterModule } from '@angular/router';

@NgModule({
	imports: [
		CommonModule,
		NbIconModule,
		NbLayoutModule,
		NbCardModule,
		NbButtonModule,
		NbListModule,
		RouterModule
	],
	declarations: [ScoreboardComponent]
})
export class ScoreboardModule {}
