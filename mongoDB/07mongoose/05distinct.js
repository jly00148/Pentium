const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/kuazhu',{ useNewUrlParser: true });

const db = mongoose.connection;

db.on('error',(err)=>{
    throw err;
})

db.on('open',()=>{
    console.log('connect successful');

    const userSchema = new mongoose.Schema({
        name:String,
        age:Number,
        major:String
    })

    const userModel = mongoose.model('user',userSchema);

    userModel.distinct('name',{age:{$gt:20}},(err,result)=>{
        if(err){
            console.log('distinct err',err);
        }else{
            console.log(result);
        }
    })
})
