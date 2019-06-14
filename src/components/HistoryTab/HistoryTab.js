import React from 'react';
import ReactCanvas from '../Canvas/ReactCanvas';
import './HistoryTab.css';

const historyTab = (props)=>{

    let canvas = null;
    if(props.isSelected){
        canvas =  (
        <ReactCanvas
        width = '400'
        height = '400'
        bottomText = {props.bottomText}
        topText = {props.topText}
        topFontSize = {props.topFontSize}
        bottomFontSize = {props.bottomFontSize}
        colorBottom = {props.colorBottom}
        colorTop = {props.colorTop}
        selectedImage = {props.selectedImage}
        isSaved = {props.isSaved}
        />
        )
    }

    return(
        <div 
        className = 'HistoryTab' 
        onClick = {props.click}>
        <h3>{props.name}</h3>
        {canvas}
        </div>
    )
}

export default historyTab;