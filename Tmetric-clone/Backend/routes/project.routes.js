const { Router } = require("express")
const projectRouter = Router()
const ProjectModel = require("../models/project")

projectRouter.get('/:id', async (req, res) => {
    const { status, _id } = req.query

    const id = req.params.id
    if (status) {
        const projects = await ProjectModel.find({ profileId: id, status, })
        res.status(200).send(projects)
    } else if (_id) {
        const projects = await ProjectModel.find({ profileId: id, _id, })
        res.status(200).send(projects)
    }

    else {
        const projects = await ProjectModel.find({ profileId: id })
        res.status(200).send(projects)
    }

})

projectRouter.post('/new/:id', async (req, res) => {
    const id = req.params.id
    const project = await ProjectModel({ ...req.body, profileId: id })
    project.save((err, success) => {
        if (err) {
            return res.status(500).send({ message: "Something went wrong try again not able to add" })
        }
        res.status(201).send(success)
    })
})


projectRouter.delete('/:projectId', async (req, res) => {
    const projectId = req.params.projectId;
    await ProjectModel.deleteOne({ _id: projectId })
    res.send({ message: "Project deleted successfully" })
})

projectRouter.patch('/:projectId', async (req, res) => {
    const projectId = req.params.projectId;
    const project = await ProjectModel.findByIdAndUpdate(projectId, req.body)
    const project1 = await ProjectModel.findById(projectId)
    res.send(project1)
})

module.exports = projectRouter