import React from 'react';
import SingleImage from './SingleImage/SingleImage';
import './Images.css';

const images = (props)=>{
    return (
        <div className = 'ImagesContainer'>
            {props.imageArray.map((img, index)=>{
                return (<SingleImage 
                onClick = {()=>props.imageClick(index)} 
                selected = {index === props.currentlySelected}
                src = {img}
                index = {index}
                key = {index}/>);
            })}
        </div>
    )
}

export default images;