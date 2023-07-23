const mongoose = require('mongoose')

const connect = () =>{
    mongoose.connect(process.env.MONGO_URI)
    const connection = mongoose.connection;
    connection.on("connected",()=>{
        console.log("Connected successfully")
    })
    connection.on("error",()=>{
        console.log("some error occured while connecting with the database...")
    })
}

export default connect;