const mongoose = require("mongoose");

const mongodbDatabase = async () => {
    try{
        const db = await mongoose.connect("mongodb+srv://aniketkalawat88:Q5Z7NjX6cHLCUWNV@cluster0.go7bz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
        console.log("Database connected successfully")
    }
    catch(err){
        console.log("Error database ", err)
    }
}

module.exports = mongodbDatabase;
