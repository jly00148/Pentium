const express = require('express');

const app = express();

const port = 3000;
app.get('/index.html',(req,res)=>{
    res.end('ok');
})

app.listen(port,()=>{
    console.log(`server is running port at ${port}`)
});
