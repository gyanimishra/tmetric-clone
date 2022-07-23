const { Router } = require("express")
const UserModel = require("../models/user")
const authRouter = Router()


authRouter.post('/signup', async (req, res) => {
    const user = await UserModel(req.body)
    user.save((err, success) => {
        if (err) {
           return res.status(500).send({ message: "Something went wrong try again" })
        }
        res.status(201).send({ message: "Congratulations" })
    })
})

authRouter.post('/signin', async (req, res) => {
    const {email,password}= req.body
    const user = await UserModel.find({email,password})
    if (user.length > 0) {
        let { name, email, _id } = user[0]
       return res.send({ name, email, _id })
    }
    res.send({ message: "Wrong credentials" })
    // res.send(user)
})

module.exports = authRouter