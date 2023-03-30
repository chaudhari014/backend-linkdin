const mongoose=require("mongoose")
// require("dotenv").config();


 const connection=mongoose.connect("mongodb+srv://rahul:rahulchaudhari@cluster0.vuswuat.mongodb.net/?retryWrites=true&w=majority")

module.exports={connection}