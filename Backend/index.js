import { app } from "./app.js";
import dotenv from 'dotenv'
import DataBase_Connection from "./src/Db/DataBase_Connection.js";


dotenv.config({
    path:'./.env'
})


DataBase_Connection()
.then(()=>{
app.listen(process.env.PORT || 5000 ,()=>console.log(`Server is started at Port no: ${process.env.PORT}`))
}).catch((error)=>{
    console.log(error);
})