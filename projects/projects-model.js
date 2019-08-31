db = require('../data/db-config.js')

module.exports = {
  getProjects,
  getResources,
  getTasks,
  addProject,
  addResource,
  addTask
}

function getProjects() {
  return db('projects')
}

function getResources() {
  return db('resources')
}

function getTasks() {
  return db('tasks as t')
    .join('projects as p', 'p.id', 't.project_id')
    .select('t.id', 'p.project_name', 'p.project_description', 't.task_name', 't.completed')
}