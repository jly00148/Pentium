const str = 'hello';

const fn = ()=>{
	console.log('fn...');
}

const obj = {
	name:"jly",
	age:18
}

/*
console.log(exports);
console.log(module.exports);

console.log(exports === module.exports);//true
*/
/*
exports.str = str;
exports.fn = fn;
exports.obj = obj;

console.log(exports);
*/

module.exports.str = str;
module.exports.fn = fn;
module.exports.obj = obj;



// console.log(module.exports);