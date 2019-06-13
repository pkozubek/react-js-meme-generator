import * as actionTypes from './actionTypes';

export const changeImage = (newImage)=>{
    return {
        type: actionTypes.CHANGE_IMAGE,
        image: newImage
    }
}

export const saveImage = (shouldBeSaved)=>{
    return{
        type: actionTypes.SAVE_IMAGE,
        isSaved: shouldBeSaved
    }
}

export const resetImage = ()=>{
    return{
        type: actionTypes.RESET_IMAGE
    }
}