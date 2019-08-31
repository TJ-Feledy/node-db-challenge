Tables: Projects, Resources, Tasks

Relationships:
  projects (many)<==>(many) resources
  projects (one)<==>(many) tasks

Schema:
- projects:
  - id
  - project_name: Required
  - project_description
  - completed: true/false (default = false)

- resources: (person, place, tool, ect...)
  - id
  - resource_name: Required
  - resource_description

- tasks:
  - id
  - project_id
  - task_name: Required
  - task_notes
  - completed: true/false (default = false)

- project_resources:
  - project_id
  - resource_id