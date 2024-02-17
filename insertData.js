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



    //creating an schema

    let boysSchema = mongoose.Schema(
        {
            name:String,
            age:Number
        }
    )


    // creating a model

    let Boy = mongoose.model("Boy",boysSchema);


    let boy1 = new Boy({name:"ayush",age:20});
    let boy2 = new Boy({name:"ram",age:12});
    let boy3 = new Boy({name:"shri",age:87});


    // save methods returns an promise it is an asynchronous function
    boy1.save();
    boy2.save();


    boy3.save().then(
        (res)=>{console.log(res)}
    ).catch(
        (err)=>{console.log(err)}
    );