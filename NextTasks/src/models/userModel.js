const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    username:{
        type:String,
        required:[true,"Username should not be empty"]
    },
    email:{
        type:String,
        unique:true,
        retquired:[true,"User must have an email address"]
    },
    password:{
        type:String,
        required:[true,"Please enter the password"]
    }
})

const User = mongoose.models.users || mongoose.model("users",userSchema)

export default User;