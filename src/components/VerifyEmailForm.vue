<template>
  <form @submit.prevent="submit" class="form">
    <span class="text">Подтверждение почты</span>
    <div class="form-group">
      <input v-model="verify_code" type="text" class="form-control">
    </div>
    <div>
      <Loader v-if="loader"/>
    </div>
    <div>
      <ErrorAlert v-if="error" :message="error"/>
    </div>
    <div class="form-group">
      <button type="submit" class="btn btn-primary">Подверить</button>
    </div>
  </form>
</template>

<script>
import Loader from "@/components/Loader";
import ErrorAlert from "@/components/ErrorAlert";

export default {
  name: "VerifyEmailForm",
  data() {
    return {
      error: '',
      loader: false,
      verify: false,
      verify_code: ''
    }
  },
  components: {Loader, ErrorAlert},
  methods: {
    async submit() {
      this.loader = true;

      try {
        await this.$store.dispatch('verifyEmail', this.verify_code);
        this.$emit('verified');
      } catch(e) {
        this.error = e.response.data.message;
      } finally {
        this.loader = false;
      }
    }
  }
}
</script>

<style scoped>
.form {
  background: #f2f2f2;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 10px;
}
</style>