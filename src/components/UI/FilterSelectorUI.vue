<template>
  <select class="filter" :value="modelValue" @change="changeOption">
    <option disabled value="">Sort by</option>
    <option
        v-for="option in options"
        :key="option.value"
        :value="option.value"
    >
      {{ option.name }}
    </option>
  </select>
</template>

<script>
export default {
  props: {
    modelValue: {
      type: String
    },
    options: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    changeOption(event) {
      this.$emit('update:modelValue', event.target.value);
    }
  }
}
</script>

<style scoped>
  .filter{
    color: #D3D3D6;
    border-radius: 18px;
    border: 3px solid #4A4B52;
    background-color: #17181F;
    width: 116px;
    height: 36px;
    text-align: center;
    box-sizing: border-box;
  }
</style>