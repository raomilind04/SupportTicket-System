const { urlencoded } = require("express");
const express= require("express"); 
const dotenv= require("dotenv").config(); 
const PORT= process.env.PORT; 
const colors= require("colors"); 

const connectDB= require("./config/db"); 
const {errHandler}= require("./middlewear/errorMiddleWare"); 

connectDB(); 

const app= express(); 
app.use(express.json()); 
app.use(express.urlencoded({extended: false})); 

app.get("/", (req,res)=> {
    res.send("Hello")
})
app.use("/api/users", require("./routes/userRoutes")); 
app.use(errHandler); 

app.listen(PORT, console.log(`Server Started at port ${PORT}`)); 