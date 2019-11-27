/*
console.log(1);
let timer = setTimeout(()=>{
	console.log(2);
})
clearTimeout(timer);
console.log(3);
*/

console.log(1);
let timer = setInterval(()=>{
	console.log(2);
},2000)
clearInterval(timer);
console.log(3);