export default class Cell {
    constructor(
        readonly row: number,
        readonly column: number,
        readonly playerType: string | null = null,
    ){}

    markWith(playerType: string): Cell {
        if(this.playerType) return this
        return new Cell(this.row, this.column, playerType)
    }

    isEmpty(): boolean {
        return this.playerType === null
    }

    isNotEmpty(): boolean {
        return !this.isEmpty()
    }
}