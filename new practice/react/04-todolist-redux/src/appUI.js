import React,{ Component,Fragment } from 'react';
import {DatePicker,Button,Col,Row,Input,List} from 'antd';
import './app.css';


// UI主件，主要负责页面展示
/*
class AppUI extends Component{
    render(){
        console.log('App render...');     
        return(

             <div className="App">
             <Row>
                <Col span={12}>
                    <Input onChange = { this.props.handChange } 
                    value={this.props.val} 
                    />
                </Col>
                <Col span={12}> 
                    <Button type="primary" onClick = { this.props.handAdd }>新增</Button>
                </Col>
             </Row>
            
                <List
                    style = {{marginTop:10}}
                    bordered
                    dataSource = {this.props.list}
                    renderItem = {(item,index)=>(<List.Item onClick = {()=>{this.props.handDel(index)}}>{item}</List.Item>)}
                />
            </div>
        )

    }
}
*/


// 简单写法
const AppUI = (props)=>{

        console.log('App render...');
        const {handChange,handAdd,handDel,list,val} = props; //解构赋值
        return(

             <div className="App">
             <Row>
                <Col span={12}>
                    <Input onChange = { handChange } 
                    value={val} 
                    />
                </Col>
                <Col span={12}> 
                    <Button type="primary" onClick = { handAdd }>新增</Button>
                </Col>
             </Row>
            
                <List
                    style = {{marginTop:10}}
                    bordered
                    dataSource = {list}
                    renderItem = {(item,index)=>(<List.Item onClick = {()=>{handDel(index)}}>{item}</List.Item>)}
                />
            </div>
        )


}
module.exports = AppUI;