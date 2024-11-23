<script>
import project from "./Project.vue";
  export default {
    components: {project},
    props: {
      projects: {
        type: Array,
        required: true
      }
    }
  }
</script>

<template>
  <div id="project_list">
    <project v-for="project in projects" :project="project"/>
  </div>
</template>

<style>
  #project_list {
    justify-content: center;
    gap: 16px;
    display: grid;
    grid-template-columns: repeat(4, 300px);
  }
</style>