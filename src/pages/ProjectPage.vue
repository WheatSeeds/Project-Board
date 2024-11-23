<script>
  import ProjectsList from "../components/ProjectsList.vue";

  export default {
    components: {ProjectsList},
    data() {
      return {
        projects: [
          {
            title: 'project_1',
            tasks: [
              {id: 1, title: "Название 1", description: "Описание 1"},
              {id: 2, title: "Название 2", description: "Описание 2"},
              {id: 3, title: "Название 3", description: "Описание 3"},
            ],
          },
          {
            title: 'project_2',
            tasks: [
              {id: 4, title: "Название 1 1", description: "Описание 1 1"},
              {id: 5, title: "Название 2 2", description: "Описание 2 2"},
              {id: 6, title: "Название 3 3", description: "Описание 3 3"},
            ],
          },
          {
            title: 'project_2',
            tasks: [
              {id: 4, title: "Название 1 1", description: "Описание 1 1"},
              {id: 5, title: "Название 2 2", description: "Описание 2 2"},
              {id: 6, title: "Название 3 3", description: "Описание 3 3"},
            ],
          },
          {
            title: 'project_2',
            tasks: [
              {id: 4, title: "Название 1 1", description: "Описание 1 1"},
              {id: 5, title: "Название 2 2", description: "Описание 2 2"},
              {id: 6, title: "Название 3 3", description: "Описание 3 3"},
            ],
          },
          {
            title: 'project_2',
            tasks: [
              {id: 4, title: "Название 1 1", description: "Описание 1 1"},
              {id: 5, title: "Название 2 2", description: "Описание 2 2"},
              {id: 6, title: "Название 3 3", description: "Описание 3 3"},
            ],
          },
          {
            title: 'project_2',
            tasks: [
              {id: 4, title: "Название 1 1", description: "Описание 1 1"},
              {id: 5, title: "Название 2 2", description: "Описание 2 2"},
              {id: 6, title: "Название 3 3", description: "Описание 3 3"},
            ],
          }
        ],
      }
    },
    methods: {

    }
  }
</script>

<template>
  <span>My projects</span>
  <projects-list :projects="projects"/>
</template>

<style>
</style>