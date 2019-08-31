Tables: Projects, Resources, Tasks

Relationships:
  projects (many)<==>(many) resources
  projects (one)<==>(many) tasks

Schema:
- projects:
  - primary key
  - project_name: Required
  - description
  - completed: true/false (default = false)

- resources: (person, place, tool, ect...)
  - primary key
  - resource_name: Required
  - description

- tasks:
  - primary key
  - task: Required
  - notes
  - completed: true/false (default = false)