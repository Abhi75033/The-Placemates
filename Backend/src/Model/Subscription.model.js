import mongoose, { Schema } from "mongoose";

const SubsciptionSchema =  new mongoose.Schema({
    Duration:{
        type:Number,
        required:true
    },
    Subscription_type:{
        type:String,
        required:true
    },
    Subscriber:{
        type:Schema.Types.ObjectId,
        ref:'Login'
    }
},{timestamps:true})

export const SubsCription = mongoose.model('SubsCription',SubsciptionSchema)



