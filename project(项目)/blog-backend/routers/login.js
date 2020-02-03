const express = require('express');

const router = express.Router();

router.post('/login',(req,res)=>{
    const {username,password} = req.body;
    console.log(username);
    console.log(password);
})