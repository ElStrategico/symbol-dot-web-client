<template>
  <div class="main-card mb-3 card" style="margin-top: 100px">
    <div class="card-body">
      <h5 class="card-title">Форма регистрации</h5>
      <form @submit.prevent="submit">
        <div class="position-relative form-group">
          <input
            name="name"
            placeholder="Придумайте никнейм"
            type="text"
            class="form-control"
            v-model="name"
          />
        </div>
        <div class="position-relative form-group">
          <input
            name="email"
            placeholder="Введитие вашу почту"
            type="text"
            class="form-control"
            v-model="email"
          />
        </div>
        <div class="position-relative form-group">
          <input
            name="password"
            placeholder="Придумайте пароль"
            type="password"
            class="form-control"
            v-model="password"
          />
        </div>
        <div class="position-relative form-group">
          <input
            name="password_confirmation"
            placeholder="Повторите пароль"
            type="password"
            class="form-control"
            v-model="password_confirmation"
          />
        </div>
        <div class="list-group-item-danger list-group-item" v-if="firstError">
          {{firstError}}
        </div>
        <button class="mt-2 btn btn-primary">Регистрация</button>
      </form>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import statuses from '@/http-common/statuses.js';

export default {
  name: "RegistrationForm",
  data() {
    return {
      name: null,
      email: null,
      password: null,
      password_confirmation: null,
    };
  },
  computed: mapGetters(['firstError']),
  methods: {
    submit() {
      let data = this.$data;

      this.$store.commit('setCreatableUser', data);
      this.$store.dispatch('createUser').then(response => {
        if(response.status === statuses.CREATED)
        {
          this.$router.push('/login');
        }
      });
    }
  },
};
</script>
