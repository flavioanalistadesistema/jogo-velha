import Player from "../player/Player";
import DiagonalChecker from "../result/DiagonalChecker";
import GameResult from "../result/GameResult";
import HorizontalChecker from "../result/HorizontalChecker";
import TieChecker from "../result/TieChecker";
import VerticalChecker from "../result/VerticalCheker";
import { PlayerType } from "../shared/PlayerType";
import Board from "./Board";

export default class Game {
    constructor(
        readonly player1: Player,
        readonly player2: Player,
        readonly board: Board,
        readonly firstPlayer: Player,
        readonly currentPlayer: Player,
        readonly ties: number = 0,
        readonly result: GameResult = new GameResult(),
    ){}

    static create(player1: Player, player2: Player): Game {
        return new Game(player1, player2, Board.empty(), player1, player1);
    }

    nextRound(): Game {        
        const newFirstPlayer = this.firstPlayer === this.player1 ? this.player2 : this.player1;
        return new Game(this.player1, this.player2, Board.empty(), newFirstPlayer, newFirstPlayer, this.ties, this.result);
    }

    clearBoard(): Game {
        const newFirstPlayer = this.firstPlayer === this.player1 ? this.player2 : this.player1;
        return new Game(
            this.player1.clearScore(),
            this.player2.clearScore(),
            Board.empty(),
            newFirstPlayer,
            newFirstPlayer
        )
    }
     
    addMove(row: number, column: number): Game {
        if (this.board.isNotEmpty(row, column)) return this;
        if (!this.result.inProgress) return this;

        const board = this.board.set(row, column, this.currentPlayer.type);
        const result = this.calculateResult(board);
        const [player1, player2] = this.players(result)

        return new Game(
            player1,
            player2,
            board,
            this.firstPlayer,
            this.currentPlayer === this.player1 ? this.player2 : this.player1,
            result.tied ? this.ties + 1 : this.ties,            
            result
        ).switchPlayer();
    }

    private switchPlayer(): Game {
        if (this.result.inProgress) return this;        
        const newCurrent = this.currentPlayer.type === this.player1.type ? this.player2 : this.player1;

        return new Game(
            this.player1,
            this.player2,
            this.board,
            this.firstPlayer,
            newCurrent,
            this.ties,
            this.result
        )
    }

    private players(result: GameResult): [Player, Player] {
        if (result.xWind) {
            return this.player1.type === PlayerType.X 
            ? [this.player1.addScore(1), this.player2] 
            : [this.player1, this.player2.addScore(1)]
        }
        if (result.oWind) {
            return this.player1.type === PlayerType.O 
            ? [this.player1.addScore(1), this.player2] 
            : [this.player1, this.player2.addScore(1)]
        }   
        return [this.player1, this.player2];    
    }

    private calculateResult(board: Board): GameResult {        
        const results = [
            new VerticalChecker().check(board),
            new HorizontalChecker().check(board),
            new DiagonalChecker().check(board),
        ]
        return results.find((result) => result.finished) ?? new TieChecker().check(board);
    }    

}