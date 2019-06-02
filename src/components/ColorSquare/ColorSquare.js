import React from 'react';

const colorSquare = (props)=>{

    const squareStyle = {
        background: props.color,
        border: '1px solid black',
        width: '25px',
        height: '25px',
        margin: '5px',
        display: 'inline-block'
    }

    return <div style = {squareStyle}></div>
}

export default colorSquare;