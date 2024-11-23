<script>
import TasksList from "../components/TasksList.vue";

export default {
  components: {TasksList},
  data(){
    return{
      tasks: [
        {id: 1, title: "Название 1", description: "Описание 1"},
        {id: 2, title: "Название 2", description: "Описание 2"},
        {id: 3, title: "Название 3", description: "Описание 3"},
      ],
      editedTask: null,
    }
  },
  methods: {
    addTask(){
      const newTask = {id: Date.now(), title: '', description: ''};
      this.tasks.unshift(newTask);
      this.editedTask = newTask;
    },
    deleteTask(task){
      this.tasks.splice(this.tasks.indexOf(task), 1);
    },
    editTask(task){
      this.editedTask = task;
    },
    confirmEdit(task){
      this.editedTask = null;
    },
    changeOptions(event){

    }
  }
}
</script>

<template>
  <div class="task-page">
    <nav class="navbar">
      <button class='new-task-btn' @click="addTask">New Task</button>
      <select class='filter-select' @change="changeOptions">
        <option disabled value="" selected>Sort by</option>
        <option>Name</option>
        <option>Date</option>
      </select>
      <input class='search-bar' type="text" placeholder="Search task">
    </nav>
    <tasks-list
        :tasks="tasks"
        :editedTask="editedTask"
        @deleteTask="deleteTask"
        @editTask="editTask"
        @confirmEdit="confirmEdit"
    />
  </div>
</template>

<style>
  .navbar{
    display: flex;
    gap: 16px;
  }
  .task-page{
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .new-task-btn{
    background-color: #FFFFFF;
    border: none;
    border-radius: 18px;
    width: 136px;
    height: 36px;
    font-size: 16px;
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
  }
  .filter-select{
    color: #D3D3D6;
    border-radius: 18px;
    border: 3px solid #4A4B52;
    background-color: #17181F;
    width: 116px;
    height: 36px;
    font-size: 16px;
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
    text-align: center;
    box-sizing: border-box;
  }
  body{
    background-color: #17181F;
  }
  .search-bar{
    width: 506px;
    height: 36px;
    border-radius: 18px;
    border: 3px solid #4A4B52;
    background-color: #17181F;
    box-sizing: border-box;
  }
</style>