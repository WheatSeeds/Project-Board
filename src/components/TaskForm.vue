<script>
  export default {
    data(){
      return {
        task:{
          title: '',
          description: '',
          edit: false,
        }
      }
    },
    methods:{
      confirmEdit(){
        this.$emit('confirmEdit')
      }
    }
  }
</script>

<template>
  <div class="task edit">
    <form @submit.prevent>
      <input v-model="task.title" placeholder="Название">
      <input v-model="task.description" placeholder="Описание">
      <button id="add_task_btn" @click="confirmEdit">Done</button>
    </form>
  </div>
  
</template>

<style scoped>
</style>