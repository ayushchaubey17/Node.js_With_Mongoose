let mongoose = require('mongoose');


let fun1 = mongoose.connect('mongodb://127.0.0.1:27017/test');

fun1.then(
    ()=>{
        console.log("success")
    }
).catch(
    ()=>{
        console.log("unsuccess")
    }
);


let ayushSchema = mongoose.Schema({
    name:String
});

let Ayush = mongoose.model("Boy",ayushSchema);


let usersSchema = mongoose.Schema(
    {
        name:String,
        age:Number
    }
);


let User = mongoose.model('User',usersSchema);