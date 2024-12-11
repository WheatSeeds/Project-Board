<script setup>
  import { useAuthStore } from '../store'
  import {createRouter as $router} from "vue-router";
  const authStore = useAuthStore()
</script>


<template>
  <header>
    <div id="header-content">
      <router-link to="/" id="header-logo-container">
        <img id="header-logo" src="../../public/images/icons/img.png" alt="logo" />
        <span id="header-logo-title">OPANERA</span>
      </router-link>
      <ul id="header-navbar">
        <router-link v-if="authStore.authenticated" to="/projects" id="header-navbar-item">Projects</router-link>
        <router-link v-else to="/auth" id="header-navbar-item">Projects</router-link>
        <router-link v-if="authStore.authenticated" to="/" id="header-navbar-item">Log out</router-link>
        <router-link v-else to="/auth" id="header-navbar-item">Log in</router-link>
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
    z-index: 2;
    width: 100%;
    height: 50px;
    align-items: center;
    background: rgb(23,24,31);
    background: -moz-linear-gradient(270deg, rgba(23,24,31,1) 42%, rgba(0,0,0,1) 100%);
    background: -webkit-linear-gradient(270deg, rgba(23,24,31,1) 42%, rgba(0,0,0,1) 100%);
    background: linear-gradient(270deg, rgba(23,24,31,1) 42%, rgba(0,0,0,1) 100%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#17181f",endColorstr="#000000",GradientType=1);
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