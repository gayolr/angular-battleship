import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
	selector: 'app-config',
	templateUrl: './config.component.html',
	styleUrls: ['./config.component.scss']
})
export class ConfigComponent {
	constructor() {}

	selectedItem = '';
	turnsGame: number = 200;
	level: 'infinity' | 'medium' | 'hard' = 'infinity';

	public form = new FormGroup({
		turnsGame: new FormControl('', [Validators.min(50), Validators.max(200)]),
		level: new FormControl('')
	});

	submit() {
		this.form;
		if (this.form.value) {
			localStorage.setItem('configGame', JSON.stringify(this.form.value));
		}
	}
}
