<template>
  <div class="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {

}
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');
  *{
    margin: 0;
    padding: 0;
    list-style-type: none;
  }
  body{
    background: rgb(23,24,31);
    background: -moz-linear-gradient(270deg, rgba(23,24,31,1) 42%, rgba(0,0,0,1) 100%);
    background: -webkit-linear-gradient(270deg, rgba(23,24,31,1) 42%, rgba(0,0,0,1) 100%);
    background: linear-gradient(270deg, rgba(23,24,31,1) 42%, rgba(0,0,0,1) 100%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#17181f",endColorstr="#000000",GradientType=1);
  }
  a
  { text-decoration: none;
  }
  a,a:hover,a:visited,a:active {
    color: white;
  }
  :active, :hover, :focus {
    outline: 0;
    outline-offset: 0;
  }

</style>