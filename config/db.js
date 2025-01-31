const mongoose = require("mongoose");

const mongodbDatabase = async () => {
    try{
        const db = await mongoose.connect("mongodb://localhost:27017/hacker-kernal");
        console.log("Database connected successfully")
    }
    catch(err){
        console.log("Error database ", err)
    }
}

module.exports = mongodbDatabase;