const jwt=require("jsonwebtoken")

const auth=(req,res,next)=>{
     const tocken=req.headers.authorization
     if(tocken){
        const decode=jwt.verify(tocken,"super")

        if(decode){
            req.body.userid=decode.id
            next()
        }
        else{
            res.status(400).send({"msg":"logi first"})
        }
     }else{
        res.status(400).send({"msg":"logi first"})
     }
}

module.exports={auth}