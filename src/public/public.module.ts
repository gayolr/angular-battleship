import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NbLayoutModule } from '@nebular/theme';
import { PublicComponent } from './public.component';
import { PublicRoutingModule } from './public.routing.module';
import { HomeModule } from './pages/home-page/home.module';
import { ScoreboardModule } from './pages/scoreboard-page/scoreborad.module';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		PublicRoutingModule,
		HomeModule,
		ScoreboardModule,
		ReactiveFormsModule,
		NbLayoutModule
	],
	declarations: [PublicComponent],
	exports: [],
	providers: []
})
export class PublicModule {}
