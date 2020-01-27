const mongoose = require('mongoose');

//连接数据库服务
mongoose.connect('mongodb://localhost/kuazhu', { useNewUrlParser: true });

const db = mongoose.connection;

db.on('error',(err)=>{
    console.log('connect err');
    throw err;

});

db.once('open',()=>{
    console.log('connect successful');

    //定义schema
    const useSchema = new mongoose.Schema({
        name:String,
        age:Number,
        major:String
    })

    //定义模型
    //第一个参数是指定的集合，第二个参数是schema
    const uesModule = mongoose.model('user',useSchema);

    /*
    const user = new uesModule({
        name:'ton',
        age:18,
        major:'computer'
    })

    user.save((err,doc)=>{
        if(err){
            console.log('save err',err);
        }else{
            console.log(doc);
        }
    })
    */

    
    /*
    uesModule.find({name:'ton'},(err,doc)=>{
        if(err){
            console.log('find err',err);
        }else{
            console.log(doc);
        }
    })
    */



    //update已经废弃,用updateOne或者updateMany
    /*
    uesModule.updateOne({name:'ton'},{$set:{name:'leo'}},(err,result)=>{
        if(err){
            console.log('updateOne err',err);
        }else{
            console.log(result);
        }
    })
    */


    //delete已经废弃,用deleteOne或者deleteMany
    uesModule.deleteOne({name:'leo'},(err,result)=>{
        if(err){
            console.log('updateOne err',err);
        }else{
            console.log(result);
        }
    })    
})

