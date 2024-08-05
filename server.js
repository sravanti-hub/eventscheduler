const express=require("express");
const mongoose=require("mongoose");
const cors=require("cors");
const{PORT}=require("./constants/constants");
const{connectToDatabase}=require("./database/mongodb");
const eventRoutes=require('./routes/eventRoutes')
const app=express();
connectToDatabase();
app.use(express.json());
app.use(cors());
app.use('/api',eventRoutes);
app.listen(PORT,() =>
    console.log("my server is runnin on port" +PORT));