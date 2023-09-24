import React from 'react';

const Cell = ({value, onClick}) => {
    return (
        <div className='game-cell' onClick={onClick}>
        {value === 'X' ? <span className='cell-x'>X</span> : value === 'O' ? <span className='cell-o'>O</span> : ""}
        </div>
    );
};

export default Cell;