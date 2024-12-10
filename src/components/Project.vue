<script>
  export default {
    props: {
      project:{
        type: Object,
        required: true
      }
    },
    methods:{
      calcScale(){
        project.tasks.forEach(task=>{

        })
      }
    }
  }
</script>

<template>
    <router-link class="project" :to="{ name: 'tasks', params: { projectId: project.id }}">
      <span>{{ project.title }}</span>
      <div class="scale"></div>
    </router-link>
</template>



<style>
  .scale{
    height: 10px;
  }
  .project{
    width: 250px;
    height: 200px;
    background-color: #20212C;
    border-radius: 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .project > span{
    font-family: 'Poppins', sans-serif;
    font-size: 24px;
    font-weight: 550;
  }
</style>