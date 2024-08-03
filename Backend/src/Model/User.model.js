import mongoose from "mongoose";
import jwt from 'jsonwebtoken'

const UserSchema = new mongoose.Schema({
    UserName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    Niche:{
        type:String,
        required:true
    }
},{timestamps:true})




export const User = mongoose.model('User',UserSchema)