const TaskModel = require("../models/task");
const UserModel = require("../models/User");

const createTask = async (req , res ) => {
    const { title , userId } = req.body;
    try{
        const userExit = await UserModel.findById(userId);
        if(!userExit){
            return res.status(404).json({message:"User not found"})
        }
        const data = await TaskModel.create({
            title:title,
            userId:userId,
        })
        res.status(201).json({message:"Task Created Successfully" , value : data})
    }
    catch(err){
        res.status(500).json({message:"Internal server error" , error:err})
    }
}

const getAllTask = async (req, res) => {
    try{
        const task = await TaskModel.find().populate("userId", "name email mobile");
        res.status(200).json({message:"All Task Succesfully fetch" , value:task})

    }catch(err){
        res.status(500).json({message:"Internal server error" , error:err})
    }
}

const SingleUserTask = async( req ,res ) => {
    try{
        const { id } = req.params;
    const task = await TaskModel.find({userId : id}).populate("userId" , "name");
    if(task.length === 0){
        return res.status(400).json({message:"No Task Found" , value:task})
    }
    res.status(200).json({
        message:"Here Your all task",
        value:task
    })
    }
    catch(err){
        return res.status(500).json({message:"Internal Server Error" , error : err})
    }

}

module.exports = { createTask , getAllTask , SingleUserTask}