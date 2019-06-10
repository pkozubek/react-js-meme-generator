import * as actionTypes from './actionTypes';

export const handleOptionsShow = (textPosition) =>{
    console.log('test');
    return {
        type: actionTypes.SHOW_OPTIONS,
        position: textPosition
    }
}