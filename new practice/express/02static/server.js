// const express = require('express');

// const app = express();

// const port = 3000;
// app.use(express.static('static'));
// app.get('/index.html',(req,res)=>{
//     res.send('<h1>你好</h1>');//自动添加请求头
// })

// app.listen(port,()=>{
//     console.log(`server is running port at ${port}`)
// });



const express = require('express');

const app = express();

const port = 3000;
app.use(express.static('static'));
app.get('/',(req,res)=>{
    res.send('<h1>你好</h1>');//自动添加请求头
})

app.post('/',(req,res)=>{
    res.send('<h1>你好</h1>');//自动添加请求头
    app.get('/',(req,res)=>{
        res.send('<h1>你好</h1>');//自动添加请求头
    })
})

app.put('/',(req,res)=>{
    res.send('<h1>你好</h1>');//自动添加请求头
})

app.delete('/',(req,res)=>{
    res.send('<h1>你好</h1>');//自动添加请求头
})
app.listen(port,()=>{
    console.log(`server is running port at ${port}`)
});
