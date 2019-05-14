import React from "react";
import './SingleImage.css';

const singleImage = (props)=>{

  const classes = ['singleImg'];

  if(props.selected)
    classes.push('marked');

  return (
      <img className = {classes.join(' ')}
      alt={'image' + props.index} 
      onClick={props.onClick} 
      src={props.src}/>
    );
}

export default singleImage;
