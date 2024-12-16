import mongoose from "mongoose";

const ConnectDB = async ()=>{
     await mongoose.connect('mongodb+srv://duvindunishad:duvindunishad9711@cluster0.jqiha.mongodb.net/Blogapp')
     console.log("database connected")
}
