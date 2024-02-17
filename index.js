// making a connection

let mongoose = require('mongoose');

let fun1 = mongoose.connect('mongodb://127.0.0.1:27017/test');

fun1.then(
    (res)=>{
console.log(`connection established successfully`)
    }
)
.catch((err)=>{
    console.log(err)
});