const express = require('express');

const index = express.Router();

index.get('/',(req,res)=>{
    res.send('index get...');
})
index.post('/',(req,res)=>{
    res.send('index post...');
})
index.put('/',(req,res)=>{
    res.send('index put...');
})
index.delete('/',(req,res)=>{
    res.send('index delete...');
})

module.exports = index;