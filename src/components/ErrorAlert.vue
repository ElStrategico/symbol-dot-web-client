<template>
  <div>
    <div class="alert alert-danger" role="alert">
      {{message}}
    </div>
  </div>
</template>

<script>
export default {
  name: "ErrorAlert",
  props: {
    message: String
  }
}
</script>

<style scoped>

</style>