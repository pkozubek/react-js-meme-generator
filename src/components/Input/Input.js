import React from 'react';

const input = (props)=>{
    return (
    <div>
        <label>{props.description}</label>
        <input value = {props.val} onChange = {props.change}/>
        <button onClick = {props.delete}>delete</button>
    </div>);
}

export default input;