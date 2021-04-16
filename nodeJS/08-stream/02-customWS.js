//自定义可写流
const { Writable } = require('stream');//stream是对象

// console.log(stream);
// console.log(stream.Writable);
//console.log(stream === stream.Writable);//false
//console.log(Writable);

class MyWriter  extends Writable{

	_write(chunk,encoding,callback){
		//第一个参数是数据的Buffer
		//第二个参数是buffer
		//第三个writer的回调
		console.log(chunk);
		console.log(encoding);
		callback && callback();
	}
}

const writer = new MyWriter();

//writer.write方法是向流中写入数据，继承自Writable
//具体方法由_write来实现，也就是说Writable的write方法中会调用_write方法

writer.on('finish',()=>{
	console.log('after finish...')
})

writer.write('hello','utf-8',()=>{
	console.log('hello...')
});

//write.enf()关闭流同时如果传参的话也可以写入数据，该方法继承Writable，在改方法内部当流关闭时会触发一个叫'finish'的事件
writer.end('aa')