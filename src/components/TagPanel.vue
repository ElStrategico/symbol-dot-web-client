<template>
  <div class="main-card mb-3 card">
    <div class="card-body">
      <div>
        <h5 class="card-title">Тэги</h5>
      </div>
      <div>
        <div>
          <ContactTag
              class="tag"
              v-for="tag in tags"
              :key="tag.id"
              :class="{selected: tag.selected}"
              @click="toggle(tag)"
              :name="tag.name"
              :color="tag.text_color"
              :background-color="tag.background_color"/>
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
    },
    toggle(tag) {
      this.$store.commit('toggleTagSelected', tag);
    }
  },
  async mounted() {
    await this.fetchTags();
  }
}
</script>

<style scoped>
.tag {
  opacity: 0.1;
}
.selected {
  opacity: 1;
}
</style>