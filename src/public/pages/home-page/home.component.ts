import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})
export class HomeComponent {
	constructor(private router: Router) {}
	configGame: boolean = false;

	ngOnInit() {
		localStorage.getItem('configGame')
			? (this.configGame = true)
			: (this.configGame = false);
		if (!this.configGame) {
			this.router.navigate(['configuration']);
		}
	}
}
