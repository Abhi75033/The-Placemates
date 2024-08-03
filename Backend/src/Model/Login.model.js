import mongoose from "mongoose";

const LoginSchema = new mongoose.Schema({
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> ec7805a9 (Integrated googleauth successfully)
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
<<<<<<< HEAD
=======
    Phone_No:{
        type:Number,
        required:true
    }
>>>>>>> 7c9612f (Bakend Login setup has completed)
=======
>>>>>>> ec7805a9 (Integrated googleauth successfully)
},{timestamps:true})

export const Login = mongoose.model('Login',LoginSchema)