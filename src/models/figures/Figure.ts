import icon from "../../icons/black-king.png";
import {Colors} from "../Colors";
import {Cell} from "../Cell";


export enum FigureNames
{
    FIGURE = "Фигура",
    KING = "Король",
    KNIGHT = "Конь",
    BISHOP = "Слон",
    PAWN = "Пешка",
    ROOK = "Ладья",
    QUEEN = "Ферзь",
}

export class Figure
{
    color: Colors;
    icon: typeof icon | null;
    cell: Cell;
    name: FigureNames;
    id: number;

    constructor(color: Colors, cell: Cell)
    {
        this.color = color;
        this.cell = cell;
        this.cell.figure = this;
        this.icon = null;
        this.name = FigureNames.FIGURE;
        this.id = Math.random();
    }
    canMove(target: Cell) : boolean
    {
        if(target.figure?.color === this.color) return false;
        if(target.figure?.name === FigureNames.KING) return false;
        return true;
    }
    moveFigure(target: Cell) {}
}