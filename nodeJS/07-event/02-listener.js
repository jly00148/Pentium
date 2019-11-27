const EventEmitter = require('events');

class MyEmitter extends EventEmitter{

}

const emitter = new MyEmitter;
/*
emitter.on('test',()=>{
	console.log('trigger','running is testing');
})

emitter.addListener('test',()=>{
	console.log('add','running is testing');
})

emitter.emit('test');

console.log(emitter.on === emitter.addListener)//reue
*/
/*
emitter.once('test',()=>{//once仅触发一次
	console.log('trigger','running is testing');
})
emitter.emit('test');
emitter.emit('test');

*/

emitter.setMaxListeners(11);
emitter.on('test',()=>{
	console.log('1trigger','running is testing');
})
emitter.on('test',()=>{
	console.log('2trigger','running is testing');
})
emitter.on('test',()=>{
	console.log('3trigger','running is testing');
})
emitter.on('test',()=>{
	console.log('4trigger','running is testing');
})
emitter.on('test',()=>{
	console.log('5trigger','running is testing');
})
emitter.on('test',()=>{
	console.log('6trigger','running is testing');
})
emitter.on('test',()=>{
	console.log('7trigger','running is testing');
})
emitter.on('test',()=>{
	console.log('8trigger','running is testing');
})
emitter.on('test',()=>{
	console.log('9trigger','running is testing');
})
emitter.on('test',()=>{
	console.log('10trigger','running is testing');
})
emitter.on('test',()=>{
	console.log('11trigger','running is testing');
})
emitter.on('test',()=>{
	console.log('12trigger','running is testing');
})

emitter.emit('test');