import { Board, DiagonalChecker, PlayerType } from "../../src"


test('Deve finalizar com vitoria do jogador x', () => {
    const board = Board.empty()
    .set(0, 0, PlayerType.X)
    .set(1, 1, PlayerType.X)
    .set(2, 2, PlayerType.X)

    const result = new DiagonalChecker().check(board)
    expect(result.finished).toBeTruthy()
    expect(result.xWind).toBeTruthy()
    expect(result.oWind).toBeFalsy()
    expect(result.inProgress).toBeFalsy()
})

test('Deve finalizar com vitoria do jogador o', () => {
    const board = Board.empty()
    .set(0, 2, PlayerType.O)
    .set(1, 1, PlayerType.O)
    .set(2, 0, PlayerType.O)

    const result = new DiagonalChecker().check(board)
    expect(result.finished).toBeTruthy()
    expect(result.xWind).toBeFalsy()
    expect(result.oWind).toBeTruthy()
    expect(result.inProgress).toBeFalsy()
})

test('Deve continuar em processo sem vitoria', () => {
    const board = Board.empty()
    .set(0, 2, PlayerType.O)
    .set(1, 1, PlayerType.X)
    .set(2, 0, PlayerType.O)

    const result = new DiagonalChecker().check(board)
    expect(result.finished).toBeFalsy()
    expect(result.xWind).toBeFalsy()
    expect(result.oWind).toBeFalsy()
    expect(result.inProgress).toBeTruthy()
})