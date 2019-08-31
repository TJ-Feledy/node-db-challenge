const express = require('express');

const Projects = require('./projects/projects-model.js');

const server = express();

server.use(express.json());

server.get('/api/projects', (req, res) => {

  Projects.getProjects()
    .then(projects => {
      projects.forEach(project => {
        if(project.completed === 0) {
          project.completed = false
        }
        else if (project.completed === 1) {
          project.completed = true
        }
      })
      res.json(projects)
    })
    .catch(err => {
      res.status(500).json({ errorMessage: `${err}` })
    })
})

server.post('/api/projects', (req, res) => {
  const projectData = req.body

  Projects.addProject(projectData)
    .then(newProject => {
      res.status(201).json(newProject)
    })
    .catch(err => {
      res.status(500).json({ errorMessage: `${err}` })
    })
})

server.get('/api/projects/resources', (req, res) => {

  Projects.getResources()
    .then(resources => {
      res.json(resources)
    })
    .catch(err => {
      res.status(500).json({ errorMessage: `${err}` })
    })
})

server.post('/api/projects/resources', (req, res) => {
  const resourceData = req.body

  Projects.addResource(resourceData)
    .then(newResource => {
      res.status(201).json(newResource)
    })
    .catch(err => {
      res.status(500).json({ errorMessage: `${err}` })
    })
})

server.get('/api/projects/tasks', (req, res) => {

  Projects.getTasks()
    .then(tasks => {
      tasks.forEach(task => {
        if (task.completed === 0) {
          task.completed = false
        }
        else if (task.completed === 1) {
          task.completed = true
        }
      })
      res.json(tasks)
    })
    .catch(err => {
      res.status(500).json({ errorMessage: `${err}` })
    })
})

server.post('/api/projects/tasks', (req, res) => {
  const taskData = req.body

  Projects.addTask(taskData)
    .then(newTask => {
      res.status(201).json(newTask)
    })
    .catch(err => {
      res.status(500).json({ errorMessage: `${err}` })
    })
})

module.exports = server