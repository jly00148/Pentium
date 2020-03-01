import React from 'react';

import ReactDOM from 'react-dom';

import App from './app.js';

//写法一
/*
import {a,b} from './app.js';
console.log(a,b);
*/

//写法二(同写法一)
/*
import {a,b} from './app.js';
console.log(a,b);
*/

//写法三
/*
import {a as a1,b} from './app.js';
console.log(a1,b);
*/

//写法四
/*
import {a as a1,b1} from './app.js';
console.log(a1,b1);
*/

//写法五
/*
import b from "./app.js";;
console.log(b);
*/

//写法六
/*
import b from "./app.js";;
console.log(b);
*/


ReactDOM.render(<App />,document.getElementById('root'));