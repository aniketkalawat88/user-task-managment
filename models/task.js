const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
    userId :{
        type: mongoose.Schema.Types.ObjectId , 
        ref:'User'
    },
    title:{
        type:String,
        required:true,
    },
    status:{
        type:String,
        enum:['pending', 'completed'],
        default:'pending'
    },
})

const TaskModel = mongoose.model('task', taskSchema);
module.exports = TaskModel;