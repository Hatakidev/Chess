import {Figure, FigureNames} from "./Figure";
import {Colors} from "../Colors";
import {Cell} from "../Cell";
import whiteicon from "../../icons/white-queen.png";
import blackicon from "../../icons/black-queen.png";

export class Queen extends Figure
{
    constructor(color: Colors, cell: Cell)
    {
        super(color,cell);
        this.icon = color === Colors.WHITE ? whiteicon : blackicon;
        this.name = FigureNames.QUEEN;
    }

    canMove(target: Cell): boolean
    {
        if(!super.canMove(target)) return false;
        if(this.cell.isEmptyVertical(target)) return true;
        if(this.cell.isEmptyHorizontal(target)) return true;
        if(this.cell.isEmptyDiagonal(target)) return true;
        return false;
    }
}