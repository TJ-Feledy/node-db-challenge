Tables: Projects, Resources, Tasks

Relationships:
  projects (many)<==>(many) resources
  projects (one)<==>(many) tasks

Schema:
- projects:
  - id
  - project_name: Required
  - description
  - completed: true/false (default = false)

- resources: (person, place, tool, ect...)
  - id
  - resource_name: Required
  - description

- tasks:
  - id
  - project_id
  - task: Required
  - notes
  - completed: true/false (default = false)

- project_resources:
  - project_id
  - resource_id