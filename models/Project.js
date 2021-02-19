const mongoose = require('mongoose');

const ProjectSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    reporter: {
        type: String,
        required: true
    },
    created_date: {
        type: Date,
        default: Date.now
    },
});

module.exports = mongoose.model('Projects', ProjectSchema);