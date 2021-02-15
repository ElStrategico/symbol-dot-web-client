<template>
  <div class="contact">
    <a href="#" class="contact-link">
      <span v-html="fullName" class="text">{{fullName}}</span>
      <span class="text">{{contact.email}}</span>
      <span class="text">{{contact.phone}}</span>
      <span class="text-min">{{contact.description}}</span>
    </a>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "Contact",
  props: {
    contact: Object
  },
  computed: {
    ...mapGetters(['contactSearchQuery']),
    fullName() {
      let fullName = `${this.contact.last_name} ${this.contact.first_name} ${this.contact.patronymic ?? ''}`;
      let regExp = new RegExp(this.contactSearchQuery, 'i');
      let replace = `<span class="highlight">${this.contactSearchQuery}</span>`

      return fullName.replace(regExp, replace);
    }
  }
}
</script>

<style>
.contact {
  padding: 10px;
  text-align: left;
  border-radius: 10px;
  background: #f2f2f2;
  margin-bottom: 10px;
}
.contact-link {
  text-decoration: none;
}
.text {
  color: #000;
  display: block;
  font-size: 20px;
}
.text-min {
  color: #000;
  display: block;
  font-size: 15px;
}
.highlight {
  background: #ffc107;
}
</style>