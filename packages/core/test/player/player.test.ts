import { Player, PlayerType } from "../../src"

test('Deve retornar a mesma instacia quando adicionar 0 pontos', () => {
    const player = new Player('Lucas', PlayerType.X, 0)
    expect(player.name).toBe('Lucas')
    expect(player.type).toBe(PlayerType.X)
    expect(player.score).toBe(0)
})

test('Deve adicionar 10 pontos ao jogador', () => {
    const player = new Player('Marcelo', PlayerType.O, 0)
    const playerWhithScore = player.addScore(10)
    expect(playerWhithScore.name).toBe('Marcelo')
    expect(playerWhithScore.type).toBe(PlayerType.O)
    expect(playerWhithScore.score).toBe(10)
})

test('Deve limpar a instancia de score', () => {
    const player = new Player('Flavio', PlayerType.X, 10)
    const playerWhithScore = player.clearScore()
    expect(playerWhithScore.name).toBe('Flavio')
    expect(playerWhithScore.type).toBe(PlayerType.X)
    expect(playerWhithScore.score).toBe(0)
})

test('Deve retornar uma nova instância quando adicionar pontos', () => {
    const player = new Player('Lucas', PlayerType.X, 0)
    const playerWhithScore = player.addScore(10)
    expect(playerWhithScore).not.toBe(player)
    expect(playerWhithScore.name).toBe('Lucas')
    expect(playerWhithScore.type).toBe(PlayerType.X)
    expect(playerWhithScore.score).toBe(10)
})

test('Deve retornar uma nova instância quando limpar o score', () => {
    const player = new Player('Lucas', PlayerType.X, 10)
    const playerWhithScore = player.clearScore()
    expect(playerWhithScore).not.toBe(player)
    expect(playerWhithScore.name).toBe('Lucas')
    expect(playerWhithScore.type).toBe(PlayerType.X)
    expect(playerWhithScore.score).toBe(0)
})

test('Deve retornar o mesmo jogador quando não houver alteração', () => {
    const player = new Player('Lucas', PlayerType.X, 10)
    const playerWhithScore = player.addScore(0)
    expect(playerWhithScore).toBe(player)
    expect(playerWhithScore.name).toBe('Lucas')
    expect(playerWhithScore.type).toBe(PlayerType.X)
    expect(playerWhithScore.score).toBe(10)
})

