import Board from "../game/Board";
import GameResult from "./GameResult";
import ResultChecker from "./ResultChecker";

export default class TieChecker implements ResultChecker {
    check(board: Board): GameResult {
        return board.isfull() ? new GameResult([], true) : new GameResult();       
    }
}