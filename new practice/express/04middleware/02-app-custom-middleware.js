const http = require('http');


//v1
/*
const server = http.createServer((req,res)=>{
    res.end('ok')
})
*/

//v2
/*
const app = (req,res)=>{
    res.end('ok')
}
const server = http.createServer(app);
*/

const express = ()=>{
    var app = (req,res)=>{
        res.end('ok');
    }
    return app;
}

const app = express();
const server = http.createServer(app);


server.listen(3000,'127.0.0.1',()=>{
    console.log('server is running at 127.0.0.1:3000');
})