import * as actionTypes from './actionTypes';

export const changeImage = (newImage)=>{
    console.log(newImage);
    
    return {
        type: actionTypes.CHANGE_IMAGE,
        image: newImage
    }
}

