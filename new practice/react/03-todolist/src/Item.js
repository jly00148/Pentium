import React,{ Component } from 'react';
import propTypes from 'prop-types';

class Item extends Component{
    constructor(props){
        super(props);
        console.log('Item constructor...');
        console.log('this.props:::',this.props);
    }

    handDel(){
        this.props.list.splice(this.props.index,1);

    }
    render(){
        console.log('Item render...');
        const {handDel,content} = this.props;
        return(<li onClick={this.props.handDel}>
                    {this.props.content}
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