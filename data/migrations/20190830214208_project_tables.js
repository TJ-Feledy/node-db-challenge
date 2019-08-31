
exports.up = function(knex) {
  return knex.schema.createTable('projects', tbl => {
    tbl.increments()
    tbl.string('project_name', 128).unique().notNullable()
    tbl.string('project_Description')
    tbl.boolean('completed').defaultTo(false)
  })
  .createTable('resources', tbl => {
    tbl.increments()
    tbl.string('resource_name', 128).unique().notNullable()
    tbl.string('resource_description')
  })
  .createTable('tasks', tbl => {
    tbl.increments()
    tbl.integer('project_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('projects')
    tbl.string('task_name').notNullable()
    tbl.string('task_notes')
    tbl.boolean('completed').defaultTo(false)
  })
  .createTable('project_resources', tbl => {
    tbl.integer('project_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('projects')
    tbl.integer('resource_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('resources')
    tbl.primary('project_id', 'resource_id')
  })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('project_resources')
    .dropTableIfExists('tasks')
    .dropTableIfExists('resources')
    .dropTableIfExists('projects')
};
