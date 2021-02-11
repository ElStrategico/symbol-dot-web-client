<template>
  <div class="container registration-container">
    <RegistrationForm @registered="redirect" />
  </div>
</template>

<script>
import RegistrationForm from "@/components/RegistrationForm";

export default {
  name: 'Registration',
  components: {
    RegistrationForm
  },
  methods: {
    redirect() {
      this.$router.push('/login');
    }
  }
}
</script>