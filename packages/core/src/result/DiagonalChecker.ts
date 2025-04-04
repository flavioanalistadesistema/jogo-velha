import Board from "../game/Board";
import CellChecker from "./CellChecker";
import GameResult from "./GameResult";
import ResultChecker from "./ResultChecker";

export default class DiagonalChecker implements ResultChecker {
    check(board: Board): GameResult {
        const d1 = new CellChecker([[0, 0], [1, 1], [2, 2]]).check(board)
        const d2 = new CellChecker([[0, 2], [1, 1], [2, 0]]).check(board)
        return d1.finished ? d1 : d2 
        
    }
}