<template>
  <form @submit.prevent="submit" class="form">
    <h3>Добавление контакта</h3>
    <div class="form-group">
      <label>Фамилия</label>
      <input v-model="creatableContact.last_name" type="text" class="form-control" placeholder="Иванов">
    </div>
    <div class="form-group">
      <label>Имя</label>
      <input v-model="creatableContact.first_name" type="text" class="form-control" placeholder="Иван">
    </div>
    <div class="form-group">
      <label>Отчество</label>
      <input v-model="creatableContact.patronymic" type="text" class="form-control" placeholder="Иванович">
    </div>
    <div class="form-group">
      <label>Почта</label>
      <input v-model="creatableContact.email" type="email" class="form-control" placeholder="example@example.com">
    </div>
    <div class="form-group">
      <label>Телефон</label>
      <VueTelInput v-model="creatableContact.phone" />
      <div style="text-align: left">
        <span v-if="creatableContact.phone">Введенный номер: {{creatableContact.phone}}</span>
      </div>
    </div>
    <div class="form-group">
      <label>Описание</label>
      <textarea v-model="creatableContact.description" class="form-control">

      </textarea>
    </div>
    <div>
      <ErrorAlert v-if="error" :message="error"/>
    </div>
    <div>
      <button type="submit" class="btn btn-success">Создать</button>
    </div>
    <div>
      <Loader v-if="loader"/>
    </div>
  </form>
</template>

<script>
import Loader from "@/components/Loader";
import { VueTelInput } from 'vue-tel-input';
import 'vue-tel-input/dist/vue-tel-input.css';
import ErrorAlert from "@/components/ErrorAlert";
import ErrorFetcher from '@/helpers/error-fetcher';

export default {
  name: "ContactForm",
  data() {
    return {
      loader: false,
      error: ''
    }
  },
  components: {Loader, ErrorAlert, VueTelInput},
  computed: {
    creatableContact: {
      get() {
        return this.$store.getters.creatableContact;
      },
      set(value) {
        this.$store.commit('setCreatableContact', value);
      }
    }
  },
  methods: {
    async submit() {
      this.loader = true;

      try {
        await this.$store.dispatch('createContact');
        this.$router.push('/contact');
      } catch (e) {
        this.error = ErrorFetcher.firstError(e.response);
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
  border-radius: 10px;
  box-shadow: 3px 3px 5px 0px rgba(0,0,0,0.75);
}
</style>