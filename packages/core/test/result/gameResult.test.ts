import { Cell, GameResult, PlayerType } from "../../src"

test('Deve criar resultado empatado', () => {
    const empatado = new GameResult([], true)
    expect(empatado.finished).toBeTruthy()
    expect(empatado.inProgress).toBeFalsy()
})

test('Deve criar resultado em progresso', () => {
    const inProgress = new GameResult()
    expect(inProgress.finished).toBeFalsy()
    expect(inProgress.inProgress).toBeTruthy()
})

test('Deve criar resultado com vitória do jogador X', () => {
    const c1 = new Cell(0, 0, PlayerType.X)
    const c2 = new Cell(0, 1, PlayerType.X)
    const c3 = new Cell(0, 2, PlayerType.X)
    const resultado = new GameResult([c1, c2, c3])

    expect(resultado.finished).toBeTruthy()
    expect(resultado.inProgress).toBeFalsy()
    expect(resultado.xWind).toBeTruthy()
    expect(resultado.hasCel(0, 0)).toBeTruthy()
    expect(resultado.hasCel(0, 1)).toBeTruthy()
    expect(resultado.hasCel(0, 2)).toBeTruthy()
    expect(resultado.hasCel(1, 0)).toBeFalsy()
})

test('Deve criar resultado com vitória do jogador O', () => {
    const c1 = new Cell(0, 0, PlayerType.O)
    const c2 = new Cell(0, 1, PlayerType.O)
    const c3 = new Cell(0, 2, PlayerType.O)
    const resultado = new GameResult([c1, c2, c3])

    expect(resultado.finished).toBeTruthy()
    expect(resultado.inProgress).toBeFalsy()
    expect(resultado.oWind).toBeTruthy()
    expect(resultado.hasCel(0, 0)).toBeTruthy()
    expect(resultado.hasCel(0, 1)).toBeTruthy()
    expect(resultado.hasCel(0, 2)).toBeTruthy()
})

test('Deve criar resultado com vitória do jogador O e confirmar empate false', () => {
    const c1 = new Cell(0, 0, PlayerType.O)
    const c2 = new Cell(0, 1, PlayerType.O)
    const c3 = new Cell(0, 2, PlayerType.O)
    const resultado = new GameResult([c1, c2, c3], true)

    expect(resultado.finished).toBeTruthy()
    expect(resultado.inProgress).toBeFalsy()
    expect(resultado.oWind).toBeTruthy()
    expect(resultado.tied).toBeFalsy()
})

test('Deve criar resultado com vitória do jogador X e confirmar empate false', () => {
    const c1 = new Cell(0, 0, PlayerType.X)
    const c2 = new Cell(0, 1, PlayerType.X)
    const c3 = new Cell(0, 2, PlayerType.X)
    const resultado = new GameResult([c1, c2, c3], true)

    expect(resultado.finished).toBeTruthy()
    expect(resultado.inProgress).toBeFalsy()
    expect(resultado.xWind).toBeTruthy()
    expect(resultado.tied).toBeFalsy()
})

test('Deve criar resultado com empate e confirmar vitória false', () => {
    const resultado = new GameResult([], true)

    expect(resultado.finished).toBeTruthy()
    expect(resultado.inProgress).toBeFalsy()
    expect(resultado.xWind).toBeFalsy()
    expect(resultado.oWind).toBeFalsy()
})