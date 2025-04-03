import { Board } from "../../src"



test('Deve criar um tabuleiro vazio', () => {
    const board = Board.empty()
    expect(board.row).toBe(3)
    expect(board.colls).toBe(3)
    expect(board.items.length).toBe(9)
    expect(board.isfull()).toBeFalsy()
})

test('Deve todas as celuar do tabuleiro', () => {
    const board = Board.empty()
    expect(board.items.length).toBe(9)
})

test('Deve marcar uma celula por linha e coluna', () => {
    const board = Board.empty().set(0, 0, 'X')
    expect(board.isNotEmpty(0, 0)).toBeTruthy()
    expect(board.isEmpty(0, 0)).toBeFalsy()
    expect(board.getCell(0, 0)?.playerType).toBe('X')
})

