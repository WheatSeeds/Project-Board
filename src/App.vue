<script>
  import TaskForm from "./components/TaskForm.vue";
  import TasksList from "./components/TasksList.vue";

  export default {
    components: {TasksList, TaskForm},
    data(){
      return{
        tasks: [
          {id: 1, title: "Название 1", description: "Описание 1"},
          {id: 2, title: "Название 2", description: "Описание 2"},
          {id: 3, title: "Название 3", description: "Описание 3"},
        ],
      }
    },
    methods: {
      addTask(task) {
        this.tasks.push(task);
      }
    }
  }
</script>

<template>
  <task-form @addTask="addTask"/>
  <tasks-list :tasks="tasks"/>
</template>

<style scoped>
</style>