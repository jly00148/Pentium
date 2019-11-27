const EventEmitter = require('events');
//console.log(ev);返回一个类

/*
const emitter = new EventEmitter();
//console.log(emitter);

emitter.on('test',()=>{
	console.log('running is test...');
})


emitter.emit('test');//trigger不能用，用emit
*/
class MyEmitter extends EventEmitter{

}

const emitter = new MyEmitter();
emitter.on('test',(event,arg1,arg2)=>{
	console.log('running is testing');//hello kuazhu undefined
	console.log(event,arg1,arg2);
})
emitter.emit('test','hello','kuazhu');