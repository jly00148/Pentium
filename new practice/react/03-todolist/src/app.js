console.log('app...');

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

import './app.css';
class App extends Component{
    handAdd(){
        console.log('handAdd...');
    }
    handChange(ev){
       // console.log(ev.target);//input
        console.log(ev.target.value);
    }
    render(){

        //添加注释
        {
            //todolist
            /*
                *******
             */
        }

        // return <div><input /><button>新增</button></div>
        // return <Fragment><input /><button>新增</button></Fragment>
        return(
            // <div style={{ background:'red' }}> //添加css方法一，下为二
            <div className="App">
            {
                //console.log('this:::',this)
            }
                <input onChange = {this.handChange}/><button onClick = {this.handAdd}>新增</button>
                <ul>
                    <li>li1</li>
                    <li>li2</li>
                </ul>
            </div>
        )

    }
}

module.exports = App;