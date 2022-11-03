import React, {FC} from 'react';
import {Figure} from "../models/figures/Figure";

interface LostFiguresProps
{
    title: string;
    figures: Figure[];
}

const LostFiguresComponent: FC<LostFiguresProps> = ({title,figures}) => {
    return (
        <div className='lost'>
            <h3>Потери {title}</h3>
            {figures.map(figure =>
                <div key={figure.id}>
                    {figure.name} {figure.icon && <img width={20} height={20} src={figure.icon}/>}
                </div>
            )}
        </div>
    );
};

export default LostFiguresComponent;