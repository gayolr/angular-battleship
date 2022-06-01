import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbIconModule, NbLayoutModule } from '@nebular/theme';
import { HomeComponent } from './home.component';

@NgModule({
	imports: [CommonModule, NbIconModule, NbLayoutModule],
	declarations: [HomeComponent]
})
export class HomeModule {}
