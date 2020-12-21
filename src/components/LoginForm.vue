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
          <div class="list-group-item-danger list-group-item" v-if="firstAuthError">
            {{firstAuthError}}
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
import { mapGetters } from 'vuex';
import statuses from '@/http-common/statuses.js';

export default {
  name: "LoginForm",
  data() {
    return {
      login: "",
      password: "",
      loader: false
    };
  },
  computed: mapGetters(['firstAuthError']),
  methods: {
    submit() {
      this.loader = true;

      let credential = this.$data;
      this.$store.commit('credential', credential);

      this.$store.dispatch('login').then(response => {
        if(response.status === statuses.OK)
        {
          this.$router.push('/');
        }
      })

      this.loader = false;
    },
  },
};
</script>
