<script>
  import ProjectsList from "../components/ProjectsList.vue";
  import Header from "../components/Header.vue"
  import FilterSelectorUI from "../components/UI/FilterSelectorUI.vue";
  import SearchBarUI from "../components/UI/SearchBarUI.vue";
  import ButtonUI from "../components/UI/ButtonUI.vue";
  export default {
    components: {ButtonUI, SearchBarUI, FilterSelectorUI, ProjectsList, Header},
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
          },{
            title: 'project_2',
            tasks: [
              {id: 4, title: "Название 1 1", description: "Описание 1 1"},
              {id: 5, title: "Название 2 2", description: "Описание 2 2"},
              {id: 6, title: "Название 3 3", description: "Описание 3 3"},
            ],
          },{
            title: 'project_2',
            tasks: [
              {id: 4, title: "Название 1 1", description: "Описание 1 1"},
              {id: 5, title: "Название 2 2", description: "Описание 2 2"},
              {id: 6, title: "Название 3 3", description: "Описание 3 3"},
            ],
          }
        ],
        projectsSortOptions: [
          {value: 'title', name: 'Name'},
          {value: 'description', name: 'Description'},
          {value: 'date', name: 'Date'},
        ],
        selectedSort: '',
        sortedTasks: [],
      }
    },
    methods: {
      addProject(){
        const newTask = {id: Date.now(), title: ''};
        this.tasks.unshift(newTask);
        this.editedTask = newTask;
      },
    }
  }
</script>

<template>
  <Header></Header>
  <div id="projects_page">
    <nav class="navbar">
      <button-u-i class='new-task-btn' @click="addProject">New Project</button-u-i>
      <filter-selector-u-i v-model="selectedSort" :options="projectsSortOptions"></filter-selector-u-i>
      <search-bar-u-i></search-bar-u-i>
    </nav>
    <projects-list :projects="projects"/>
  </div>
</template>

<style>
#projects_page {
  display: flex;
  padding-top: 50px;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
</style>