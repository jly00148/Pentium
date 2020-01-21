const express = require('express');

const app = express();
const port = 3000;

app.use((req,res,next)=>{
    console.log('a1');
    next();
    console.log('a2');
})
app.use((req,res,next)=>{
    console.log('b1');
    next();
    console.log('b2');
})
app.use((req,res,next)=>{
    console.log('c1');
    next();
    console.log('c2');
})

app.get('/',(req,res)=>{
    res.send('get...');
})

app.listen(port,()=>{
    console.log(`the server is running at port ${port}`);
})