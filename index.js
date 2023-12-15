const express=require("express");
require("dotenv").config();
const app=express();


app.get("/mohit",(req,res)=>{
    res.send("this is mohit gupta server");
})
const port=process.env.PORT || 5000;
app.listen(port,(req,res)=>{
    console.log(`serve at http://localhost:${port}`);
})