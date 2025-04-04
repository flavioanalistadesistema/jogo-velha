import Board from "../game/Board";
import Cell from "../shared/Cell";
import GameResult from "./GameResult";
import ResultChecker from "./ResultChecker";

export default class CellChecker implements ResultChecker {
    constructor(
        private readonly cell: [number, number][],
    ){}

    check(board: Board): GameResult {
        const cell = this.cell.map(([row, column]) => board.getCell(row, column)).filter((cell) => cell !== undefined) as Cell[]
        const types = cell.map((cell) => cell!.playerType)
        return types.every((type) => type !== null && type === types[0]) ? 
        new GameResult(cell as Cell[]) : new GameResult()
    }
}