//自定义可写流
const {Writable} = require('stream');//stream是对象

// console.log(stream);
// console.log(stream.Writable);
//console.log(stream === stream.Writable);//false
//console.log(Writable);

class MyWriter  extends Writable{

	_write(chunk,encoding,callback){
		console.log(chunk);
		console.log(encoding);
		callback && callback();
	}
}

const writer = new MyWriter();
writer.write('hello','utf-8',()=>{
	console.log('hello...')
});