### 类型检查PropTypes: [定义父组件传入子组件数据的检验规则](https://reactjs.org/docs/typechecking-with-proptypes.html)

#### steps:
```
import React,{Component} from '.react';
import PropTypes from 'prop-types';

Item.PropTypes = {
	handleDel:PropTypes.func,
	content:PropTypes.string.isRequired
}

Item.defaultProps = {
	content:'xxx'
}
```