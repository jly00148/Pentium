import React,{ Component } from 'react';
import Todolist from '../pages/todilist/index.js';

class App extends Component{
    render(){
        return(
            <div className='App'>
                <Todolist />
            </div>

        )
    }

}

module.exports = App;