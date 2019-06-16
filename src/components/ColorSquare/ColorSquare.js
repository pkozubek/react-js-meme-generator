import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../../store/actions/index';

const colorSquare = (props)=>{

    const squareStyle = {
        background: props.color,
        border: '1px solid black',
        width: '30px',
        height: '30px',
        margin: '5px',
        display: 'inline-block'
    }

    const selectedSquareStyle = {
        background: props.color,
        border: '2px solid red',
        width: '30px',
        height: '30px',
        margin: '5px',
        display: 'inline-block'
    }

    return <div 
        style = {( (props.color === props.selectedColorTop && props.optionPosition === 'Top' ) 
        || (props.color === props.selectedColorBottom && props.optionPosition === 'Bottom' ) )
        ? selectedSquareStyle 
        : squareStyle} 
        onClick = {()=>props.setColor(props.color,props.optionPosition)}>
    </div>
}

const mapStateToProps = (state)=>{
    return{
        optionPosition : state.optionPosition,
        selectedColorTop: state.colorTop,
        selectedColorBottom: state.colorBottom
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        setColor : (color,position)=>dispatch(actions.changeColor(color,position))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(colorSquare);