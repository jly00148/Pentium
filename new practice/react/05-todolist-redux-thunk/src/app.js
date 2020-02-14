import React,{ Component,Fragment } from 'react';
import {DatePicker,Button,Col,Row,Input,List} from 'antd';
import axios from 'axios';
import store from './store/index.js';
import { getAddItemAction,getChangeItemAction,getDelItemAction,loadInitDataAction } from './store/actionCreate.js';
import AppUI from './appUI.js';
import './app.css';

class App extends Component{
    constructor(props){
        console.log('App constructor...');
        super(props);
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
    
    // 发送ajax
    componentDidMount(){
        axios.get('http://127.0.0.1:3000')
        .then(result=>{
            // console.log('result:::',result.data);   ["learn react", "learn nodejs"]
            const action = loadInitDataAction(result.data);
            store.dispatch(action);
        })
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