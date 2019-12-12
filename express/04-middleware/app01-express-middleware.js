const express = require('express');

const app = express();
const port = 3000;


app.use((req,res,next)=>{
	console.log('A1');
	next();
	console.log('A2');	
})
app.use((req,res,next)=>{
	console.log('B1');
	next();
	console.log('B2');	
})
 app.use((req,res,next)=>{
	console.log('C1');
	next();
	console.log('C2');	
})





app.get('/',(req,res)=>{
	
	res.end('<h1>hello跨猪</h1>');
	//console.log('connect successful');
});




app.listen(port,()=>console.log(`app listening on port ${port}!`));