let mongoose = require('mongoose');


let conn  = async ()=>{
await mongoose.connect('mongodb://127.0.0.1:27017/test');
}


conn().then(
(res)=>{
   console.log("success") 
}
).catch(
    (err)=>{
        console.log("unsuuccess");
    }
);