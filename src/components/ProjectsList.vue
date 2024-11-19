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

</style>