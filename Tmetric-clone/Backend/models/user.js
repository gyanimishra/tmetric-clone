const mongoose = require("mongoose")

const schema = mongoose.Schema({
    name: { type: String, require: true },
    email: { type: String, require: true },
    password: { type: String, require: true }
})

const UserModel= mongoose.model("user",schema)

module.exports= UserModel