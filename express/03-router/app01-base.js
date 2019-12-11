const express = require('express');

const app = express();
const port = 3000;

app.use(express.static('public'));
//app.use('/static',express.static('public'));

//app.get('',(req,res)=> res.end('hello world'));
app.all('/',(req,res,next)=>{
	//console.log('all....');
	next();
})
app.get('/',(req,res,next)=>{
	console.log('do something....');
	next();
},(req,res)=>{
	console.log('get response data');
});
app.post('/',(req,res)=>res.send('post response data'));
app.put('/',(req,res)=>res.send('pull response data'));
app.delete('/',(req,res)=>res.send('delete response data'));

app.listen(port,()=>console.log(`app listening on port ${port}!`));