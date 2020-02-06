console.log('app...');

//写法一
/*
export const a = 1;
export const b = 2;
*/

//写法二
/*
const a = 1;
const b = 2;
export {
    a,
    b
}
*/

//写法三
/*
const a = 1;
const b = 2;
export {
    a,
    b
}
*/

//写法四
/*
const a = 1;
const b = 2;
export {
    a,
    b as b1
}
*/

//写法五
/*
const a = 1;
export default a;
*/

//写法六
export default 11;