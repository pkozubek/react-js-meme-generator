import React from 'react';
import SingleImage from './SingleImage/SingleImage';
import CustomizationTab from '../CustomizationTab/CustomizationTab';

const images = (props)=>{
    return (
        <CustomizationTab header = 'Choose image:'>
            {props.imageArray.map((img, index)=>{
                return (<SingleImage 
                onClick = {()=>props.imageClick(index)} 
                selected = {index === props.currentlySelected}
                src = {img}
                index = {index}
                key = {index}/>);
            })}
        </CustomizationTab>
    )
}

export default images;