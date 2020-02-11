import React,{ Component } from 'react';
import propTypes from 'prop-types';

class Item extends Component{
    constructor(props){
        super(props);
        console.log('Item constructor...');
    }
    handDel(){
        // console.log(this.props.list);
        // console.log(this.props.content);
        // console.log(this.props.index);
        this.props.list.splice(this.props.index,1);
        // console.log(this.props.list);

    }
    render(){
        // console.log('Item render...');
        // return(<li onClick={this.handDel.bind(this)}>
        // return(<li onClick={this.props.handDel.bind(this)}>
        console.log('Item render...');
        const {handDel,content} = this.props;
        return(<li onClick={this.props.handDel}>
                    {this.props.content}
                    {
                        // console.log(this) Item
                    }
             </li>)
    }

}

// 类型检查
Item.propTypes = {
    handDel:propTypes.func,
    content:propTypes.string.isRequired    
}

Item.defaultProps = {
    content:'睡觉',
}

module.exports = Item;