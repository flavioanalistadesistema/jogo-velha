import { Game, Player, PlayerType } from "../../src";


test('Deve retornar o proximo jogador', () => {
    const game = Game.create(new Player('X', PlayerType.X), new Player('O', PlayerType.O));
    expect(game.currentPlayer.type).toBe(PlayerType.X);
    expect(game.nextRound().currentPlayer.type).toBe(PlayerType.O);
});

test('Deve finalizar o jogo com a vitoria do jogador X', () => {
    const game = Game.create(new Player('X', PlayerType.X), new Player('O', PlayerType.O))
        .addMove(0, 0)
        .addMove(1, 0)
        .addMove(1, 1)
        .addMove(2, 0)
        .addMove(2, 2)        
        
    expect(game.result.finished).toBeTruthy();
    expect(game.result.xWind).toBeTruthy();
    expect(game.result.oWind).toBeFalsy();
    expect(game.player1.score).toBe(1);
    expect(game.player2.score).toBe(0);
})


test('Deve finalizar o jogo com a vitoria do jogador O', () => {
    const game = Game.create(new Player('X', PlayerType.X), new Player('O', PlayerType.O))
        .addMove(1, 1)
        .addMove(0, 0)
        .addMove(1, 2)
        .addMove(1, 0)
        .addMove(2, 1)
        .addMove(2, 0)        
        
    expect(game.result.finished).toBeTruthy();
    expect(game.result.xWind).toBeFalsy();
    expect(game.result.oWind).toBeTruthy();
    expect(game.player1.score).toBe(0);
    expect(game.player2.score).toBe(1);
})

test('Deve limpar o jogo depois de uma vitoria', () => {
    const game = Game.create(new Player('X', PlayerType.X), new Player('O', PlayerType.O))
        .addMove(1, 1)
        .addMove(0, 0)
        .addMove(1, 2)
        .addMove(1, 0)
        .addMove(2, 1)
        .addMove(2, 0)
        .clearBoard()
        
    expect(game.result.finished).toBeFalsy();
    expect(game.result.inProgress).toBeTruthy();
    expect(game.player1.score).toBe(0);
    expect(game.player2.score).toBe(0);
})

test('Deve ir para proxima jogada depois de uma vitoria', () => {
    const game = Game.create(new Player('X', PlayerType.X), new Player('O', PlayerType.O))        
        .addMove(0, 0)
        .addMove(1, 1)
        .addMove(0, 1)
        .addMove(1, 2)
        .addMove(0, 2)
        .nextRound()        
    
    expect(game.result.inProgress).toBeFalsy();
    expect(game.player1.score).toBe(1);
    expect(game.player2.score).toBe(0);
    expect(game.currentPlayer.type).toBe(game.player1.type);
})

test('Deve alternar jogador ao limpar jogo', () => {
    const game = Game.create(new Player('X', PlayerType.X), new Player('O', PlayerType.O))
    expect(game.currentPlayer.type).toBe(game.player1.type);

    const newGame = game.clearBoard()
    expect(newGame.currentPlayer.type).toBe(game.player2.type);    
})

test('Deve alternar jogador ao adicionar jogada', () => {
    const game = Game.create(new Player('X', PlayerType.X), new Player('O', PlayerType.O))
    expect(game.currentPlayer.type).toBe(game.player1.type);

    const newGame = game.addMove(0, 0)
    expect(newGame.currentPlayer.type).toBe(game.player2.type);
})

test('Deve retornar o jogador atual', () => {
    const game = Game.create(new Player('X', PlayerType.X), new Player('O', PlayerType.O))
    expect(game.currentPlayer.type).toBe(PlayerType.X);
})

test('Deve retornar o jogador atual depois de uma jogada', () => {
    const game = Game.create(new Player('X', PlayerType.X), new Player('O', PlayerType.O))
        .addMove(0, 0)
    expect(game.currentPlayer.type).toBe(PlayerType.O);
})

test('Deve terminar uma jogada com empate', () => {
    const game = Game.create(new Player('X', PlayerType.X), new Player('O', PlayerType.O))
        .addMove(0, 0)
        .addMove(1, 0)
        .addMove(0, 1)
        .addMove(1, 1)
        .addMove(1, 2)
        .addMove(0, 2)
        .addMove(2, 0)
        .addMove(2, 1)
        .addMove(2, 2)
        
    expect(game.result.finished).toBeTruthy();
    expect(game.result.tied).toBeTruthy();
    expect(game.player1.score).toBe(0);
    expect(game.player2.score).toBe(0);
    expect(game.ties).toBe(1);
})