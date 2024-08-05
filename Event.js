const mongoose=require('mongoose')
const eventSchema=new mongoose.Schema({
    title:{
        type:String,
        require:true,
    },
    date:{
        type:String,
        required:true
    },
    time:{
        type:String
    },
    location:{
        type:String
    },
    description:{
        type:String
    },
    isDeleted:{
        type:Boolean,
        default:false
    }
})
module.exports=mongoose.model('Event',eventSchema)