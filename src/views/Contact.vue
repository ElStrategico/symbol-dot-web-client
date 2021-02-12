<template>
  <div class="container" style="margin-top: 30px;">
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
import ContactItem from "@/components/ContactItem";
import {mapGetters} from "vuex";

export default {
  name: "Contact",
  components: {ContactItem},
  computed: mapGetters(['contacts']),
  mounted() {
    this.$store.dispatch('fetchContacts');
  },
  destroyed() {
    this.$store.dispatch('clearContacts');
  }
}
</script>