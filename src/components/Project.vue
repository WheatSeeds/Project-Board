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
    <div class="project_list_image"></div>
    <div class="project_title">
      <div class="t"></div>
      <span>{{project.title}}</span>
    </div>

  </div>
</template>

<style>

</style>