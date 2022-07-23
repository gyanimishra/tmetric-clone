const { Router}= require("express")
const projectRouter= Router()
const ProjectModel= require("../models/project")

projectRouter.get('/:id', async (req, res)=>{
    const id = req.params.id
    const projects=await ProjectModel.find({profileId:id})
    res.status(200).send(projects)
})

projectRouter.post('/new/:id', async (req, res)=>{
    const id = req.params.id
    const project = await ProjectModel({...req.body,profileId:id})
    console.log(project)
    project.save((err, success)=>{
        if(err){
            return res.status(500).send({ message: "Something went wrong try again" })
        }
        res.status(201).send(success)
    })
})
module.exports =projectRouter