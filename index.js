const express=require('express');
const app=express();


require("dotenv").config();
const PORT = process.env.PORT || 4000;

//moddleware
app.use(express.json());

// import Api Route 
const blogRoutes = require("./routes/blog");

// mount Api Rout Path 
app.use("/api/v1",blogRoutes);


const connectWithdb = require("./config/connection");
connectWithdb();

app.listen(PORT, ()=>{
    console.log(`App is started ${PORT}`);
})

 app.get("/",(req,res)=>{
    res.send(`<h2>THis is My home page</h2>`);
 })


