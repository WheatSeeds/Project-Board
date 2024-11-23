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
  .project {
    color: white;
  }
  .project{
    height: 200px;
    width: 300px;
    background-color: #20212C;
    border-radius: 10px;
  }
  .project > span{
    font-size: 18px;
  }
  .t{
    height: 21px;
    width: 5px;
    background-color: #562CFF;
    border-radius: 100px;
  }
  .project_title{
    display: flex;
    gap: 16px;
  }
</style>