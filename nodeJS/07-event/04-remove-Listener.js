const EventEmitter = require('events');

class MyEmitter extends EventEmitter{

}

const emitter = new MyEmitter();
const fn1 = ()=>{
	console.log('running is testing');
}

emitter.on('test',fn1);
//emitter.off('test',fn1);
emitter.emit('test');