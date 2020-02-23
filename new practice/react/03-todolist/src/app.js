import React,{ Component,Fragment } from 'react';
import {DatePicker,Button} from 'antd';
import Item from './Item.js'; 
import './app.css';
// import 'antd/dist/antd.css';

class App extends Component{
    constructor(props){
        console.log('App constructor...');
        super(props);
        this.state = {
            list:["三国杀"],
            val:''
        }
        this.handChange = this.handChange.bind(this);
        this.handAdd = this.handAdd.bind(this);
    }
    
    
    handAdd(){
       this.setState(preState=>({// 异步操作
            list:[...preState.list,preState.val],
            val:'', 
            })
        );
    }

    handChange(ev){
        const val = ev.target.value;
        this.setState(()=>({
            val
       }))

    }

    handDel(index){
        const list = [...this.state.list];
        list.splice(index,1);
       this.setState(()=>({
           list
       }))

    }

    getItem(){
        return (this.state.list.map((item,index)=>{
            return <Item key={index}
                        content={item}
                        index={index}
                        list = {this.state.list}
                        handDel = {this.handDel.bind(this,index)}/>
        })) 
    }

    render(){
        console.log('App render...');     
        return(
            <div className="App">
                <input onChange = { this.handChange } 
                value={this.state.val} 
                />
                <button onClick = { this.handAdd }>新增</button>
                <ul>
                    {
                        this.getItem()
                    }
                </ul>
                <Button type="primary">button</Button>
                <DatePicker/>
            </div>
        )

    }
}

module.exports = App;