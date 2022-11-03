import {Figure, FigureNames} from "./Figure";
import {Colors} from "../Colors";
import {Cell} from "../Cell";
import whiteicon from "../../icons/white-rook.png";
import blackicon from "../../icons/black-rook.png";

export class Rook extends Figure
{
    constructor(color: Colors, cell: Cell)
    {
        super(color,cell);
        this.icon = color === Colors.WHITE ? whiteicon : blackicon;
        this.name = FigureNames.ROOK;
    }

    canMove(target: Cell): boolean
    {
        if(!super.canMove(target)) return false;
        if(this.cell.isEmptyVertical(target)) return true;
        if(this.cell.isEmptyHorizontal(target)) return true;
        return false;
    }
}