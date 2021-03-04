<template>
  <div class="container form-container">
    <div class="row">
      <div class="col-lg-12">
        <h3>Добавление контакта</h3>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-6">
        <form @submit.prevent="submit">
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
            <input v-model="creatableContact.email" type="email" class="form-control" placeholder="example@example.com" style="margin-bottom: 3px;">
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
      </div>
      <div class="col-lg-6">
        <div>
          <TagPanel />
        </div>
        <div>
          <CreateTag />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Loader from "@/components/Loader";
import { VueTelInput } from 'vue-tel-input';
import TagPanel from "@/components/TagPanel";
import 'vue-tel-input/dist/vue-tel-input.css';
import CreateTag from "@/components/CreateTag";
import ErrorAlert from "@/components/ErrorAlert";
import ErrorFetcher from '@/helpers/error-fetcher';

export default {
  name: "ContactForm",
  data() {
    return {
      loader: false,
      contactLoader: false,
      error: '',
    }
  },
  components: {Loader, TagPanel, CreateTag, ErrorAlert, VueTelInput},
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
.form-container {
  background: #f2f2f2;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 3px 3px 5px 0px rgba(0,0,0,0.75);
}
.add {
  color: #2950ff;
  cursor: pointer;
}
</style>