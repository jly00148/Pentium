const defaultState = {
    list:["三国杀"],
    val:'谁是卧底',
}

module.exports = (state=defaultState,action)=>{ 
    console.log(state,action);

    //不推荐使用
    if(action.type == 'change_item'){
        /*
        state.val = action.payload
        return state;
        */
       const newState = JSON.parse(JSON.stringify(state));
       newState.val = action.payload;
       return newState;
    }

    else if(action.type == 'add_item'){
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.push(state.val);
        newState.val = '';
        return newState;
    }

    else if(action.type == 'del_item'){
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.splice(action.payload,1);
        return newState;
    }else if(action.type == 'load_data'){
        const newState = JSON.parse(JSON.stringify(state));
        newState.list = action.payload;
        return newState;
    }
    
    return state;
}