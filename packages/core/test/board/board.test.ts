import { Board, PlayerType } from "../../src"



test('Deve criar um tabuleiro vazio', () => {
    const board = Board.empty()
    expect(board.row).toBe(3)
    expect(board.colls).toBe(3)
    expect(board.items.length).toBe(9)
    expect(board.isfull()).toBeFalsy()
})

test('Deve todas as celula do tabuleiro', () => {
    const board = Board.empty()
    expect(board.items.length).toBe(9)
})

test('Deve marcar uma celula por linha e coluna', () => {
    const board = Board.empty().set(0, 0, PlayerType.X)
    expect(board.isNotEmpty(0, 0)).toBeTruthy()
    expect(board.isEmpty(0, 0)).toBeFalsy()
    expect(board.getCell(0, 0)?.playerType).toBe(PlayerType.X)
})

test('Deve retornar como vazio para uma celula inexistente', () => {
    const board = Board.empty()
    expect(board.isEmpty(3, 3)).toBeTruthy()
    expect(board.isNotEmpty(3, 3)).toBeFalsy()
    expect(board.getCell(3, 3)).toBeNull()

})

test('Deve ignorar a marcação de uma célula já preenchida', () => {
    const board = Board.empty().set(0, 0, PlayerType.X).set(0, 0, PlayerType.O)
    expect(board.getCell(0, 0)?.playerType).toBe(PlayerType.X)
})

test('Deve ignorar a marcação de uma celula inexistente', () => {
    const board = Board.empty()
    const sameboard = board.set(3, 3, PlayerType.X)
    expect(board === sameboard).toBeTruthy()
    expect(board.isEmpty(3, 3)).toBeTruthy()
})

test('Deve retornar tabuleiro diferente quando não houver marcação', () => {
    const board = Board.empty()
    const sameboard = board.set(0, 0, PlayerType.X)       
    expect(board === sameboard).toBeFalsy()
    expect(sameboard.getCell(0, 0)?.playerType).toBe(PlayerType.X)
    expect(sameboard.isNotEmpty(0, 0)).toBeTruthy()
})