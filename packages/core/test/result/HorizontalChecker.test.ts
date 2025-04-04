import { Board, HorizontalChecker } from "../../src"

test('Deve finalizar com vitoria do jogador x', () => {
    const board = Board.empty()
    .set(0, 0, 'X')
    .set(0, 1, 'X')
    .set(0, 2, 'X')

    const result = new HorizontalChecker().check(board)
    expect(result.finished).toBeTruthy()
    expect(result.xWind).toBeTruthy()
    expect(result.oWind).toBeFalsy()
})

test('Deve continuar em processo sem vitoria', () => {
    const board = Board.empty()
    .set(0, 0, 'X')
    .set(0, 1, 'X')
    .set(1, 2, 'O')

    const result = new HorizontalChecker().check(board)
    expect(result.finished).toBeFalsy()
    expect(result.xWind).toBeFalsy()
    expect(result.oWind).toBeFalsy()
    expect(result.inProgress).toBeTruthy()
})
