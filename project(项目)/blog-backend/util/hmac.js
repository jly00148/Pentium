const crypto = require('crypto');

//生成hash对象
// const hash = crypto.createHash('md5'); //md5算法密文：098f6bcd4621d373cade4e832627b4f6
// const hash = crypto.createHash('sha256'); // sha256算法密文：9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08
// const hash = crypto.createHash('sha512'); // ？？
// const hmac = crypto.createHmac('sha512','jly');

//添加铭文
// hmac.update('test');

//生成密文
// console.log(hmac.digest('hex')); 

module.exports = (str)=>{
    const hmac = crypto.createHmac('sha512','jly');
    hmac.update(str);
    return hmac.digest('hex');
}
