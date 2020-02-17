import React,{ Component } from 'react';
import {Button,Col,Row,Input,List} from 'antd';
import './app.css';


class App extends Component{
    render(){
        return(

             <div className="App">
             <Row>
                <Col span={12}>
                    <Input
                    />
                </Col>
                <Col span={12}> 
                    <Button type="primary">新增</Button>
                </Col>
             </Row>
            
                <List
                    style = {{marginTop:10}}
                    bordered
                    dataSource = {[]}
                    renderItem = {(item,index)=>(<List.Item>{item}</List.Item>)}
                />
            </div>
        )

    }
}

module.exports = App;