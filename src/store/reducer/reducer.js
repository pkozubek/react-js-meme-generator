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
            let areVisible = state.areOptionsVisible;
            return updateObject(state,{areOptionsVisible: !areVisible, optionPosition: actions.position});
        default:
            return state
    }
}

export default reducer;