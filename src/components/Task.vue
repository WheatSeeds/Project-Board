<script>
  import TaskForm from "../components/TaskForm.vue";
  export default {
    components: {TaskForm},
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
      confirmEdit(task){
        this.$emit('confirmEdit', task)
      }

    }
  }
</script>

<template>
  <div class="task" v-if="!(editedTask == task)">
    <span>{{task.title}}</span>
    <span>{{task.description}}</span>
    <div class="btns">
      <button @click="deleteTask(task)">Удалить</button>
      <button @click="editTask(task)">Редактировать</button>
    </div>
  </div>
  <div class="task-edit" v-else>
    <task-form @confirmEdit="$emit('confirmEdit', task)"></task-form>
  </div>
</template>

<style>
.task{
  background-color: #20212C;
  width: 790px;
  height: 135px;
  margin-top: 15px;
  color: white;

  display: flex;
  flex-direction: column;
}
</style>