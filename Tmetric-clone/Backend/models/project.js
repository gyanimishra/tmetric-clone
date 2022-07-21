const mongoose = require("mongoose")
const schema = mongoose.Schema({
    status: { type: Boolean, default: false },
    name: { type: String, require: true },
    code: { type: Number, require: true },
    notes: { type: Number, require: false },
    profileId:{ type: String, require: true}
})

const ProjectModel = mongoose.model("project", schema)

module.exports = ProjectModel