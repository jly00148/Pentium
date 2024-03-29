import React,{ Component } from 'react';
import Todolist from '../pages/todilist/index.js';
import './app.css';
import { 
    BrowserRouter as Router, //BrowserRouter:H5路由,刷新页面会向后台发送请求
    // HashRouter as Router, //HashRouter:Hash路由,刷新页面不会向后台发送请求
    Route,
    Link,
    Switch 
    } from 'react-router-dom'; 


class Home extends Component{
    render(){
        return <h1>this is home title</h1>
    }
}

// function About(){
//     return <h1>this is about title</h1>
// }
class About extends Component{
    render(){
        return <h1>this is about title</h1>
    }
}

class Users extends Component{
    render(){
        // return <h1>the Usersname is {this.props.match.params.id}</h1>
        return (<Switch>
                    <Route exact path="/Users" render={()=><h1>this is Users pages 1,no id</h1>} />

                    <Route path="/Users/profile" render={()=><h1>this is Users pages 3,id is profile</h1>} />
                    

                    {/* <Route path="/Users/123" render={()=><h1>this is Users pages, have id</h1>} /> */}
                    <Route path="/Users/:id" render={(route)=><h1>this is Users pages 2, id is {route.match.params.id}</h1>} />


                </Switch>)

    }
}

class Login extends Component{
    render(){
        return <h1>this is login page</h1>
    }
}

class Info extends Component{
    render(){
        return <h1>this is Info page</h1>
    }
}

class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            Logined:false
        }
    }
    render(){
        const ProtectRoute = ({component:Component,...rest})=>(
            <Route 
                {...rest}
                // component={Component}
                // render={()=>(<Component />)}
                // render={()=>(<Login />)}
                // render={(props)=>this.state.Logined ? <Component {...props}/> : <Login />} // 传参数props在Component中使用
                render={()=>this.state.Logined ? <Component /> : <Login />}

            />
        )
        
        return(
            <Router>
                <div className='App'>
                    <ul>
                        <li>
                        {/* Link进行跳转 */}
                            <Link to="/">/Home</Link>
                        </li>
                        <li>
                            <Link to="/About">/about</Link>
                        </li>
                        <li>
                            <Link to="/Info">/Info</Link>
                        </li>                        
                        <li>
                            <Link to="/Users">/Users</Link>
                        </li>
                        <li>
                            <Link to="/Users/123">/Users/123</Link>
                        </li>                                                                 
                        <li>
                            <Link to="/Users/profile">/Users/profile</Link>
                        </li>                        
                    </ul>

                    {/* 定义规则，接收跳转 */}
                    {/* <Route exact path="/"><Home /></Route> */}   {/* Route写法一*/}
                        <Route exact path="/" component={Home} />   {/* Route写法二*/}

                        {/* <Route path="/About" render={()=><h1>this is about title</h1>} /> */}
                        <Route path="/About" component={About} />
                        
                        <ProtectRoute path="/Users" component={Users} />

                        <ProtectRoute path="/Info" component={Info} />

                </div>
            </Router>
        )
    }

}

module.exports = App;