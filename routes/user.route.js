const express=require("express")
const {usermodel}=require("../mdel/user.model")
const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken")
const users=express.Router()


users.post("/register",async(req,res)=>{
    const {name,pass,location}=req.body
       try {
        bcrypt.hash(pass, 3, async(err, hash)=> {
            const newuser=new usermodel({name,pass:hash,location})
            await newuser.save()
            res.status(200).send({"msg":"registration succesfully"})
        });
       } catch (error) {
        res.status(400).send({"msg":error.message})
       }
})
users.post("/login",async(req,res)=>{
     const {name,pass}=req.body
     const data=await usermodel.findOne({name})
     try {
        bcrypt.compare(pass, data.pass, function(err, result) {
            if(result){
                res.status(200).send({"msg":"login successfully",tocken:jwt.sign({id:data.id},"super")})
            }else{
                res.status(400).send({"msg":"wrong credential"})
            }
        });
     } catch (error) {
         res.status(400).send({"msg":error.message})
     }
})

module.exports={users}
