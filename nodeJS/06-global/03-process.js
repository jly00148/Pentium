//console.log(process);
//console.log(global.process);

//console.log(global.process === process);//true


//console.log(process.argv);
//process.argv 属性返回一个数组，其中包括当启动 Node.js进程转入

//process.env 属性返回包括用户环境的对象
//console.log(process.env);

//process.pid 属性返回进程ID
//console.log(process.pid);

console.log(1);
process.nextTick(()=>{
	console.log(2);
})
console.log(3);