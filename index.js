import express from "express";
import dotenv from "dotenv"
const app=express();

dotenv.config();
app.get("/mohit",(req,res)=>{
    res.send("this is mohit gupta server");
})
const port=process.env.PORT || 5000;
app.listen(port,(req,res)=>{
    console.log(`serve at http://localhost:${port}`);
})