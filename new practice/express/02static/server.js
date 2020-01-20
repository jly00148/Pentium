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


/*
const express = require('express');

const app = express();

const port = 3000;
app.use(express.static('static'));

app.all('/',(req,res,next)=>{
    console.log('all...');
    next();
//    res.send('all...');    
})
app.get('/',(req,res,next)=>{    
    console.log('DO SOMETHING...');
    next();
},(req,res)=>{
    res.send('get...');
});





app.post('/',(req,res)=>{
    res.send('<h1>post你好</h1>');
})

app.put('/',(req,res)=>{
    res.send('<h1>put你好</h1>');//自动添加请求头
})

app.delete('/',(req,res)=>{
    res.send('<h1>delete你好</h1>');//自动添加请求头
})
app.listen(port,()=>{
    console.log(`server is running port at ${port}`)
});
*/



const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('static'));


/*
app.get('/users/:userId/age/:userAge',(req,res)=>{   
    //方法一 
    //console.log(req.params);   { userId: 'jly', userAge: '18' }

    res.end('get data...');
});
*/

app.get('/',(req,res)=>{   
 
    //方法二
    // console.log(req.query);   { users: 'jly', age: '18' }

    res.end('get data...');
});


app.post('/',(req,res)=>{
    res.send('<h1>post你好</h1>');
})

app.put('/',(req,res)=>{
    res.send('<h1>put你好</h1>');//自动添加请求头
})

app.delete('/',(req,res)=>{
    res.send('<h1>delete你好</h1>');//自动添加请求头
})
app.listen(port,()=>{
    console.log(`server is running port at ${port}`)
});



// res.send({name:"jly",age:18}) 直接返回的是对象不必转字符串
// res.send(<h1>get data</h1>) 直接返回的是html不必转字符串
// res.json({name:"jly",age:18}) 直接返回的是json

