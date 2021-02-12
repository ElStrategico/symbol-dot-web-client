<template>
  <div class="contact">
    <a href="#" class="contact-link">
      <span class="text">{{fullName}}</span>
      <span class="text">{{contact.email}}</span>
      <span class="text">{{contact.phone}}</span>
      <span class="text-min">{{contact.description}}</span>
    </a>
  </div>
</template>

<script>
export default {
  name: "Contact",
  props: {
    contact: Object
  },
  computed: {
    fullName() {
      return `${this.contact.last_name} ${this.contact.first_name} ${this.contact.patronymic ?? ''}`;
    }
  }
}
</script>

<style scoped>
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
</style>