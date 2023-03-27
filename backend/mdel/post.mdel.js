const mongoose=require("mongoose")

const postSchema=mongoose.Schema({
    title:String,
    body:String,
    userid:String
})

const postmodel=mongoose.model("post",postSchema)

module.exports={postmodel}