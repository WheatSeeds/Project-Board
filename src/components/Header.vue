<script>

</script>

<template>
  <header>
    <div id="header-content">
      <div id="header-logo-container">
        <img id="header-logo" src="../../public/images/icons/img.png" alt="logo" />
        <span id="header-logo-title">Plantera</span>
      </div>
      <ul id="header-navbar">
        <router-link to="/projects" id="header-navbar-item">Projects</router-link>
        <router-link to="/tasks" id="header-navbar-item">Contact</router-link>
        <li id="header-navbar-item">Log in</li>
      </ul>
    </div>
  </header>
</template>

<style>
  #header-logo-container{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
  }
  #header-logo{
    height: 30px;
    filter: invert(1);
  }
  header{
    width: 100%;
    height: 50px;
    align-items: center;
    background-color: #17181F;
    display: flex;
    justify-content: center;
    color: white;
    border-bottom: 1px solid #4A4B52;
    position: fixed;
  }
  #header-content{
    width: 1024px;
    display: flex;
    justify-content: space-between;

  }
  #header-navbar{
    display: flex;
    gap: 32px;
    justify-content: center;
    align-items: center;
  }
  #header-navbar-item, #header-logo-title{
    font-size: 16px;
    font-family: "Inter", sans-serif;
    font-weight: 500;
  }
</style>