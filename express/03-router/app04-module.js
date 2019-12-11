const express = require('express');

const userRouter = require('./routers/users.js');
const blogRouter = require('./routers/blog.js');
const app = express();
const port = 3000;

app.use(express.static('public'));
//app.use('/static',express.static('public'));

//app.get('',(req,res)=> res.end('hello world'));

/*
app.get('/users/:userId/books/:booksId',(req,res,)=>{
	console.log(req.params);
	console.log('get response data...');

});
*/

app.use('/users',userRouter);
app.use('/blog',blogRouter);



app.get('/',(req,res)=>{
	res.send('<h1>get response data...</h1>');
})
app.post('/',(req,res)=>res.send('post response data'));
app.put('/',(req,res)=>res.send('pull response data'));
app.delete('/',(req,res)=>res.send('delete response data'));

app.listen(port,()=>console.log(`app listening on port ${port}!`));