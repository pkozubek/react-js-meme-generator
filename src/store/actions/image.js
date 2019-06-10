import * as actionTypes from './actionTypes';

export const changeImage = (newImage)=>{
    return {
        type: actionTypes.CHANGE_IMAGE,
        image: newImage
    }
}

export const showOptions = (textPosition) =>{
    return {
        type: actionTypes.SHOW_OPTIONS,
        position: textPosition
    }
}