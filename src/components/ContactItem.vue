<template>
  <tr @click="show" class="contact">
    <td v-html="fullName">{{fullName}}</td>
    <td>{{phone}}</td>
    <td>{{email}}</td>
    <td>
      <ContactTag
          v-for="tag in contact.tags"
          :key="tag.id" :name="tag.name"
          :color="tag.text_color"
          :background-color="tag.background_color"
      />
    </td>
  </tr>
</template>

<script>
import {mapGetters} from "vuex";
import ContactTag from "@/components/ContactTag";

export default {
  name: "Contact",
  props: {
    contact: Object
  },
  components: {ContactTag},
  computed: {
    ...mapGetters(['contactSearchQuery']),
    fullName() {
      let fullName = `${this.contact.last_name} ${this.contact.first_name} ${this.contact.patronymic ?? ''}`;
      let regExp = new RegExp(this.contactSearchQuery, 'i');
      let replace = `<span class="highlight">${this.contactSearchQuery}</span>`

      return fullName.replace(regExp, replace);
    },
    phone() {
      return this.contact.phone ? this.contact.phone : '-';
    },
    email() {
      return this.contact.email ? this.contact.email : '-';
    }
  },
  methods: {
    show() {
      this.$router.push(`/contact/${this.contact.id}`);
    }
  }
}
</script>

<style>
.contact {
  cursor: pointer;
}
.highlight {
  background: #ffc107;
}
</style>