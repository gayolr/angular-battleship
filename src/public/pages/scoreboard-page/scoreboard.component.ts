import { Component } from '@angular/core';

@Component({
	selector: 'app-scoreboard',
	templateUrl: './scoreboard.component.html',
	styleUrls: ['./scoreboard.component.scss']
})
export class ScoreboardComponent {
	constructor() {}
	players: any;
	ngOnInit() {
		this.players = JSON.parse(localStorage.getItem('winnersGame') as any);
	}
}
