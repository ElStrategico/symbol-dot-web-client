<template>
  <div class="main-card mb-3 card" style="margin-top: 100px">
    <div class="card-body">
      <h5 class="card-title">Форма регистрации</h5>
      <form @submit.prevent="submit">
        <div class="position-relative form-group">
          <input
            v-model="name"
            name="name"
            placeholder="Придумайте никнейм"
            type="text"
            class="form-control"
          />
        </div>
        <div class="position-relative form-group">
          <input
            v-model="email"
            name="email"
            placeholder="Введитие вашу почту"
            type="text"
            class="form-control"
          />
        </div>
        <div class="position-relative form-group">
          <input
            v-model="password"
            name="password"
            placeholder="Придумайте пароль"
            type="password"
            class="form-control"
          />
        </div>
        <div class="position-relative form-group">
          <input
            v-model="password_confirmation"
            name="password_confirmation"
            placeholder="Повторите пароль"
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
        <button class="mt-2 btn btn-primary">Регистрация</button>
      </form>
    </div>
  </div>
</template>

<script>
import Loader from "@/components/Loader";
import ErrorAlert from "@/components/ErrorAlert";
import ErrorFetcher from "@/helpers/error-fetcher";

export default {
  name: "RegistrationForm",
  data() {
    return {
      loader: false,
      error: ''
    };
  },
  components: {Loader, ErrorAlert},
  computed: {
    name: {
      get() {
        return this.$store.getters.creatableUserName;
      },
      set(value) {
        this.$store.commit('setCreatableName', value);
      }
    },
    email: {
      get() {
        return this.$store.getters.creatableUserEmail;
      },
      set(value) {
        this.$store.commit('setCreatableEmail', value);
      }
    },
    password: {
      get() {
        return this.$store.getters.creatableUserPassword;
      },
      set(value) {
        this.$store.commit('setCreatablePassword', value);
      }
    },
    password_confirmation: {
      get() {
        return this.$store.getters.creatableUserPasswordConfirmation;
      },
      set(value) {
        this.$store.commit('setCreatablePasswordConfirmation', value);
      }
    }
  },
  methods: {
    async submit() {
      this.loader = true;
      try {
        await this.$store.dispatch('registration');
        this.$emit('registered');
      } catch(e) {
        this.error = ErrorFetcher.firstError(e.response);
      } finally {
        this.loader = false;
      }
    }
  },
};
</script>
