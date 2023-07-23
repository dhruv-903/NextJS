const mongoose = require('mongoose');

const taskSchema = mongoose.Schema({
    user:{
        type:mongoose.Types.ObjectId,
        ref:'User'
    },
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    isComplated:{
        type:Boolean,
        default:false
    },
    date:{
        type:Date,
        default:Date.now
    }
})

const Task =mongoose.models.tasks || mongoose.model("tasks",taskSchema);
export default Task;