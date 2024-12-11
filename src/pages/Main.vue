<script>
import Header from '../components/Header.vue'
export default {
  components: {Header}
}
</script>/
<template>
  <Header></Header>
  <div id="main-page">
    <div id="main-page-content">
      <div class="first-frame">
        <div class="main-page-title-content">
          <span id="main-page-first-title">Service for managing projects and tasks</span>
          <span id="main-page-second-title">Intuitive and flexible platform for managing your projects, tasks, and subtasks. Whether you’re working on personal projects or handling team tasks, we’re here to help you organize every step with maximum efficiency.</span>
          <div id="main-page-title-buttons">
            <button class="main-page-title-btn">Get started</button>
          </div>
        </div>
      </div>
      <img class="bg" src="../../public/images/background/robots_bg.png">

    </div>
  </div>

</template>

<style scoped>
.bg{
  position: absolute;
  width: 100%;
  top: 70vh;
}
  #main-page{
    padding-top: 50px;
  }
  .first-frame{
    height: calc(100vh - 50px);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .main-page-title-content{

  }
  #main-page-title-buttons {
    display: flex;
    gap: 16px;
  }
  .main-page-title-content {
    text-align: center;
    width: 600px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 32px;
  }

  #main-page-first-title {
    color: white;
    font-size: 55px;
    font-family: "Poppins", sans-serif;
    font-weight: 500;
    background-image: linear-gradient(90deg, #fd48f8, #6929ed);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  #main-page-second-title {
    color: white;
    font-family: "Poppins", sans-serif;
    font-size: 16px;
    font-weight: 200;
  }
  .main-page-title-btn {
    height: 50px;
    width: 170px;
    background-color: black;
    color: white;
    font-family: "Poppins", sans-serif;
    font-size: 20px;
    font-weight: 200;
    border-radius: 16px;
    border: 1px solid #fd48f8;
  }
</style>