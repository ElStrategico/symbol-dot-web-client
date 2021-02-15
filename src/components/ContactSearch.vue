<template>
  <div>
    <div class="search">
      <h3>Поиск</h3>
      <div class="position-relative form-group">
        <input v-model="query" type="text" name="address" class="form-control" placeholder="Иванов Иван Иванович">
        <small class="text form-text text-muted">Введите имя, фамилию или отчество контакта</small>
      </div>
      <div class="form-group">
        <button @click="submit" type="submit" class="btn btn-primary button">Найти</button>
        <button @click="reset" class="btn btn-primary button">Сбросить</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactSearch",
  data() {
    return {
      query: ''
    }
  },
  methods: {
    async submit() {
      this.$router.push({query: {query: this.query}})
      this.$store.commit('setContactSearchQuery', this.query);
      await this.$store.dispatch('searchContacts');
    },
    async reset() {
      this.query = '';
      this.$router.push({query: {}})
      this.$store.commit('setContactSearchQuery', this.query);
      await this.$store.dispatch('fetchContacts');
    }
  },
  mounted() {
    this.query = this.$route.query.query;

    if(this.query) {
      this.$store.commit('setContactSearchQuery', this.query);
      this.submit();
    }
  }
}
</script>

<style scoped>
.search {
  background: #f2f2f2;
  padding: 10px;
  border-radius: 10px;
}
.text {
  font-size: 15px;
}
.button {
  margin-left: 3px;
}
</style>