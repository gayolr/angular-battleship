import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbIconModule, NbLayoutModule } from '@nebular/theme';
import { HomeComponent } from './home.component';
import { BoardComponent } from 'src/components/board.component';

@NgModule({
	imports: [CommonModule, NbIconModule, NbLayoutModule],
	declarations: [HomeComponent, BoardComponent]
})
export class HomeModule {}
