<template>
  <div class="container" style="margin-top: 30px;">
    <div>
      <ContactSearch />
    </div>
    <div class="row" style="margin-top: 10px; margin-bottom: 10px; text-align: left;">
      <div class="col-lg-12">
        <router-link to="/contact/create" class="btn btn-primary" style="color: #fff;">Добавить контакт</router-link>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-12">
        <div>
          <table class="mb-0 table table-hover">
            <thead>
            <tr>
              <th>ФИО</th>
              <th>Телефон</th>
              <th>Почта</th>
              <th>Тэги</th>
            </tr>
            </thead>
            <tbody>
            <ContactItem
                v-for="contact in contacts" :key="contact.id"
                :contact="contact"
            />
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-12">
        <Loader v-if="contactFetching"/>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-12">
        <div>
          <Pagination
            @change="paginate"
            v-if="contacts.length"
            :current-page="contactCurrentPage"
            :last-page="contactLastPage"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from "vuex";
import Loader from "@/components/Loader";
import Pagination from "@/components/Pagination";
import ContactItem from "@/components/ContactItem";
import ContactSearch from "@/components/ContactSearch";

export default {
  name: "Contact",
  components: {Loader, Pagination, ContactItem, ContactSearch},
  computed: mapGetters(['contacts', 'contactFetching', 'contactCurrentPage', 'contactLastPage']),
  methods: {
    paginate(page) {
      this.$store.dispatch('fetchContacts', page);
    }
  },
  mounted() {
    this.$store.dispatch('fetchContacts');
  },
  destroyed() {
    this.$store.dispatch('clearContacts');
  }
}
</script>