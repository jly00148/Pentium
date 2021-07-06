function getData(ctx){
    return new Promise((resolve,reject)=>{
        try{
            let body = '';
            ctx.req.on('data',(chunk)=>{
                body+=chunk
            });
    
            ctx.req.on('end',()=>{
                // console.log('body::',body) username=123&password=456
                resolve(body)
            });
        }catch(err){
            reject(err)
        }

    })
}

module.exports = getData