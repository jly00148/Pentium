import React,{ Component } from 'react';
import { Router,Route,Link } from 'react-router';
import Todolist from '../pages/todilist/index.js';

class Home extends Component{
    render(){
        return <h1>this is home title</h1>
    }
}

class App extends Component{
    render(){
        return(
            <Router>
                <div className='App'>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                    </ul>
                    <Route path="/" Component={Home} />
                </div>
            </Router>
        )
    }

}

module.exports = App;