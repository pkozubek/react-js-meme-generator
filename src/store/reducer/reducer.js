import * as actionTypes from '../actions/actionTypes';
import {updateObject} from '../utitlity';

const initialState = {
    image: null,
    sizeTop: 16,
    colorTop: 'white',
    sizeBottom: 16,
    colorBottom: 'white',
    areOptionsVisible: false,
    optionPosition: null
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
        default:
            return state
    }
}

export default reducer;