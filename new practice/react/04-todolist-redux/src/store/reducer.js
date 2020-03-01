// reducer是一个纯函数(有固定的输入就有固定的输出)
// reducer的主要作用是负责业务逻辑的处理，生成新的state，由store来最终改变
const defaultState = {
    list:["三国杀"],
    val:'谁是卧底',
}
import {ADD_ITEM,CHANGE_ITEM,DEL_ITEM} from './actionType.js';

module.exports = (state=defaultState,action)=>{ 
    console.log(state,action);


    if(action.type == CHANGE_ITEM){
        //不推荐使用
        /*
        state.val = action.payload
        return state;
        */

       const newState = JSON.parse(JSON.stringify(state));
       newState.val = action.payload;
       return newState;
    }

    else if(action.type == ADD_ITEM){
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.push(state.val);
        newState.val = '';
        return newState;
    }

    else if(action.type == DEL_ITEM){
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.splice(action.payload,1);
        return newState;
    }
    
    return state;
}