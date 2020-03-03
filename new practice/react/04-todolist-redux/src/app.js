import React,{ Component,Fragment } from 'react';
import {DatePicker,Button,Col,Row,Input,List} from 'antd';
import store from './store/index.js';
import { getAddItemAction,getChangeItemAction,getDelItemAction } from './store/actionCreate.js';
import AppUI from './appUI.js';
import './app.css';

// 容器主件
class App extends Component{
    constructor(props){
        console.log('App constructor...');
        super(props);
        /*
        this.state = {
            list:["三国杀"],
            val:''
        }
        */
    //    console.log(store);
        // console.log(store.getState());
        this.state = store.getState();
        store.subscribe(()=>{
            this.setState(()=>{
                return store.getState();
            })
        })
        this.handChange = this.handChange.bind(this);
        this.handAdd = this.handAdd.bind(this);
        this.handDel = this.handDel.bind(this);
    }
    
    
    handAdd(){
      const action = getAddItemAction();
       store.dispatch(action);
    }

    handChange(ev){
        const action = getChangeItemAction(ev);
        store.dispatch(action);
    }

    handDel(index){
        const action = getDelItemAction(index);
        store.dispatch(action);
    }

    render(){
        console.log('App render...');     
        return(
            <AppUI 
                handChange = { this.handChange } 
                val={ this.state.val } 
                handAdd = { this.handAdd }
                handDel = {this.handDel }
                list = {this.state.list}
            />
        )

    }
}

module.exports = App;