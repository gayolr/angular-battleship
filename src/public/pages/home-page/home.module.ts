import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbButtonModule, NbIconModule, NbLayoutModule } from '@nebular/theme';
import { HomeComponent } from './home.component';
import { BoardComponent } from 'src/components/board-component/board.component';
import { RouterModule } from '@angular/router';
@NgModule({
	imports: [
		CommonModule,
		NbIconModule,
		NbLayoutModule,
		RouterModule,
		NbButtonModule
	],
	declarations: [HomeComponent, BoardComponent]
})
export class HomeModule {}
