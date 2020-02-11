import React,{ Component,Fragment } from 'react';
import './index.js';
import Item from './Item.js'; 
import './app.css';
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

    static getDerivedStateFromProps(nextProps,prevState){
        console.log('getDerivedStateFromProps::',nextProps,prevState);// object
        return {
            list:['睡觉']
        }
    }

    componentDidMount(){
        console.log('componentDidMount...');
    }

    handAdd(){

       this.setState(preState=>({// 异步操作
            list:[...preState.list,preState.val],
            val:'', 
            })
        );
    }

    handChange(ev){
        const val =ev.target.value;
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
                <ul ref={(ul)=>{
                    this.ul = ul;
                }}
                >
                    {
                        this.getItem()
                    }
                </ul>
            </div>
        )

    }
}

module.exports = App;