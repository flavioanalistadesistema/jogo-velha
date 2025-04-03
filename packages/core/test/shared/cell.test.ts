import { Cell, PlayerType } from "../../src"


test('Deve criar uma célula com valor preenchido', () => {
    const cell = new Cell(0, 1, PlayerType.X)
    expect(cell.row).toBe(0)
    expect(cell.column).toBe(1)
    expect(cell.playerType).toBe(PlayerType.X)
    expect(cell.isEmpty()).toBeFalsy()
    expect(cell.isNotEmpty()).toBeTruthy()
})

test('Deve criar uma célula vazia', () => {
    const cell = new Cell(0, 1)
    expect(cell.row).toBe(0)
    expect(cell.column).toBe(1)
    expect(cell.playerType).toBe(null)
    expect(cell.isEmpty()).toBeTruthy()
    expect(cell.isNotEmpty()).toBeFalsy()
})

test('Deve marcar uma célula com o tipo de jogador', () => {
    const cellEmpty = new Cell(0, 1)
    expect(cellEmpty.row).toBe(0)


    const markedCell = cellEmpty.markWith(PlayerType.X)
    expect(markedCell.row).toBe(0)
    expect(markedCell.column).toBe(1)
    expect(markedCell.playerType).toBe(PlayerType.X)
    expect(cellEmpty.isEmpty()).toBeTruthy()
    expect(cellEmpty.isNotEmpty()).toBeFalsy()
})

test('Deve retornar a mesma instância quando marcar uma célula já preenchida', () => {
    const cell = new Cell(0, 1, PlayerType.X)
    expect(cell.row).toBe(0)

    const markedCell = cell.markWith(PlayerType.O)
    expect(markedCell.row).toBe(0)
    expect(markedCell.column).toBe(1)
    expect(markedCell.playerType).toBe(PlayerType.X)
    expect(cell.isEmpty()).toBeFalsy()
    expect(cell.isNotEmpty()).toBeTruthy()
})

test('Deve transformar uma celula vazia em uma célula preenchida', () => {
    const cellEmpty = new Cell(0, 1)
    expect(cellEmpty.playerType).toBe(null)

    const markedCell = cellEmpty.markWith(PlayerType.X)
    expect(markedCell.playerType).toBe(PlayerType.X)
})