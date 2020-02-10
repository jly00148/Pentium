// console.log('app...');

//写法一
/*
export const a = 1;
export const b = 2;
*/

//写法二
/*
const a = 1;
const b = 2;
export {
    a,
    b
}
*/

//写法三
/*
const a = 1;
const b = 2;
export {
    a,
    b
}
*/

//写法四
/*
const a = 1;
const b = 2;
export {
    a,
    b as b1
}
*/

//写法五
/*
const a = 1;
export default a;
*/

//写法六
/*
export default 11;
*/

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
    }

    handAdd(){
        // console.log('handAdd...');
        // this.state.list.push(this.state.val);
        this.setState({
            list:[...this.state.list,this.state.val],
            val:'',
        })  
    }

    handChange(ev){
       // console.log(ev.target);//input
        // console.log(ev.target.value);
        // this.state.val = ev.target.value;
        this.setState({
            val:ev.target.value
        })
    }

    handDel(index){
        const list = [...this.state.list];
        list.splice(index,1);
        this.setState({
            list:list,
        })
    }

    render(){
        // console.log(this); App
        // return <div><input /><button>新增</button></div>
        // return <Fragment><input /><button>新增</button></Fragment>
        
        return(
            // <div style={{ background:'red' }}> //添加css方法一，下为二
            <div className="App">
                <input onChange = {this.handChange.bind(this)} value={this.state.val} />
                <button onClick = {this.handAdd.bind(this)}>新增</button>
                <ul>
                    {
                        this.state.list.map((item,index)=>{
                            /*
                            return <li key={index} 
                                onClick={this.handDel.bind(this,index)}>
                                {item}
                            </li>
                            */

                            return <Item key={index} content={item} index={index} list = {this.state.list} handDel = {this.handDel.bind(this,index)}/>
                        })
                    }
                </ul>
            </div>
        )

    }
}

module.exports = App;