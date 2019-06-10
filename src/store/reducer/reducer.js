import * as actionTypes from '../actions/actionTypes';
import {updateObject} from '../utitlity';

const initialState = {
    image: null,
    sizeTop: 16,
    colorTop: 'white',
    sizeBottom: 16,
    colorBottom: 'white'
}

const reducer = (state = initialState, actions) =>{
    switch(actions.type){
        case actionTypes.CHANGE_IMAGE:
            return updateObject(state,{image: actions.image});
        default:
            return state
    }
}

export default reducer;