import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from 'src/public/pages/not-found-page/not-found.component';

const routes: Routes = [
	{
		path: '404',
		component: NotFoundComponent,
	},
	{
		path: '',
		loadChildren: () =>
			import('../public/public.module').then((mod) => mod.PublicModule),
	},
	{
		path: '**',
		component: NotFoundComponent,
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class CoreRoutingModule {}
