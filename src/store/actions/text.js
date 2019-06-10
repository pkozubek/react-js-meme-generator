import * as actionTypes from './actionTypes';

export const showOptions = (textPosition) =>{
    return {
        type: actionTypes.SHOW_OPTIONS,
        position: textPosition
    }
}