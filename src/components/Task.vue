<script>
  export default {
    data(){
      return {
        task:{
          title: '',
          description: '',
        }
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
.task-title-edit{
  color: white;
  width: 506px;
  height: 36px;
  border-radius: 10px;
  border: 2px solid #4A4B52;
  background-color: #17181F;
  box-sizing: border-box;
  grid-column: 1 / 2;
  grid-row: 1 / 2;
}
.task-description-edit{
  color: white;
  width: 506px;
  height: 51px;
  border-radius: 10px;
  border: 2px solid #4A4B52;
  background-color: #17181F;
  box-sizing: border-box;
  grid-column: 1 / 2;
  grid-row: 2 / 2;

}
.task-edit{
  display: flex;
}
.task-edit > form{
  display: grid;
  grid-template-columns: 506px auto;
  grid-template-rows: auto;
  margin: 16px;
  grid-gap: 16px;
}

.task{
  display: flex;
  flex-direction: column;
}
.task, .task-edit{
  background-color: #20212C;
  width: 790px;
  height: 135px;
  border-radius: 16px;
  color: white;
  margin: 16px 32px;
}
#add_task_btn{
  background-color: #3772FF;
  border: none;
  color: white;
  text-align: center;
  font-family: 'Roboto', sans-serif;
  font-weight: 500;

  border-radius: 18px;
  width: 136px;
  height: 36px;
  font-size: 16px;
}
.task-title{
  background-color: red;
  width: max-content;
  padding: 0 16px;
  border-radius: 18px;
}
</style>