require("dotenv").config()
 const express = require("express")
  
 const app=express()

const todoRoute = require("./routes/todo.route")

app.use(express.json())
app.use("/api", todoRoute)



const PORT = process.env.PORT || 5000

 app.listen(PORT, ()=>{
    console.log(PORT);
 })