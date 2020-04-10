# todolist notes

## 1.类型检查PropTypes: 定义父组件传入子组件数据的检验规则。
[learn more](https://reactjs.org/docs/typechecking-with-proptypes.html)

### 1.1 使用步骤:
```
import React,{Component} from 'react';
import PropTypes from 'prop-types';

Item.PropTypes = {
	handleDel:PropTypes.func,
	content:PropTypes.string.isRequired
}
Item.defaultProps = {
	content:'xxx'
}
```

## 2.state-props-render之间的关系:
* this.state是存放组件内部数据,this.props是存放组件外部数据,render是负责渲染页面
* 初始挂载根组件必定会调用此组件的render方法,根组件调用render方法必定会调用子组件的render方法,有几个子组件调用几次
* 当state/props里的值发生改变的时候,就会调用render方法,调用render方法同样会调用子组件的render方法

## 3.生命周期函数:某个时刻会自动执行的函数

### 3.1 新版生命周期函数图解:![生命周期函数图解](https://img2018.cnblogs.com/blog/1207967/201901/1207967-20190112160902928-1996985991.webp)

### 3.2 生命周期函数有哪些？

#### 3.2.1 旧版
* 组件将要挂载时触发的函数：componentWillMount
* 组件挂载完成时触发的函数：componentDidMount
* 是否要更新数据时触发的函数：shouldComponentUpdate
* 将要更新数据时触发的函数：componentWillUpdate
* 数据更新完成时触发的函数：componentDidUpdate
* 组件将要销毁时触发的函数：componentWillUnmount
* 父组件中改变了props传值时触发的函数：componentWillReceiveProps

### 3.2.2 顺序(新版)
* 初始挂载:
*  组件挂载完成(包括子组件)时触发的函数：componentDidMount

* 更新时:
*  static getDerivedStateFormProps(nextProps,prevState);
   属性发生变化,例如输入框输入内容,val值发生变化该方法就会被调用。多用于如果props有变化,需要更新state的场景。
   该方法返回state的更新。
*  shouldComponentUpdate(nextProps,prevState):该方法放回一个布尔值,false不执行render方法,true则执行render方法。
*  render():执行render方法。
*  getSnapshotBeforeUpdate(prevProps,prevState):React真正更新dom和ref之前保存一个状态,该方法返回一个值,该值会当做与此函数(下)必须配套使用函数作为参数snapshot。
*  componentDidUpdate(prevProps,prevState,snapshot):组件更新完成后执行,与前者函数必需配套使用。

* 卸载:当组件从dom中的移除时会调用:在子组件中调用componentWillUnmount()。
