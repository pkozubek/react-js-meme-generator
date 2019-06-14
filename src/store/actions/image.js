import * as actionTypes from './actionTypes';

export const changeImage = (newImage)=>{
    return {
        type: actionTypes.CHANGE_IMAGE,
        image: newImage
    }
}

export const saveImageRequest = ()=>{
    console.log('test');
    return{
        type: actionTypes.SAVE_IMAGE_REQUEST,
    }
}

export const saveImage = () =>{
    return{
        type: actionTypes.SAVE_IMAGE
    }
}

export const resetImage = ()=>{
    return{
        type: actionTypes.RESET_IMAGE
    }
}