import React,{ Component,Fragment } from 'react';
import {DatePicker,Button,Col,Row,Input,List} from 'antd';
import store from './store/index.js';
import { getAddItemAction,getChangeItemAction,getDelItemAction } from './store/actionCreate.js';
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

             <div className="App">
             <Row>
                <Col span={12}>
                    <Input onChange = { this.handChange } 
                    value={this.state.val} 
                    />
                </Col>
                <Col span={12}> 
                    <Button type="primary" onClick = { this.handAdd }>新增</Button>
                </Col>
             </Row>
             
                {/* <ul>
                    {
                        this.state.list.map((item,index)=>{
                            return <li key={index} 
                                onClick={this.handDel.bind(this,index)}>
                                {item}
                            </li>
                            
                        })
                    }
                </ul> */}
            
                <List
                    style = {{marginTop:10}}
                    bordered
                    dataSource = {this.state.list}
                    renderItem = {(item,index)=>(<List.Item onClick={this.handDel.bind(this,index)}>{item}</List.Item>)}
                />

            </div>
        )

    }
}

module.exports = App;