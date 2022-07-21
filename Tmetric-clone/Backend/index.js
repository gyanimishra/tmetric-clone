const express = require("express")
const cors = require('cors')
const connection = require("./database")


const app = express()

app.use(cors())
app.use(express.json())


app.get("/",(req,res)=>{
res.send("hello")
})

app.listen(8080, async() => {
    try {
        await connection
        console.log("Connected to server")
    } catch {
        console.log("Refused to connect")
    }
    console.log("Server is available on port no. 8080")
})