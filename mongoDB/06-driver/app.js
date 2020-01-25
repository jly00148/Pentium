const mongodb = require('mongodb');
// console.log(mongodb); //function

const mongoClient = mongodb.MongoClient;
// console.log(typeof mongoClient); function

const url = 'mongodb://localhost:27017';
const dbName = 'kuazhu';

const client = new mongoClient(url,{ useUnifiedTopology: true });

client.connect(function(err){
    console.log('connected successfully on server');

    const db = client.db(dbName);
    // console.log(typeof db); object

    const collection = db.collection('users');
    /*
    collection.insertMany([{name:'jly',age:18},{name:'leo',age:28},{name:'amy',age:38}],(err,result)=>{
        if(err){
            console.log('insert err...',err);
        }else{
            // console.log(typeof result);object
        }
        client.close();
    });
    */

    /*
    collection.find({}).toArray((err,docs)=>{
        if(err){
            console.log('find err',err);
        }else{
            console.log(docs);
        }
    })
    */

    /*
   collection.find({name:'jly'}).toArray((err,docs)=>{
        if(err){
            console.log('find err',err);
        }else{
            console.log(docs);
        }
    })
    */

    /*
   collection.find({age:28}).toArray((err,docs)=>{
        if(err){
            console.log('find err',err);
        }else{
            console.log(docs);
        }
    })
    */

    /*
    collection.updateOne({name:'jly'},{$set:{age:99}},(err,result)=>{
        if(err){
            console.log('updateOne',err)
        }else{
            console.log(result);
        }
    })
    */

    /*
    collection.updateMany({name:'jly'},{$set:{age:99}},(err,result)=>{
        if(err){
            console.log('updateOne',err)
        }else{
            console.log(result);
        }
    })
    */

    collection.deleteMany({name:'jly'},{$set:{age:99}},(err,result)=>{
        if(err){
            console.log('updateOne',err)
        }else{
            console.log(result);
        }
    })
})