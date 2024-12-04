<script setup>

</script>

<template>
  <button>
    <slot></slot>
  </button>
</template>

<style scoped>
button{
  background-color: #FFFFFF;
  border: none;
  border-radius: 18px;
  width: 136px;
  height: 36px;
  cursor: pointer;

  font-size: 16px;
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
}
</style>