<script>
  export default {
    props: {
      project:{
        type: Object,
        required: true
      }
    }
  }
</script>

<template>
  <div class="project">
    <span>{{project.title}}</span>
  </div>
</template>

<style scoped>

</style>