<template>
  <div>
    <div class="main-card mb-3 card" style="margin-top: 100px">
      <div class="card-body">
        <h5 class="card-title">Форма авторизации</h5>
        <form @submit.prevent="submit">
          <div class="position-relative form-group">
            <input
              v-model="email"
              name="email"
              placeholder="Почта"
              type="text"
              class="form-control"
            />
          </div>
          <div class="position-relative form-group">
            <input
              v-model="password"
              name="password"
              placeholder="Пароль"
              type="password"
              class="form-control"
            />
          </div>
          <div>
            <ErrorAlert v-if="error" :message="error" />
          </div>
          <div>
            <Loader v-if="loader"/>
          </div>
          <button class="mt-2 btn btn-primary">Авторизация</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import Loader from "./Loader";
import ErrorAlert from "@/components/ErrorAlert";
import ErrorFetcher from "@/helpers/error-fetcher";

export default {
  name: "LoginForm",
  data() {
    return {
      loader: false,
      error: ''
    };
  },
  components: {Loader, ErrorAlert},
  computed: {
    email: {
      get() {
        return this.$store.getters.email;
      },
      set(value) {
        this.$store.commit('setEmail', value);
      }
    },
    password: {
      get() {
        return this.$store.getters.password;
      },
      set(value) {
        this.$store.commit('setPassword', value);
      }
    }
  },
  methods: {
    async submit() {
      this.loader = true;
      this.error = '';

      try {
        await this.$store.dispatch('login');
        this.$emit('authorized');
      } catch(e) {
        this.error = ErrorFetcher.firstError(e.response);
      } finally {
        this.loader = false;
      }
    },
  },
};
</script>
