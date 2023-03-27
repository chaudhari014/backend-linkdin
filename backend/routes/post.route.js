const express=require("express")
const {postmodel}=require("../mdel/post.mdel")
const post=express.Router()

post.post("/add",async(req,res)=>{
    const {title,body,userid}=req.body
    try {
        const newpost=new postmodel({title,body,userid})
        await newpost.save()
        res.status(200).send({"msg":"add post successfully"})
    } catch (error) {
        res.status(400).send({"msg":error.message})
    }
})

post.get("/",async(req,res)=>{
    const {userid}=req.body
     try {
        const data= await postmodel.find({userid:userid})
        res.status(200).send(data)
     } catch (error) {
          res.status(400).send({"msg":error.message})
     }
})

post.delete("/delete/:id",async(req,res)=>{
    try {
        const {id}=req.params
    const data= await postmodel.findByIdAndDelete({_id:id})
    res.status(200).send({"msg":"delete post successfully"})
    } catch (error) {
        res.status(400).send({"msg":error.message})
    }
    

})

post.patch("/update/:id",async(req,res)=>{
    try {
        const {id}=req.params
        const payload=req.body
        const data= await postmodel.findByIdAndUpdate({_id:id},payload)
        res.status(200).send({"msg":"update post successfully"})
    } catch (error) {
        res.status(400).send({"msg":error.message})
    }

})

module.exports={post}