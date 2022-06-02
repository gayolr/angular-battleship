import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PublicComponent } from './public.component';
import { HomeComponent } from './pages/home-page/home.component';
import { ConfigComponent } from './pages/config-page/config.component';
import { ScoreboardComponent } from './pages/scoreboard-page/scoreboard.component';

const routes: Routes = [
	{
		path: '',
		component: PublicComponent,
		children: [
			{ path: '', component: HomeComponent },
			{ path: 'configuration', component: ConfigComponent },
			{ path: 'scoreboard', component: ScoreboardComponent }
		],
	
	}

];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class PublicRoutingModule {}
