const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required:[true ,  "Please Enter your name"],
    },
    email:{
        type:String,
        required:true,
    },
    mobile:{
        type:String,
        required:true,
        maxLength:[10, "Number cannot more than 10 char"],
        minLength:[10, "Number cannot less than 10 char"]
    }
})

const UserModel = mongoose.model('User', userSchema);
module.exports = UserModel;