<script>
  export default {
    props: {
      tasks: {
        type: Array,
        required: true
      }
    }
  }
</script>

<template>
  <div id="tasks_list">
    <div class="task" v-for="task in tasks">
      <span>{{task.title}}</span>
      <span>{{task.description}}</span>
    </div>
  </div>
</template>

<style scoped>
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