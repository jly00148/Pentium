const express = require('express');
const userModel = require('../modules/user.js');
const router = express.Router();

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
                    password
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