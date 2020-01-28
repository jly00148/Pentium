const mongoose = require('mongoose');
const userModel = require('./module/module.js');

mongoose.connect('mongodb://localhost/kuazhu',{ useNewUrlParser: true });

const db = mongoose.connection;

db.on('error',(err)=>{
    throw err;
})

db.on('open',()=>{
    console.log('connect successful');

    userModel.distinct('name',{age:{$gt:20}},(err,result)=>{
        if(err){
            console.log('distinct err',err);
        }else{
            console.log(result);
        }
    })
})
