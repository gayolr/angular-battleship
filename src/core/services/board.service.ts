import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Board } from '../classes/board';
import { Player } from '../classes/player';

interface TilesInterface {
	used?: boolean;
	value?: number;
	status?: string;
	header?: boolean;
	display?: string;
}

@Injectable()
export class BoardService {
	playerId: number = 1;
	boards: Board[] = [];
	playerTurn: number = 0;

	public playerTurnValid: Subject<number> = new Subject<number>();
	public winnerValid: Subject<boolean> = new Subject<boolean>();

	constructor() {}
	public isPlayerTurn(id: number) {
		this.playerTurn = id;
		this.playerTurnValid.next(this.playerTurn);
	}

	createBoard(size: number = 5) {
		let tiles: TilesInterface[][] = [];
		// create tiles for board
		for (let i = 0; i < size; i++) {
			tiles[i] = [];
			for (let j = 0; j < size; j++) {
				tiles[i][j] = { used: false, value: 0, status: '' };
				if (i == 0) {
					tiles[i][j] = { display: j == 0 ? ' ' : j.toString(), header: true };
				} else if (j == 0) {
					tiles[i][j] = { display: String.fromCharCode(64 + i), header: true };
				}
			}
		}
		// create ships
		let ships = [];
		ships[0] = 4;
		ships[1] = 3;
		ships[2] = 1;
		ships[3] = 2;
		// generate random ships for the board
		for (let i = 0; i < 4; ++i) {
			let randomVertical = Math.floor(Math.random() * 2);
			let direction = 0;
			if (i > randomVertical) {
				direction = 1;
			} else {
				direction = 0;
			}
			while (!this.addShip(tiles, i, direction, ships));
		}

		// create board
		let board = new Board({
			player: new Player({ id: this.playerId++ }),
			tiles: tiles
		});
		this.boards.push(board);
	}

	addShip(board: any, shipSize: number, direction: number, ships: number[]) {
		let shipLength = ships[shipSize];
		let ranRow = 0;
		let ranCol = 0;
		ranRow = Math.floor(Math.random() * 10) + 1;
		ranCol = Math.floor(Math.random() * 10) + 1;
		if (ranCol + shipLength >= 11) {
			return false;
		}
		if (ranRow + shipLength >= 11) {
			return false;
		}
		if (board[ranRow][ranCol].value == 1) {
			return false;
		}
		if (board[ranCol][ranRow].value == 1) {
			return false;
		}

		for (let i = 0; i < shipLength; i++) {
			if (direction === 0) {
				board[ranRow][ranCol + i].value = 1;
			} else {
				board[ranCol + i][ranRow].value = 1;
			}
		}
		return true;
	}

	changePlayer() {
		if (this.playerTurn === 0) {
			this.isPlayerTurn(1);
		} else {
			this.isPlayerTurn(0);
		}
	}

	isWinnerValid(): boolean {
		if (this.boards.find(board => board.player.score >= 10)) {
			return true;
		} else {
			return false;
		}
	}

	getWinnerPlayer(): any {
		return this.boards.find(board => board.player.score >= 10)?.player;
	}

	getBoards(): Board[] {
		return this.boards;
	}
}
