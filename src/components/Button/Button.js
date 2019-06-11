import React from 'react';
import './Button.css';

import {connect} from 'react-redux';
import * as actions from '../../store/actions/index';

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
            button = <button onClick = {()=>props.setOptions(props.position)} className = 'Options'>
                <i className="fa fa-cog"></i>
            </button>
            break;
        default:
            button = <button 
            onClick = {props.click}
            className = 'Cancel'>
                <i className="fa fa-times-circle"></i>
            </button>
            break;
    }
    return button;
}

const mapDispatchToProps = dispatch =>{
    return{
        setOptions: (position) => dispatch(actions.handleOptionsShow(position))
    }
}

export default connect(null,mapDispatchToProps)(button);