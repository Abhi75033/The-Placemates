import mongoose from "mongoose";

const LoginSchema = new mongoose.Schema({

   googeleId:{
    type:String,
   },
   Name:{
    type:String
   },
   email:{
    type:String
   },
   image:{
    type:String
   }
    Phone_No:{
        type:Number,
        required:true
    }

},{timestamps:true})

export const Login = mongoose.model('Login',LoginSchema)
