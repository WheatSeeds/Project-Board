<script>
  export default {
    components: {Task},
    props: {
      tasks: {
        type: Array,
        required: true
      },
      editedTask: {
        type: Object,
        required: true,
      }
    }
  }
  import Task from './Task.vue'
</script>

<template>
  <div id="tasks_list" v-if="tasks.length > 0">
    <task
        v-for="task in tasks"
        :task="task"
        :key="task.id"
        :editedTask="editedTask"
        @deleteTask="$emit('deleteTask', task)"
        @editTask="$emit('editTask', task)"
        @confirmEdit="$emit('confirmEdit', task)"
    />
  </div>
  <span v-else>Список задач пуст</span>
</template>

<style>
  #tasks_list{
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
</style>