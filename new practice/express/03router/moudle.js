const express = require('express');
const port = 3000;
const app = express();



app.use(express.static('static'));
const routerModule = require('./router/router');
const indexModule = require('./router/index');

//index
/*
app.get('/index',(req,res)=>{
    res.send('index get...');
})

app.post('/index',(req,res)=>{
    res.send('index post...');
})

app.put('/index',(req,res)=>{
    res.send(' indexput...');
})

app.delete('/index',(req,res)=>{
    res.send('index delete...');
})
*/
app.use('/index',indexModule);






//router
/*
app.get('/router',(req,res)=>{
    res.send('router get...');
})

app.post('/router',(req,res)=>{
    res.send('router post...');
})

app.put('/router',(req,res)=>{
    res.send(' terput...');
})

app.delete('/router',(req,res)=>{
    res.send('router delete...');
})
*/
app.use('/router',routerModule);


app.listen(port,()=>{
    console.log(`the server is running at ${port}`);
})