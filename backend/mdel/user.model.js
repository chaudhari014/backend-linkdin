const mongoose=require("mongoose")

const userSchema=mongoose.Schema({
    name:String,
    pass:String,
    location:String
})

const usermodel=mongoose.model("user",userSchema)

module.exports={usermodel}