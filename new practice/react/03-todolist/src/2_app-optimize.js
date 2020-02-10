import React,{ Component,Fragment } from 'react';

import './index.js';
import Item from './Item.js'; 
import './app.css';
class App extends Component{
    constructor(props){
        super(props);
        // console.log(this); App
        this.state = {
            list:["吃饭","睡觉","写程序"],
            val:''
        }
        this.handChange = this.handChange.bind(this);
        this.handAdd = this.handAdd.bind(this);
    }

    handAdd(){
        // console.log('handAdd...');
        // this.state.list.push(this.state.val);
        /*
        this.setState({
            list:[...this.state.list,this.state.val],
            val:'',
        }) 
        */ 

        /*
       this.setState(()=>{
           return {
            list:[...this.state.list,this.state.val],
            val:'',               
           }
       })   
       */

      /*
      this.setState((preState)=>{
        return {
         list:[...preState.list,preState.val],
         val:'',               
        }
        */

       this.setState(preState=>({
        list:[...preState.list,preState.val],
        val:'',  
    }));
       
    }

    handChange(ev){
       // console.log(ev.target);//input
        // console.log(ev.target.value);
        // this.state.val = ev.target.value;
        /*
        this.setState({
            val:ev.target.value
        })
        */

        const val = ev.target.value;
        this.setState(()=>({
            val
       }))

    }

    handDel(index){
        const list = [...this.state.list];
        list.splice(index,1);
        /*
        this.setState({
            list:list,
        })
        */

       this.setState(()=>({
           list
       }))

    }

    getItem(){
        return this.state.list.map((item,index)=>{

            /*
            return <li key={index} 
                    onClick={this.handDel.bind(this,index)}>
                {item}
            </li>
            */

            return <Item key={index}
                        content={item}
                        index={index}
                        list = {this.state.list}
                        handDel = {this.handDel.bind(this,index)}/>
        })    
    }

    render(){
        // console.log(this); App
        // return <div><input /><button>新增</button></div>
        // return <Fragment><input /><button>新增</button></Fragment>
        
        return(
            // <div style={{ background:'red' }}> //添加css方法一，下为二
            <div className="App">
                <input onChange = { this.handChange } value={this.state.val} />
                <button onClick = { this.handAdd }>新增</button>
                <ul>
                    {
                        this.getItem()
                    }
                </ul>
            </div>
        )

    }
}

module.exports = App;