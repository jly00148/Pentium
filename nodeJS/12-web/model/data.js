const util = require('util');
const fs = require('fs');
const path = require('path')


const filePath = path.normalize(__dirname +'/' + '../data/data.json')

const readFile = util.promisify(fs.readFile)
const writeFile = util.promisify(fs.writeFile)


async function get(){
	const result = await readFile(filePath)
	return result
}


async function del(id){
	const result = await readFile(filePath)
	const arr = JSON.parse(result.toString())
	const newArr = arr.filter((item)=>{
		return id != item.id

	});


	await writeFile(filePath,JSON.stringify(newArr))

	if(newArr.length != arr.length){
		return {
			code:1,
			msg:'删除成功'
		}
		return
	}
	return {
		code:0,
		msg:'删除失败'
	}
}

async function add(body){
	const result = await readFile(filePath)
	const newArr = JSON.parse(result.toString())
	const newBody = JSON.parse(body)
	newBody.id = Date.now().toString()
	newArr.push(newBody)

	await writeFile(filePath,JSON.stringify(newArr))
	return {
		code:1,
		msg:'删除成功',
		id:newBody.id,
		task:newBody.task
	}
}

module.exports = {
	get:get,
	del:del,
	add:add
}