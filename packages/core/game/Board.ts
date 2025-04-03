import { Cell } from "../src"

export default class Board {
    private constructor(
        readonly state: Cell[][],
    ){}

    static empty(): Board{
            return new Board([
                [new Cell(0, 0), new Cell(0, 1), new Cell(0, 2)],
                [new Cell(1, 0), new Cell(1, 1), new Cell(1, 2)],
                [new Cell(2, 0), new Cell(2, 1), new Cell(2, 2)]
            ])
    }

    get row(): number {
        return this.state.length
    }

    get colls(): number {
        return this.state?.[0]?.length ?? 0
    }

    get items(): Cell[] {
        return this.state.flat()
    }

    getCell(row: number, column: number): Cell | null {
        if(row < 0 || row >= this.row || column < 0 || column >= this.colls) return null
        return this.state[row]?.[column] ?? null 
    }

    isEmpty(row: number, colls: number): boolean {
        return this.getCell(row, colls)?.isEmpty() ?? true
    }

    isNotEmpty(row: number, colls: number): boolean {
        return !this.isEmpty(row, colls)
    }

    isfull(): boolean {
        return this.items.every(cell => cell.isNotEmpty())
    }

    set(row: number, colls: number, playerType: string): Board {
        const cell = this.getCell(row, colls);
        if (cell?.isNotEmpty()) return this;

        const state = this.state.map((row) => [...row]);
        if (state[row]?.[colls]) {
            state[row][colls] = state[row][colls]!.markWith(playerType);
            return new Board(state);
        }
        return this; 
    }

}