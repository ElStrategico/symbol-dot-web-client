<template>
  <div>
    <div class="main-card mb-3 card" style="margin-top: 100px">
      <div class="card-body">
        <h5 class="card-title">Форма авторизации</h5>
        <form v-on:submit.prevent="submit">
          <div class="position-relative form-group">
            <input
              name="email"
              placeholder="Почта"
              type="text"
              class="form-control"
              v-model="login"
            />
          </div>
          <div class="position-relative form-group">
            <input
              name="password"
              placeholder="Пароль"
              type="password"
              class="form-control"
              v-model="password"
            />
          </div>
          <div class="position-relative form-group" v-if="loader">
            <div class="lds-dual-ring"></div>
          </div>
          <button class="mt-2 btn btn-primary">Авторизация</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginForm",
  data() {
    return {
      login: "",
      password: "",
      loader: false
    };
  },
  methods: {
    submit() {
      this.loader = true;
      this.$store.dispatch('login', {login, password});
    },
  },
};
</script>
