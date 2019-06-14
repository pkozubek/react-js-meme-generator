import React from 'react';
import ColorSquare from '../ColorSquare/ColorSquare';
import Button from '../Button/Button';
import './Input.css'
import * as actions from '../../store/actions/index';
import {connect} from 'react-redux';

const input = (props)=>{

    let input = null;
    const COLORS = ['white','black','yellow', 'green', 'blue', 'red'];

    switch(props.type){
        case 'input':
            input = <div className = 'InputContainer'>
                <Button 
                type = 'options' 
                position = {props.position}
                />
                <input name = {props.name} className = 'InputWrite' placeholder = {props.description} value = {props.val} onChange = {props.change}>
                </input>
                <Button 
                click = {props.delete}
                type = 'reset'/>
            </div>
            break;
        case 'range':
                const rangeValue = props.optionPosition === 'Top' ? props.topFontSize : props.bottomFontSize;

                input = <div className = 'InputContainer'>
                <label className = 'descInput' >{props.description}</label>
                <input
                 min = '5'
                 max = '60'   
                 type = 'range'
                 value = {rangeValue} 
                 onChange = {(event)=>props.changeFontSize(event.target.value, props.optionPosition)}/>
                <label className = 'descInput'>{rangeValue}</label>
            </div>
            break;
        case 'color':
            input = <div className = 'InputContainer'>
            {COLORS.map((singleColor)=>{
                return <ColorSquare key = {singleColor} color = {singleColor}/>
            })}
            </div> 
            break;
        case 'simpleInput':
            input = <input 
            name = {props.name} 
            className = 'SimpleInput' 
            placeholder = {props.description} 
            value = {props.val} 
            onChange = {props.change}/>
            break;
        default: 
            input = <input name = {props.name} className = 'InputWrite' placeholder = {props.description} value = {props.val} onChange = {props.change}/>
            break;
    }

    return input;
}

const mapStateToProps = state =>{
    return{
        optionPosition : state.optionPosition,
        topFontSize : state.sizeTop,
        bottomFontSize: state.sizeBottom
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        changeFontSize : (fontSize,position)=>dispatch(actions.changeFontSize(fontSize,position))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(input);