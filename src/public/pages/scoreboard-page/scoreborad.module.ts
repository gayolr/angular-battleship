import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbIconModule, NbLayoutModule } from '@nebular/theme';
import { ScoreboardComponent } from './scoreboard.component';

@NgModule({
	imports: [CommonModule, NbIconModule, NbLayoutModule],
	declarations: [ScoreboardComponent]
})
export class ScoreboardModule {}
