const express = require('express'); 
const mongooseConnect=require("./mongooseConnect.js")
const Eventschema = require("./eventSchema")

mongooseConnect.connectMongoose()

const app=express(); 
app.use(express.json())

app.get("", async(req,res)=>{
    console.log("req")
    res.send("Hello Philip")
})

app.get("/getentries", async(req,res)=>{
    console.log("getentries")
    let result = await Eventschema.find()
    res.send(result)
})

app.post("", async (req,res) =>{
    console.log("Post eventSchema", req)
    let result = await Eventschema.create(req.body)
    res.send("succesfully stored", result)
})

app.delete("", async (req,res) =>{
    console.log("Delete Schema", req.body)
    let result = await Eventschema.findByIdAndDelete(req.body)
    res.send("succesfully deleted", result)
})

app.listen("9002",()=> {
    console.log("Server up on port 9002")
})