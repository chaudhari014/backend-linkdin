const mongoose=require("mongoose")

const connection=mongoose.connect("mongodb+srv://rahul:rahulchaudhari@cluster0.vuswuat.mongodb.net/linkdin?retryWrites=true&w=majority")

module.exports={connection}