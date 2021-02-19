const express = require('express');
const router = express.Router();
const Project = require('../models/Project');

router.post('/', async(req, res) => {
    const project = new Project({
        title: req.body.title,
        description: req.body.description,
        reporter: req.body.reporter
    });

    try {
        const savedProject = await project.save();
        res.json(savedProject);
    } catch (err) {
        res.json({ err_message: err });
    }

});

router.get('/', async(req, res) => {
    try {
        const project = await Project.find().limit(100);
        res.json(project);
    } catch (err) {
        res.json({ err_message: err });
    }
});

module.exports = router;