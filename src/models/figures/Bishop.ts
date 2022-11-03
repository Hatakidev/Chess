import {Figure, FigureNames} from "./Figure";
import {Colors} from "../Colors";
import {Cell} from "../Cell";
import blackicon from "../../icons/black-bishop.png";
import whiteicon from "../../icons/white-bishop.png";

export class Bishop extends Figure
{
    constructor(color: Colors, cell: Cell)
    {
        super(color,cell);
        this.icon = color === Colors.WHITE ? whiteicon : blackicon;
        this.name = FigureNames.BISHOP;
    }

    canMove(target: Cell): boolean
    {
        if(!super.canMove(target)) return false;
        if(this.cell.isEmptyDiagonal(target)) return true;
        return false;
    }
}
