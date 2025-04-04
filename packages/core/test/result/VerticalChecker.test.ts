import { Board, PlayerType, VerticalChecker } from "../../src"

test('Deve finalizar com vitoria do jogador o', () => {
    const board = Board.empty()
    .set(0, 0, PlayerType.O)
    .set(1, 0, PlayerType.O)
    .set(2, 0, PlayerType.O)

    const result = new VerticalChecker().check(board)    
    expect(result.finished).toBeTruthy()
    expect(result.oWind).toBeTruthy()
    expect(result.xWind).toBeFalsy()
    expect(result.inProgress).toBeFalsy()
})

test('Deve continuar em processo sem vitoria', () => {
    const board = Board.empty()
    .set(0, 0, PlayerType.O)
    .set(1, 0, PlayerType.O)
    .set(2, 1, PlayerType.X)

    const result = new VerticalChecker().check(board)    
    expect(result.finished).toBeFalsy()
    expect(result.oWind).toBeFalsy()
    expect(result.xWind).toBeFalsy()
    expect(result.inProgress).toBeTruthy()
})