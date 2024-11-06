<script>
  import TaskForm from "./components/TaskForm.vue";
  import TasksList from "./components/TasksList.vue";

  export default {
    components: {TasksList},
    data(){
      return{
        tasks: [
          {id: 1, title: "Название 1", description: "Описание 1", edit: false},
          {id: 2, title: "Название 2", description: "Описание 2", edit: false},
          {id: 3, title: "Название 3", description: "Описание 3", edit: false},
        ],
        editedTask: '',
      }
    },
    methods: {
      deleteTask(task){
        this.tasks.splice(this.tasks.indexOf(task), 1);
      },
      editTask(task){
        this.editedTask = task;
      },
      confirmEdit(task){
        this.editedTask = '';
      }
    }
  }
</script>

<template>
  <button @click="addTask">New Task</button>
  <tasks-list
      :tasks="tasks"
      :editedTask="editedTask"
      @deleteTask="deleteTask"
      @editTask="editTask"
      @confirmEdit="confirmEdit"
  />
</template>

<style scoped>
</style>