let mongoose = require('mongoose');

let conn  = async ()=>{
    await mongoose.connect('mongodb://127.0.0.1:27017/mydb');
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




    let girlsSchema = mongoose.Schema({
        name:String,
        age:Number
    });



    let Girl = mongoose.model("Girl",girlsSchema);


    //for one insertion
    // let girl1 = new Girl({...})


    Girl.insertMany([
        {name:"sneha",age:20},
        {name:"priya",age:34},
        {name:"radha",age:45}
    ]).then(
        (res)=>{console.log(res)}
    ).catch(
        (err)=>{console.log(err)}
    );