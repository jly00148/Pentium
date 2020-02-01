const express = require('express');
const userModel = require('../modules/user.js');
const router = express.Router();

router.post('/register',(req,res)=>{
    //console.log(req.body);//  [Object: null prototype] { username: 'a4444', password: '123' }

    const {username,password} = req.body;
    console.log(username);
    console.log(password);
    const result = {
        status:'',
        msg:''
    }
    
    userModel.findOne({username})
    .then(data=>{
        console.log(data.username);//null
        if(data.username){
            result.msg = '用户名已存在';
            result.status = 1;
            res.json(result);

        }else{
            userModel.insertMany({
                username,
                password
            })
            .then(data=>{
                console.log(data);
            })
            .catch(err=>{
                throw err;
            })

        }
    })
    .catch(err=>{

    })
})

module.exports = router;