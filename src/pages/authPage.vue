<script>
  export default {
    data(){
      return{
        isLogin: false,
      };
    },
    methods: {
      changeForm(){
        this.isLogin = !this.isLogin;
      }
    }
  }
</script>

<template>
  <div id="auth-page">
    <div id="auth-page-content">
      <span v-if="isLogin" class="auth-page-title">Login to your account and discover a world of seamless task management</span>
      <span v-else class="auth-page-title">Create your account and unlock a world of seamless task management</span>
      <form id="auth-form">
        <div class="auth-input-field">
          <label for="email">Email</label>
          <input type="email" required>
        </div>
        <div class="auth-input-field">
          <label for="password">Password</label>
          <input type="password" required>
        </div>
        <div v-if="!isLogin" class="auth-input-field">
          <label for="password">Confirm Password</label>
          <input type="password" required>
        </div>
        <button v-if="isLogin" id="submit-btn" type="submit">Log in</button>
        <button v-else id="submit-btn" type="submit">Register</button>
      </form>
      <div v-if="isLogin" class="auth-form-field">
        <span class="auth-form-label">Don't have an account? </span>
        <button class="auth-switch-bth" @click="changeForm">Register</button>
      </div>
      <div v-else class="auth-form-field">
        <span class="auth-form-label">Do you already have an account? </span>
        <button class="auth-switch-bth" @click="changeForm">Log in</button>
      </div>

    </div>
  </div>
</template>

<style scoped>
  .auth-switch-bth{
    background-color: rgb(0,0,0,0);
    color: #255ac6;
    border: none;
    font-size: 16px;
    font-family: "Poppins", sans-serif;
  }
  .auth-input-field{
    display: flex;
    flex-direction: column;
  }
  .auth-page-title{
    font-family: "Poppins", sans-serif;
    font-size: 26px;
    font-weight: 500;
  }
  #auth-page{
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    height: 100vh;
  }
  .auth-input-field{
    width: 400px;
    height: 50px;
    background: #272835;
    border-radius: 8px;
  }
  #auth-page-content{
    width: 400px;
    gap: 16px;
  }
  .auth-input-field > input{
    border: none;
    background: rgb(0,0,0, 0);
    height: 100%;
    padding: 0 8px;
    color: white;
    font-size: 16px;
    font-family: "Poppins", sans-serif;
  }
  #auth-page-content, #auth-form{
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  #auth-form{
    gap: 16px;
  }
  .auth-input-field, #submit-btn{
    font-family: "Poppins", sans-serif;
    font-size: 16px;
    font-weight: 400;
  }
  .auth-input-field > label{
    font-size: 14px;
    padding: 0 8px;
  }

  #submit-btn{
    width: 400px;
    height: 44px;
    background: black;
    border: none;
    border-radius: 8px;
    color: white;
  }
  .auth-page-title{
    text-align: center;
  }
  .auth-form-label{
    font-family: "Poppins", sans-serif;
    font-size: 16px;
  }
</style>