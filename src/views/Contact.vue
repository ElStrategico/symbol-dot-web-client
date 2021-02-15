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
        <ContactItem
            v-for="contact in contacts" :key="contact.id"
            :contact="contact"
        />
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from "vuex";
import ContactItem from "@/components/ContactItem";
import ContactSearch from "@/components/ContactSearch";

export default {
  name: "Contact",
  components: {ContactItem, ContactSearch},
  computed: mapGetters(['contacts']),
  mounted() {
    this.$store.dispatch('fetchContacts');
  },
  destroyed() {
    this.$store.dispatch('clearContacts');
  }
}
</script>