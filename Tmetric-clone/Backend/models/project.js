const mongoose = require("mongoose")
const schema = mongoose.Schema({
    status: { type: Boolean, default: false },
    name: { type: String, required: true },
    code: { type: String, required: true },
    notes: { type: String, required: false },
    profileId: { type: String, required: true }
})

const ProjectModel = mongoose.model("project", schema)

module.exports = ProjectModel