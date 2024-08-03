import mongoose from "mongoose";
import { DB_NAME } from "../Utils/Constant.utils.js";


const DataBase_Connection = async()=>{
try {
    const connction = await mongoose.connect(`${process.env.MONGO_URI}${DB_NAME}`)
    
    console.log(`MongoDb conncted SuccessFully ${connction.connection.host}`)
} catch (error) {
    console.log(`MongoDb Connection Error ${error}`)
    process.exit(1)
}
}

export default DataBase_Connection
