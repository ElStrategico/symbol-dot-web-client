<template>
  <div class="container" style="margin-top: 30px;">
    <div style="text-align: left; margin-bottom: 10px;">
      <router-link class="btn btn-primary" to="/contact">Назад</router-link>
    </div>
    <div class="row">
      <div class="col-lg-12">
        <ContactForm />
      </div>
    </div>
  </div>
</template>

<script>
import ContactForm from "@/components/ContactForm";

export default {
  name: "CreateContact",
  components: {ContactForm}
}
</script>

<style scoped>

</style>