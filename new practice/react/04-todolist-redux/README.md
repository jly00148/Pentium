#  Redux flow

## 1.Redux flow图解:
![Redux flow图解](https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1586534491080&di=e641262f0cc18699b30d339947391ac6&imgtype=0&src=http%3A%2F%2Fwx3.sinaimg.cn%2Fmw690%2Fba56005dgy1fxkcvc6dthj20xm0mk77l.jpg)

## 使用步骤:
```
npm i redux --save
```
```
import { createStore } from 'redux';
```
```
const store = createStore(()=>{ // 里面的函数是图解中的reducer,reducer可从外部导入

	})
```
```
export store;
```

## store:store是负责整个数据的管理(获取最新的state,派发action,监听),整个应用只有一个store,创建store时第一参数需要传入一个函数(reducer);
* store.getSate():获取reducer