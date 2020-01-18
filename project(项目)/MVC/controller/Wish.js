const swig = require('swig');
const querystring = require('querystring');
const { getAll,add:addWish,remove } = require('../module/Module.js');

class wish{
    index(req,res,...args){
        getAll()
        .then(data=>{
            // console.log('data:::',data);
           res.setHeader('Content-Type','text/html;charset=utf-8');
    
           let template = swig.compileFile(__dirname + '/../view/wish/index.html');
           let html = template({
               data
           })
           res.end(html);
        })
    }

    // 添加许愿
    add(req,res,...args){
        let body = '';
        req.on('data',(chunk)=>{
            body+=chunk;
        })
        req.on('end',()=>{
            //console.log(body);
            let obj = querystring.parse(body);
            //console.log(obj);
            addWish(obj)
            .then(data=>{
                let result = JSON.stringify({
                    data:data,
                    status:1
                })         
                res.end(result);

            })
            .catch(err=>{
                let result = JSON.stringify({
                    message:'添加失败',
                    status:0
                })
                res.end(result);
            })

        })     
    }

    del(req,res,...args){
        remove(args[0])
        .then(data=>{
            let status = {
                status:1,
                data:data
            }
            res.end(JSON.stringify(status))
        })
        .catch(err=>{
            let status = {
                status:0,
                message:'出错了'
            }
            res.end(JSON.stringify(status));
        })        
    }


}


module.exports  = new wish();