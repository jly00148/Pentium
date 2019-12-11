const express = require('express');

const router = express.Router();

router.get('/',(req,res)=>{
	res.send('<h1>get response data...</h1>');
})
router.post('/',(req,res)=>{
	res.send('<h1>get response data...</h1>');
})
router.put('/',(req,res)=>{
	res.send('<h1>get response data...</h1>');
})
router.delete('/',(req,res)=>{
	res.send('<h1>get response data...</h1>');
})

module.exports = router;