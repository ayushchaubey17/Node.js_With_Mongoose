let mongoose = require('mongoose');

let userSchema = new mongoose.Schema(

    {
            name: String,
            age: Number,
            email: String

    }
);