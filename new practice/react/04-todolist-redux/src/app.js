import React,{ Component,Fragment } from 'react';
import {DatePicker,Button,Col,Row,Input,List} from 'antd';
import './index.js';
import './app.css';
import store from './store/index.js';

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
    }
    
    
    handAdd(){
        /*
       this.setState(preState=>({// 异步操作
            list:[...preState.list,preState.val],
            val:'', 
            })
        );
        */
    //    const val = ev.target.value;
       const action = {
           type:'add_item'
       }
       store.dispatch(action);
    }

    handChange(ev){
        /*
        const val = ev.target.value;
        this.setState(()=>({
            val
       }))
       */
      const val = ev.target.value;
      const action = {
          type:'change_item',
          payload:val
      }

      store.dispatch(action);

    }

    handDel(index){
        /*
        const list = [...this.state.list];
        list.splice(index,1);
       this.setState(()=>({
           list
       }))
    */

    const action = {
        type:"del_item",
        payload:index
    }
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