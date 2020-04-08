### 类型检查PropTypes: [定义父组件传入子组件数据的检验规则](https://reactjs.org/docs/typechecking-with-proptypes.html)

#### steps:
```
import React,{Component} from 'react';
import PropTypes from 'prop-types';

Item.PropTypes = {
	handleDel:PropTypes.func,
	content:PropTypes.string.isRequired // 必需传入
}

// 父组件传给子组件Item的默认值
Item.defaultProps = {
	content:'xxx'
}
```

### state-props-render之间的关系:
* this.state是存放组件内部数据,this.props是存放组件外部数据,render是负责渲染页面
* 初始挂载根组件必定会调用此组件的render方法,根组件调用render方法必定会调用子组件的render方法,有几个子组件调用几次
* 当state/props里的值发生改变的时候,就会调用render方法,调用render方法同样会调用子组件的render方法