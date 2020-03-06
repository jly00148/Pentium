import React,{ Component } from 'react';
import { 
    // BrowserRouter as Router, //BrowserRouter:H5路由,刷新页面会向后台发送请求
    HashRouter as Router, //HashRouter:Hash路由,刷新页面不会向后台发送请求
    Route,
    Link,
    Switch 
    } from 'react-router-dom'; 
import Todolist from '../pages/todilist/index.js';
import './app.css';
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
class App extends Component{
    render(){
        return(
            <Router>
                <div className='App'>
                    <ul>
                        <li>
                            <Link to="/">/Home</Link>
                        </li>
                        <li>
                            <Link to="/About">/about</Link>
                        </li>                        
                    </ul>
                    {/* <Route exact path="/"><Home /></Route> */}
                    <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/About" component={About} />
                    </Switch>
                </div>
            </Router>
        )
    }

}

module.exports = App;