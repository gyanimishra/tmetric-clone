const express = require("express")
const cors = require('cors')
const connection = require("./database")
const authRouter = require("./routes/auth.routes")
const projectRouter = require("./routes/project.routes")

require('dotenv').config()
const PORT = process.env.PORT
const app = express()

app.use(cors())
app.use(express.json())
app.use("/user", authRouter)
app.use("/project", projectRouter)

app.get("/", async (req, res) => {
    res.send("<h1>Welcome by Gajraj Shekhawat</h1>")
})



app.listen(PORT, async () => {
    try {
        await connection
        console.log("Connected to server")
    } catch {
        console.log("Refused to connect")
    }
    console.log("Server is available on port no. 8080")
})