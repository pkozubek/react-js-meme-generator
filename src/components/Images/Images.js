import React from 'react';
import SingleImage from './SingleImage/SingleImage';
import './Images.css';
import {connect} from 'react-redux';

const images = (props)=>{
    return (
        <div className = 'ImagesContainer'>
            {props.imageArray.map((img, index)=>{
                return (<SingleImage 
                selected = {img === props.selectedImage}
                src = {img}
                index = {index}
                key = {index}/>);
            })}
        </div>
    )
}

const mapStateToProps = (state) =>{
    return{
        selectedImage: state.image
    }
}

export default connect(mapStateToProps)(images);