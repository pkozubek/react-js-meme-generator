import * as actionTypes from '../actions/actionTypes';
import {updateObject} from '../utitlity';

const initialState = {
    image: null,
    sizeTop: 16,
    colorTop: 'white',
    sizeBottom: 16,
    colorBottom: 'white',
    areOptionsVisible: false,
    optionPosition: null,
    saveImage: false,
    isHistorySaveVisible: false,
    topText: '',
    bottomText: ''
}

const reducer = (state = initialState, actions) =>{
    switch(actions.type){
        case actionTypes.CHANGE_IMAGE:
            return updateObject(state,{image: actions.image});
        case actionTypes.SHOW_OPTIONS:
            return updateObject(state,{areOptionsVisible: !state.areOptionsVisible, optionPosition: actions.position});
        case actionTypes.CHANGE_COLOR_BOTTOM:
            return updateObject(state,{colorBottom: actions.color})
        case actionTypes.CHANGE_COLOR_TOP:
            return updateObject(state,{colorTop: actions.color})
        case actionTypes.CHANGE_FONT_SIZE_BOTTOM:
            return updateObject(state,{sizeBottom: actions.fontSize})
        case actionTypes.CHANGE_FONT_SIZE_TOP:
            return updateObject(state,{sizeTop: actions.fontSize})
        case actionTypes.SAVE_IMAGE:
            return updateObject(state,{saveImage: actions.isSaved})
        case actionTypes.SHOW_HISTORY_SAVE:
            return updateObject(state,{isHistorySaveVisible: !state.isHistorySaveVisible})
        case actionTypes.CHANGE_BOTTOM_TEXT:
            return updateObject(state,{bottomText: actions.newText})        
        case actionTypes.CHANGE_TOP_TEXT:
            return updateObject(state,{topText: actions.newText})
        case actionTypes.RESET_IMAGE:
            return initialState;
        default:
            return state
    }
}

export default reducer;