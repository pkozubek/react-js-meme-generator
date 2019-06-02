import React from 'react';
import './Button.css';

const button = (props) =>{
    let button = null;

    switch(props.type){
        case('cancel'):
            button = <button 
            onClick = {props.click}
            className = 'Cancel'>
                <i className="fa fa-times-circle"></i>
            </button>
            break;
        case('success'):
            button = <button className = 'Success'>
                <i className="fa fa-save"></i>
                <i>{props.children}</i>
            </button>
            break;
        case('options'):
            button = <button onClick = {props.click} className = 'Options'>
                <i className="fa fa-cog"></i>
            </button>
            break;
    }
    return button;
}

export default button;