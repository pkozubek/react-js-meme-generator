import * as actionTypes from './actionTypes';
import * as actions from './index'
import axios from '../../axios-database';

export const showHistorySave = ()=>{
    return{
        type: actionTypes.SHOW_HISTORY_SAVE
    }
}

export const saveFetchedData = (gatheredData)=>{
    return{
        type: actionTypes.SAVE_FETCHED_DATA,
        data: gatheredData
    }
}

export const fetchHistory = ()=>{
    return dispatch =>{
        axios.get('/memes.json')
        .then((response)=>{
            dispatch(saveFetchedData(response.data));
        })
        .catch((error)=>{
            console.log(error);
        })
    }
}

export const saveToHistory = (data)=>{
    return dispatch =>{
        console.log('test');
        axios.post('/memes.json',data)
        .then((response)=>{
            console.log(response);
            dispatch(actions.resetImage());
        })
        .catch((error)=>{
            console.log(error);
        })
    }
}