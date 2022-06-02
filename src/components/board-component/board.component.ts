import { Component, NgIterable } from '@angular/core';
import { Router } from '@angular/router';
import { NbToastrService } from '@nebular/theme';
import { BoardService } from 'src/core/services/board.service';

declare const Pusher: any;
const NUM_PLAYERS = 2;
const BOARD_SIZE = 11;

@Component({
	selector: 'board-component',
	templateUrl: './board.component.html',
	styleUrls: ['./board.component.scss'],
	providers: [BoardService]
})
export class BoardComponent {
	pusherChannel: any;
	canPlayPlayerTwo: boolean = false;
	canPlayPlayerOne: boolean = false;
	winner: boolean = false;
	gameOver: boolean = false;
	player: number = 0;
	players: number = 2;
	gameId: string = '';
	winnerPlayer: { id: number; score: number } = { id: 1, score: 0 };
	configGame: { level: string; turnsGame: number } = {
		level: 'infinity',
		turnsGame: 50
	};
	winnersGame: { name: string; date: Date } = {
		name: 'Test',
		date: new Date()
	};
	turnCont = 0;
	constructor(
		private toastr: NbToastrService,
		private boardService: BoardService
	) {
		this.createBoards();
		this.initGame();
	}

	initGame() {
		this.configGame = JSON.parse(localStorage.getItem('configGame') as any);
		let id = this.getQueryParam('id');
		if (!id) {
			id = this.getUniqueId();
			location.search = location.search ? '&id=' + id : 'id=' + id;
		}
		this.gameId = id;
		this.boards;
		this.setPlayer();
		this.player = 1;
		this.toastr.success('Success', 'Listo para jugar!!');
	}

	fireTorpedo(e: any, header: boolean) {
		if (header) {
			return;
		}

		let boardId = e.i,
			row = e.j,
			col = e.k,
			tile = (this.boards as any)[boardId].tiles[row][col];
		if (!this.checkValidHit(boardId, tile)) {
			return;
		}

		if (tile.value == 1) {
			this.toastr.success('You got this.', 'HURRAAA! YOU SANK A SHIP!');
			(this.boards as any)[boardId].tiles[row][col].status = 'win';
			(this.boards as any)[boardId].tiles[row][col].display = '💥';
			(this.boards as any)[this.player].player.score++;
		} else {
			this.toastr.info('Keep trying fam.', 'OOPS! YOU MISSED THIS TIME');
			(this.boards as any)[boardId].tiles[row][col].status = 'fail';
		}
		(this.boards as any)[boardId].tiles[row][col].used = true;
		(this.boards as any)[boardId].tiles[row][col].value = 'X';
	}

	createBoards(): BoardComponent {
		for (let i = 0; i < NUM_PLAYERS; i++)
			this.boardService.createBoard(BOARD_SIZE);
		return this;
	}

	checkValidHit(boardId: number, tile: any): boolean {
		if (tile.header) {
			return false;
		}
		if (boardId == this.boardService.playerTurn) {
			this.toastr.danger(
				"Don't commit suicide.",
				"You can't hit your own board."
			);
			return false;
		}

		if (this.configGame.turnsGame === this.turnCont) {
			this.gameOver = true;
			this.toastr.danger('Game is over');
			return false;
		}

		if (this.boardService.isWinnerValid()) {
			this.winnerPlayer = this.boardService.getWinnerPlayer();
			let winnerArray = [] as any;
			winnerArray = JSON.parse(localStorage.getItem('winnersGame') as any);
			if (winnerArray !== null) {
				winnerArray.push({ name: this.gameId, date: new Date() });
				localStorage.setItem('winnersGame', JSON.stringify(winnerArray));
			} else {
				localStorage.setItem('winnersGame', JSON.stringify([{ name: this.gameId, date: new Date() }]));
			}
			this.toastr.danger('Game is over');
			return (this.winner = true);
		}
		if (
			(this.player === this.boardService.playerTurn &&
				!this.canPlayPlayerOne) ||
			(this.player === this.boardService.playerTurn && !this.canPlayPlayerTwo)
		) {
			this.toastr.danger('A bit too eager.', "It's not your turn to play.");
			return false;
		}

		if (tile.value == 'X') {
			this.toastr.danger(
				"Don't waste your torpedos.",
				'You already shot here.'
			);
			return false;
		}
		this.setPlayer();
		this.boardService.changePlayer();
		this.turnCont = this.turnCont + 1;
		return true;
	}

	setPlayer() {
		this.player = this.boardService.playerTurn;
		this.canPlayPlayerOne = !this.canPlayPlayerOne;
		this.canPlayPlayerTwo = !this.canPlayPlayerTwo;
	}

	getQueryParam(name: string) {
		var match = RegExp('[?&]' + name + '=([^&]*)').exec(window.location.search);
		return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
	}

	getUniqueId() {
		return 'Player-' + Math.random().toString(36).substr(2, 8);
	}

	restartGame() {
		location.reload();
	}

	get boards(): NgIterable<any> {
		return this.boardService.getBoards();
	}

	get playerTurn() {
		return this.boardService.playerTurn;
	}

	get validPlayer(): boolean {
		return this.players >= NUM_PLAYERS && this.player < NUM_PLAYERS;
	}
}
