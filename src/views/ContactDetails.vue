<template>
  <div class="container contact-details">
    <div class="row">
      <div class="col-lg-12">
        <h1>Контакт</h1>
      </div>
      <div class="col-lg-12">
        <div class="form-group">
          <label>Имя</label>
          <input v-model="contactDetails.first_name" class="form-control">
        </div>
        <div class="form-group">
          <label>Фамилия</label>
          <input v-model="contactDetails.last_name" class="form-control">
        </div>
        <div class="form-group">
          <label>Отчество</label>
          <input v-model="contactDetails.patronymic" class="form-control">
        </div>
        <div class="form-group">
          <label>Почта</label>
          <input v-model="contactDetails.email" type="email" class="form-control">
        </div>
        <div class="form-group">
          <label>Телефон</label>
          <VueTelInput v-model="contactDetails.phone" />
        </div>
        <div class="form-group">
          <label>Описание</label>
          <textarea class="form-control">
            {{contactDetails.description}}
          </textarea>
        </div>
        <div class="form-group">
          <button class="btn btn-primary">Изменить</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from "vuex";
import { VueTelInput } from 'vue-tel-input';
import 'vue-tel-input/dist/vue-tel-input.css';

export default {
  name: "ContactDetails",
  data() {
    return {
      fetchId: null
    }
  },
  computed: mapGetters(['contactDetails']),
  components: {VueTelInput},
  async mounted() {
    this.fetchId = this.$route.params.id;
    await this.$store.dispatch('fetchContactById', this.fetchId);
  }
}
</script>

<style scoped>
.contact-details {
  background: #f2f2f2;
  margin: 10px 10%;
}
</style>