<script>
  export default {
    props: {
      modelValue: {
        type: String,
      }
    },
    methods: {
      updateValue(event) {
        this.$emit("update:modelValue", event.target.value);
      },
    },
  }
</script>

<template>
  <input class='search-bar' type="text" placeholder="Search" :value="modelValue || ''" @input="updateValue">
</template>

<style scoped>
.search-bar{
  width: 506px;
  height: 36px;
  border-radius: 18px;
  border: 3px solid #4A4B52;
  background-color: #17181F;
  box-sizing: border-box;
  font-size: 16px;
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  padding-left: 16px;
  color: white;
}

</style>