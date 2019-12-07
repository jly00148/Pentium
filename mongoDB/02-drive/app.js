const MongoClient = require('mongodb').MongoClient;

//console.log(MongoClient);构造函数


//connection URL
const url = 'mongodb://localhost:27017';

//database name
const dbName = 'kuazhu';

//create a new MongoClient
const client = new MongoClient(url,{ useNewUrlParser:true });

//Use connect method to connect to the Server
client.connect(function(err){
	
	console.log('Connected successfully to server');

	const db = client.db(dbName);

	//insert a document
	//get the document collecion
	/*
	const collection = db.collection('users');
	
	collection.insertMany([{name:'jly',age:18,major:'computer'},{name:'leo',age:88,major:'art'}],(err,result)=>{
		if(err){
			console.log('insertMany err',err);
		}else{
			console.log(result);
		}
		client.close();
	});
	*/

	//find all
	/*
	const collection = db.collection('users');
	collection.find({}).toArray((err,docs)=>{
		if(err){
			console.log('find err',err);
		}else{
			console.log(docs);
		}
		client.close();
	});
	*/


	//find attribute
	/*
	const collection = db.collection('users');
	collection.find({name:'jly'}).toArray((err,docs)=>{
		if(err){
			console.log('find err',err);
		}else{
			console.log(docs);
		}
		client.close();
	});
	*/


	//update a document
	/*
	const collection = db.collection('users');
	collection.updateOne({name:'jly'},{$set:{age:68}},(err,result)=>{
		if(err){
			console.log('updateOne::',err);
		}else{
			console.log(result);
		}
		client.close();
	});
	*/
	//remove a document
	const collection = db.collection('users');
	collection.removeOne({name:'jly'},{$set:{age:68}},(err,result)=>{
		if(err){
			console.log('removeOne::',err);
		}else{
			console.log(result);
		}
		client.close();
	});	

});

