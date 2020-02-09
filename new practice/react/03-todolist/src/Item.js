import React,{ Component } from 'react';

class Item extends Component{
    handDel(){
        // console.log(this.props.list);
        // console.log(this.props.content);
        // console.log(this.props.index);
        this.props.list.splice(this.props.index,1);
        console.log(this.props.list);
    }
    render(){

        // return(<li onClick={this.handDel.bind(this)}>
        return(<li onClick={this.props.handDel}>
                    {this.props.content}
             </li>)
    }
}

module.exports = Item;