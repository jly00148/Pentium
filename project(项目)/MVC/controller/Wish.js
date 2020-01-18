const swig = require('swig');
const { getAll,add,remove } = require('../module/Module.js');

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
}


module.exports  = new wish();
