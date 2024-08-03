import mongoose from 'mongoose'

const LoginwithemailSchema = new mongoose.Schema({
    mail:{
        type:String,
        required:true
    }
},{})

export const LoginWitlmail = mongoose.model('LoginWitlmail',LoginwithemailSchema)