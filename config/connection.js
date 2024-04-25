const mongoose=require('mongoose');

require("dotenv").config();

const connectWithdb =()=>{

    mongoose.connect(process.env.DATABASE_URL,{
       useNewUrlParser:true,
         useUnifiedTopology:true
    })
    .then(()=>{console.log("Connection is successfull")})
    .catch((error)=>{
        console.log("connection fail ");
        console.error(error.message);
        
        process.exit(1);
    });
};

module.exports=connectWithdb;