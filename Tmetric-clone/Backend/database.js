const mongoose =require("mongoose")
require('dotenv').config()
const url=process.env.MONGODB_URL
const connection= mongoose.connect(url)
module.exports=connection