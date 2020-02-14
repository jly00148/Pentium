import {ADD_ITEM,CHANGE_ITEM,DEL_ITEM,LOAD_DATA} from './actionType.js';


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