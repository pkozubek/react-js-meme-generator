import * as actionTypes from '../actions/actionTypes';
import {updateObject} from '../utitlity';

const initialState = {
    image: null,
    colorTop: 'white',
    sizeBottom: 16,
    colorBottom: 'white',
    sizeTop: 16,
    areOptionsVisible: false,
    optionPosition: null,
    saveImage: false,
    isHistorySaveVisible: false,
    topText: '',
    bottomText: '',
    fetchedData: null
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
        case actionTypes.SAVE_IMAGE_REQUEST:
            return updateObject(state,{saveImage: true})
        case actionTypes.SAVE_IMAGE:
            return updateObject(state,{saveImage: false})
        case actionTypes.SHOW_HISTORY_SAVE:
            return updateObject(state,{isHistorySaveVisible: !state.isHistorySaveVisible})
        case actionTypes.CHANGE_BOTTOM_TEXT:
            return updateObject(state,{bottomText: actions.newText})        
        case actionTypes.CHANGE_TOP_TEXT:
            return updateObject(state,{topText: actions.newText})
        case actionTypes.SAVE_FETCHED_DATA:
            return updateObject(state,{fetchedData: actions.data})
        case actionTypes.RESET_IMAGE:
            return initialState;
        default:
            return state
    }
}

export default reducer;