import React from 'react';
import ColorSquare from '../ColorSquare/ColorSquare';
import Button from '../Button/Button';
import './Input.css'

const input = (props)=>{

    let input = null;
    const COLORS = ['white','black','yellow', 'green', 'blue', 'lightgray'];

    switch(props.type){
        case 'input':
            input = <div className = 'InputContainer'>
                <Button 
                type = 'options' 
                click = {props.optionClick}/>
                <input className = 'InputWrite' placeholder = {props.description} value = {props.val} onChange = {props.change}>
                </input>
                <Button 
                click = {props.delete}
                type = 'cancel'/>
            </div>
            break;
        case 'range':
                input = <div>
                <label>{props.description}</label>
                <input type = 'range'/>
                {props.value}
            </div>
            break;
        case 'color':
            input = COLORS.map((singleColor)=>{
                return <ColorSquare color = {singleColor}/>
            })
    }

    return input;
}

export default input;