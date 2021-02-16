<template>
  <div class="card-body">
    <nav class="">
      <ul class="pagination">
        <li @click="change(currentPage - 1)" class="page-item"><a class="page-link" aria-label="Previous"><span aria-hidden="true">«</span><span class="sr-only">Previous</span></a></li>
        <li @click="change(page)" v-if="previousCurrent" v-for="page in previousCurrent" class="page-item"><a class="page-link">{{ page }}</a></li>
        <li class="page-item active"><a class="page-link">{{ currentPage }}</a></li>
        <li @click="change(page)" v-if="nextCurrent" v-for="page in nextCurrent" class="page-item"><a class="page-link">{{ page }}</a></li>
        <li @click="change(currentPage + 1)" class="page-item"><a class="page-link" aria-label="Next"><span aria-hidden="true">»</span><span class="sr-only">Next</span></a></li>
        <li @click="change(lastPage)" v-if="showLast" class="last-page page-item"><a class="page-link">{{ lastPage }}</a></li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Pagination",
  data() {
    return {
      startPage: 1,
      deep: 3
    }
  },
  props: {
    currentPage: Number,
    lastPage: Number
  },
  computed: {
    previousCurrent() {
      if(this.currentPage === this.startPage) {
        return false;
      }

      let pages = [this.currentPage - 1];
      while(pages.length < this.deep && pages[pages.length - 1] !== this.startPage) {
        pages.push(pages[pages.length - 1] - 1);
      }

      return pages.reverse();
    },
    nextCurrent() {
      if(this.currentPage === this.lastPage) {
        return false;
      }

      let pages = [this.currentPage + 1];
      while(pages.length < this.deep && pages[pages.length - 1] !== this.lastPage) {
        pages.push(pages[pages.length - 1] + 1);
      }

      return pages;
    },
    showLast() {
      return this.currentPage !== this.lastPage;
    }
  },
  methods: {
    change(page) {
      if(page < this.startPage || page > this.lastPage) {
        return;
      }
      this.currentPage = page;
      this.$emit('change', page);
    }
  }
}
</script>

<style scoped>
.last-page {
  margin-left: 10px;
}
</style>