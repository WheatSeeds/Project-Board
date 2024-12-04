<script>
  export default {
    data(){
      return {
        task:{
          title: '',
          description: '',
        },

      }
    },
    props:{
      task: {
        type: Object,
        required: true,
      },
      editedTask: {
        type: Object,
        required: true,
      }
    },
    methods: {
      deleteTask(task){
        this.$emit('deleteTask', task);
      },
      editTask(task){
        this.$emit('editTask', task);
      },
      confirmEdit(){
        this.task.id = Date.now();
        this.$emit('confirmEdit', this.task)
        this.task = {
          title: '',
          description:'',
        }
      }

    }
  }
</script>

<template>
  <div class="task" v-if="!(editedTask == task)">
    <div class="task-title">
      <span class="task-title-content">{{task.title}}</span>
    </div>
    <span class="task-description">{{task.description}}</span>
    <div class="btns">
      <button @click="deleteTask(task)">Удалить</button>
      <button @click="editTask(task)">Редактировать</button>
    </div>
  </div>
  <div class="task-edit" v-else>
    <form @submit.prevent>
      <input class="task-title-edit" v-model="task.title" placeholder="Название">
      <input class="task-description-edit" v-model="task.description" placeholder="Описание">
      <button id="add_task_btn" @click="confirmEdit">Done</button>
    </form>
  </div>
</template>

<style>
  .task{
    display: flex;
    flex-direction: column;
  }
  .task{
    background-color: #20212C;
    width: 790px;
    height: 135px;
    border-radius: 16px;
    color: white;
  }
  .task-title, .task-description{
    font-family: 'Montserrat', sans-serif;
    color: gray;
  }
  .task-title{
    color: #D3D3D6;
    font-weight: 600;
    font-size: 18px;
  }
  .task-description{
    font-weight: 400;
    font-size: 16px;
  }
</style>