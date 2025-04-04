import Board from "../game/Board";
import CellChecker from "./CellChecker";
import GameResult from "./GameResult";
import ResultChecker from "./ResultChecker";

export default class HorizontalChecker implements ResultChecker {
    check(board: Board): GameResult {
        const result = [
            new CellChecker([[0, 0], [0, 1], [0, 2]]).check(board),
            new CellChecker([[1, 0], [1, 1], [1, 2]]).check(board),
            new CellChecker([[2, 0], [2, 1], [2, 2]]).check(board),
        ].find((r) => r.finished);
        return result ?? new GameResult()        
    }
}