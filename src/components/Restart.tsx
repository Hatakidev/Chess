import React, {FC} from 'react';


interface RestartProps
{
    restart: () => void;
}
const Restart: FC<RestartProps> = ({restart}) => {
    return (
        <div>
            <button onClick={restart}>Restart</button>
        </div>
    );
};

export default Restart;