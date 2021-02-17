<template>
  <div class="main-card mb-3 card">
    <div class="card-body">
      <div>
        <h5 class="card-title">Тэги</h5>
      </div>
      <div>
        <div>
          <ContactTag v-for="tag in tags" :key="tag.id" :name="tag.name" :color="tag.text_color" :background-color="tag.background_color"/>
        </div>
        <div>
          <button v-if="fetchContactTagUrl" class="btn btn-primary">Загрузить еще</button>
        </div>
        <div>
          <Loader v-if="loader"/>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import {mapGetters} from "vuex";
import Loader from "@/components/Loader";
import ContactTag from "@/components/ContactTag";

export default {
  name: "TagPanel",
  data() {
    return {
      loader: false
    }
  },
  components: {Loader, ContactTag},
  computed: mapGetters(['tags', 'fetchContactTagUrl']),
  methods: {
    async fetchTags() {
      this.loader = true;
      await this.$store.dispatch('fetchTags');
      this.loader = false;
    }
  },
  async mounted() {
    await this.fetchTags();
  }
}
</script>

<style scoped>

</style>