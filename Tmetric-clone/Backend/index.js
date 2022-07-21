const express = require("express")
const cors = require('cors')
const connection = require("./database")
const ProjectModel = require("./models/project")


const app = express()

app.use(cors())
app.use(express.json())


// app.get("/", async (req, res) => {
//     let project = await ProjectModel.find({name:"GAjraj"})
//     res.send(project)
// })

// app.post('/', async (req, res) => {
//     console.log(req.body)
//     const project = await new ProjectModel(req.body)
//     project.save()
//     res.send("saved")
// })

app.listen(8080, async () => {
    try {
        await connection
        console.log("Connected to server")
    } catch {
        console.log("Refused to connect")
    }
    console.log("Server is available on port no. 8080")
})