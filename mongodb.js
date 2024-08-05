const {MONGO_URL}=require('../env/env');
const mongoose=require("mongoose");
const connectToDatabase=() => {
    mongoose.connect(MONGO_URL,{});
    mongoose.connection.on("connected",() => {
        console.log("mongodb successfully connected");
    });
};
module.exports={
    connectToDatabase,
}