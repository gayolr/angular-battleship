import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NbCardModule, NbInputModule, NbLayoutModule } from '@nebular/theme';
import { PublicComponent } from './public.component';
import { PublicRoutingModule } from './public.routing.module';
import { HomeModule } from './pages/home-page/home.module';
import { ScoreboardModule } from './pages/scoreboard-page/scoreborad.module';
import { ConfigModule } from './pages/config-page/config.module';
@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		PublicRoutingModule,
		HomeModule,
		ScoreboardModule,
		ConfigModule,
		ReactiveFormsModule,
		NbLayoutModule,
		NbInputModule,
		NbCardModule
	],
	declarations: [PublicComponent],
	exports: [],
	providers: []
})
export class PublicModule {}
