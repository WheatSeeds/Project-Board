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
      <span>{{project.title}}</span>
    </div>

  </div>
</template>

<style>
  .project{
    width: 300px;
    height: 200px;
    background-color: white;
  }
</style>