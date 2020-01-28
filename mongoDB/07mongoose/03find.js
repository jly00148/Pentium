const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/kuazhu',{ useNewUrlParser: true });
const db = mongoose.connection;

db.on('error',(err)=>{
    throw err;
});

db.on('open',()=>{
    console.log('connect successful');
    const userSchema = new mongoose.Schema({
        name:String,
        age:Number,
        major:String
    })

    const userModel = mongoose.model('user',userSchema);


    /*
    userModel.find({},(err,docs)=>{
        if(err){
            console.log('find err',err);
        }else{
            console.log(docs);
        }
    })
    */

    /*
   userModel.find({age:{$gt:40}},'name age -_id',(err,docs)=>{
        if(err){
            console.log('find err',err);
        }else{
            console.log(docs);
        }
    })
    */

    /*
   userModel.find({age:{$gt:40}},'name age -_id',{skip:1},(err,docs)=>{
    if(err){
        console.log('find err',err);
    }else{
        console.log(docs);
    }
}) 
*/

/*
userModel.find({age:{$gt:40}},'name age -_id',{limit:1},(err,docs)=>{
    if(err){
        console.log('find err',err);
    }else{
        console.log(docs);
    }
})
*/


userModel.find({},'name age -_id',{sort:{age:-1}},(err,docs)=>{
    if(err){
        console.log('find err',err);
    }else{
        console.log(docs);
    }
})


})