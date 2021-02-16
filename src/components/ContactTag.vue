<template>
  <div class="tag">
    <button class="button mb-2 mr-2 btn" :style="{color: color, background: backgroundColor }">
      {{name}}
    </button>
  </div>
</template>

<script>
export default {
  name: "ContactTag",
  props: {
    name: String,
    color: String,
    backgroundColor: String
  }
}
</script>

<style scoped>
.tag {
  display: inline;
  width: 10px;
}
.button {
  font-size: 10px;
}
</style>