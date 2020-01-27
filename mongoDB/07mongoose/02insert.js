const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/kuazhu',{ useNewUrlParser: true });

const db = mongoose.connection;

const names = ['mie','leo','jly','amy','sunny','jack','lucy'];
const majors = ['computer','music','gym','math','english'];

function getRandom(min,max){
    return min + Math.round(parseInt((max -min) *Math.random()));
}

const getName = ()=> names[getRandom(0,names.length-1)];
const getMajor = ()=> majors[getRandom(0,majors.length-1)];
    

db.on('error',(err)=>{
    throw err;
})

db.on('open',()=>{
    console.log('connect successful');
    const useSchema = new mongoose.Schema({
        name:String,
        age:Number,
        major:String
    })

    const useModel = mongoose.model('user',useSchema);


    //返回一个promise对象
    /*
    useModel.insertMany(
        [
            {
                name:getName(),
                age:getRandom(10,100),
                major:getMajor()
            },
            {
                name:getName(),
                age:getRandom(10,100),
                major:getMajor()
            },
            {
                name:getName(),
                age:getRandom(10,100),
                major:getMajor()
            }
        ],
        (err,docs)=>{
        if(err){
            console.log('updateMany err',err);
        }else{
            console.log(docs);
        }
    })
    */
   const fn = async function(){
      return  await useModel.insertMany(
        [
            {
                name:getName(),
                age:getRandom(10,100),
                major:getMajor()
            },
            {
                name:getName(),
                age:getRandom(10,100),
                major:getMajor()
            },
            {
                name:getName(),
                age:getRandom(10,100),
                major:getMajor()
            }
        ] 
       )
   }

   fn().then(data=>{
       console.log('data',data);
   })
   .catch(err=>{
       console.log(err);
   })
})






