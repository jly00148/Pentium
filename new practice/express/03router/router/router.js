const express = require('express');

const router = express.Router();

router.get('/',(req,res)=>{
    res.send('router get...');
})
router.post('/',(req,res)=>{
    res.send('router post...');
})
router.put('/',(req,res)=>{
    res.send('router put...');
})
router.delete('/',(req,res)=>{
    res.send('router delete...');
})

module.exports = router;