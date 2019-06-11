import React from "react";
import './SingleImage.css';
import * as actions from '../../../store/actions/index';
import {connect} from 'react-redux';

const singleImage = (props)=>{

  const classes = ['singleImg'];

  if(props.selected)
    classes.push('marked');

  return (
      <img className = {classes.join(' ')}
      alt={'image' + props.index} 
      onClick={()=>props.changeImage(props.src)} 
      src={props.src}/>
    );
}

const mapDispatchToProps = dispatch =>{
  return{
    changeImage: (image)=>dispatch(actions.changeImage(image))
  }
}

export default connect(null,mapDispatchToProps)(singleImage);
