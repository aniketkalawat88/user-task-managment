const UserModel = require("../models/User")


const getUser = async (req, res) => {
    try{
        const users =  await UserModel.find();
        res.status(200).json({message:"All User Fetch Successfully" , value:users})
    }
    catch(err){
        res.status(500).json({message:"Error Creating User" , error:err})
    }
}

const createUser = async (req, res) => {
    const { name , email , mobile } = req.body;
    try{
        const isUserExist = await UserModel.findOne({email:email});
        
        if(isUserExist){
            return res.status(400).json({message:"User already Exist"})
        }

        const data = await UserModel.create({
            name:name,
            email:email,
            mobile:mobile
        })
        res.status(201).json({message:"User created successfully" , value: data})
    }
    catch(err){
        return res.status(500).json({message:"Internal Server Error ", error : err})
    }

}


module.exports = { createUser , getUser }