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
    methods:{
      addTask(){
        this.task.id = Date.now();
        this.$emit('addTask', this.task);
        this.task = {
          title: '',
          description: '',
        }
      }
    }
  }
</script>

<template>
  <form @submit.prevent>
    <input v-model="task.title" placeholder="Название">
    <input v-model="task.description" placeholder="Описание">
    <button id="add_task_btn" @click="addTask">Новая задача</button>
  </form>
</template>

<style scoped>

</style>