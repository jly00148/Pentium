const express = require('express');
const querystring = require('querystring');
const bodyParser = require('body-parser');
const app = express();

const port = 3000;
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());


app.post('/',(req,res)=>{
    /*
    let body = '';

    req.on('data',(chunk)=>{
        body+=chunk;
    })

    req.on('end',()=>{
        // console.log(body);  name=jly&age=18

        let obj = querystring.parse(body);

        //console.log(obj);  [Object: null prototype] { name: 'jly', age: '18' }
    })
    res.send('<h1>post你好</h1>');
    */



    // console.log(bodyParser);
    /*
    { [Function]
        json: [Getter],
        raw: [Getter],
        text: [Getter],
        urlencoded: [Getter] }
*/
  
        console.log(req.body);
        res.send('ok');


})

app.listen(port,()=>{
    console.log(`server is running port at ${port}`)
});
