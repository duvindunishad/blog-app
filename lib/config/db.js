import mongoose from "mongoose";

export const ConnectDB = async ()=>{
     await mongoose.connect('')
     console.log("database connected")
}
