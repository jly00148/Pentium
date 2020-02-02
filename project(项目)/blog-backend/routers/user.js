const express = require('express');
const router = express.Router();
const userModel = require('../modules/user.js');
const hmac = require('../util/hmac.js');
// console.log(hmac + '');
/*
(str)=>{
    const hmac = crypto.createHmac('sha512','jly');
    hmac.update(str);
    return hmac.digest('hex');
}
*/

router.post('/register',(req,res)=>{
    //console.log(req.body);//  [Object: null prototype] { username: 'a4444', password: '123' }
    const {username,password} = req.body;
    // console.log(username);
    // console.log(password);

    const result = {
        status:'',
        msg:''
    }
  
    userModel.findOne({username},(err,data)=>{
        if(err){
            console.log('findOne err',err);
        }else{
            if(data){
                result.status = '1';
                result.msg = '用户已存在';
                res.json(result);
            }else{
                userModel.insertMany({
                    username,
                    password:hmac(password)
                },(err,data)=>{
                    if(err){
                        console.log('insertMany err',err);
                    }else{
                        // console.log(data);
                        result.status = '2';
                        result.msg = '注册成功！请登录';
                        result.data = username;
                        res.json(result);
                    }
                })
            }
        }
    })
})

module.exports = router;