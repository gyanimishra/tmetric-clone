const { Router } = require("express")
const UserModel = require("../models/user")
const authRouter = Router()




authRouter.post('/signup', async (req, res) => {
    const { email, password, name } = req.body

    const varify = await UserModel.find({ email })
    if (varify.length > 0) {
        return res.status(300).send({ message: "User already exist" })
    }
    const user = await UserModel({ email, password, name })
    user.save((err, success) => {
        if (err) {
            return res.status(500).send({ message: err.message })
        }
        res.status(201).send({ message: "Congratulations" })
    })



})

authRouter.post('/signin', async (req, res) => {
    const { email, password } = req.body
    const user = await UserModel.find({ email, password })
    if (user.length > 0) {
        let { name, email, _id } = user[0]
        return res.send({ name, email, _id })
    }
    res.send({ message: "Wrong credentials" })

})

module.exports = authRouter