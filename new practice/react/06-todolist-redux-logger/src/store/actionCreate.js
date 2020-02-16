import {ADD_ITEM,CHANGE_ITEM,DEL_ITEM,LOAD_DATA} from './actionType.js';
import store from './index.js';

import axios from 'axios';
// handAdd
export const getAddItemAction = ()=>{
    return {
        type:ADD_ITEM
    }
}

//handChange
export const getChangeItemAction = (ev)=>{
    const val = ev.target.value;
    return {
        type:CHANGE_ITEM,
        payload:val
    }
}

// handDel
export const getDelItemAction = (index)=>{
    return {
        type:DEL_ITEM,
        payload:index
    }
}

//loadInitDataAction
export const loadInitDataAction = (index)=>{
    return {
        type:LOAD_DATA,
        payload:index
    }
}

// getInitReduxThunk
export const getInitReduxThunk = ()=>{
    return ()=>{
        axios
        .get('http://127.0.0.1:3000/')
        .then(result=>{
            const action = loadInitDataAction(result.data);
            store.dispatch(action);
        })
    }
}