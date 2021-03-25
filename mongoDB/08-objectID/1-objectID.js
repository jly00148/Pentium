const mongoose = require('mongoose');
const cartSchema = require('./models/CartSchema.js');

mongoose.connect('mongodb://localhost/testdb',{ useNewUrlParser: true });

const db = mongoose.connection;

db.on('error',(err)=>{
    throw err;
})

db.on('open',()=>{//静态
    cartSchema.insertMany({},(err,result)=>{
    	if(err){
    		console.log(err);
    	}else{
    		console.log(result);
    	}
    })
})
