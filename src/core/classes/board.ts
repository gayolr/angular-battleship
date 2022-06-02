import { Player } from './player';
export class Board {
	player: Player = { id: 0, score: 0 };
	tiles: Object[] = [];

	constructor(values: Object = {}) {
		Object.assign(this, values);
	}
}
