import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbIconModule, NbLayoutModule } from '@nebular/theme';
import { ConfigComponent } from './config.component';

@NgModule({
	imports: [CommonModule, NbIconModule, NbLayoutModule],
	declarations: [ConfigComponent]
})
export class ConfigModule {}
