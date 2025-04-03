import Cell from "../shared/Cell";
import { PlayerType } from "../shared/PlayerType";

export default class GameResult {
    constructor(
        readonly winningMove : Cell[] = [],
        private readonly _tied: boolean = false,
    ){}

    get xWind(): boolean {
        return this.winningMove[0]?.playerType === PlayerType.X
    }

    get oWind(): boolean {
        return this.winningMove[0]?.playerType === PlayerType.O
    }

    get tied(): boolean {        
        return !this.xWind && !this.oWind && this._tied
    }

    get inProgress(): boolean {
     return this.winningMove.length === 0 && !this._tied
    }

    get finished(): boolean {
        return !this.inProgress
    }

    hasCel(row: number, column: number): boolean {
        return this.winningMove.find((cell) => cell.row === row && cell.column === column) !== undefined
    }

}