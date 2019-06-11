import * as actionTypes from './actionTypes';

export const handleOptionsShow = (textPosition) =>{
    return {
        type: actionTypes.SHOW_OPTIONS,
        position: textPosition
    }
}

export const changeColor = (newColor, textPosition) =>{
    if(textPosition === 'Top'){
        return{
            type: actionTypes.CHANGE_COLOR_TOP,
            color: newColor
        }
    }else{
        return{
            type: actionTypes.CHANGE_COLOR_BOTTOM,
            color: newColor
        }
    }
}

export const changeFontSize = (newFontSize, textPosition)=>{
    console.log(newFontSize, textPosition);

    if(textPosition === 'Top'){
        return{
            type: actionTypes.CHANGE_FONT_SIZE_TOP,
            fontSize: newFontSize
        }
    }else{
        return{
            type: actionTypes.CHANGE_FONT_SIZE_BOTTOM,
            fontSize: newFontSize
        }
    }
}