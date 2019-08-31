const express = require('express');

const Projects = require('./recipes/project-model.js');

const server = express();

server.use(express.json());

server.get('/api/projects', (req, res) => {
  const { id } = req.params

  Projects.getProject()
    .then(projects => {
      res.json(projects)
    })
    .catch(err => {
      res.status(500).json({ errorMessage: `${err}` })
    })
})

server.get('/api/projects/resources', (req, res) => {
  const { id } = req.params

  Projects.getResources()
    .then(resources => {
      res.json(resources)
    })
    .catch(err => {
      res.status(500).json({ errorMessage: `${err}` })
    })
})

server.get('/api/projects/tasks', (req, res) => {
  const { id } = req.params

  Projects.getTasks()
    .then(tasks => {
      res.json(tasks)
    })
    .catch(err => {
      res.status(500).json({ errorMessage: `${err}` })
    })
})

module.exports = server