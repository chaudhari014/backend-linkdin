const express=require("express")
const {connection}=require("./db")
const cors=require("cors")
const {users}=require("./routes/user.route")
const {auth}=require("./middleware/auth")
const {post}=require("./routes/post.route")


const app=express()
app.use(cors())
app.use(express.json())

app.use("/users",users)

app.use(auth)
app.use("/post",post)

app.listen(7020,async()=>{
     try {
        await connection
        console.log("connected db")
     } catch (error) {
        console.log(error)
     } 
     console.log("server start")
})