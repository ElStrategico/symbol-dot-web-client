<template>
  <div class="container">
    <LoginForm @authorized="redirect" />
  </div>
</template>

<script>
import LoginForm from '@/components/LoginForm';

export default {
  name: 'Login',
  components: {
    LoginForm
  },
  methods: {
    redirect() {
      this.$router.push('/profile');
    }
  }
}
</script>