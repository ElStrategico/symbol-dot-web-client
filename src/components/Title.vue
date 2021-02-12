<template>
  <div class="app-page-title title">
    <div class="page-title-wrapper">
      <div class="page-title-heading">
        <div class="page-title-icon">
          <i class="fa fa-star"> </i>
        </div>
        <div>
          {{message}}
          <div class="page-title-subheading">
            {{description}}
          </div>
        </div>
      </div>
      <div class="page-title-actions">
        <div class="d-inline-block dropdown">
          <button
              style="margin-left: 30px;"
              aria-expanded="false"
              aria-haspopup="true"
              class="btn-shadow dropdown-toggle btn btn-info"
              data-toggle="dropdown"
              type="button"
          >
                  <span class="btn-icon-wrapper pr-2 opacity-7">
                  </span>
            Помощники
          </button>
          <div
              aria-hidden="true"
              class="dropdown-menu dropdown-menu-right"
              role="menu"
              tabindex="-1"
          >
            <ul class="nav flex-column">
              <li v-for="helper in helpers" :key="helper.name" class="nav-item">
                <router-link :to="helper.link" class="nav-link">
                  <i></i>
                  <span>{{helper.name}}</span>
                  <div v-if="helper.counter" class="ml-auto badge badge-pill badge-secondary">{{ helper.counter }}</div>
                </router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Title",
  props: {
    message: String,
    description: {
      default: ''
    },
    helpers: Array
  }
}
</script>

<style scoped>
.title {
  margin-top: 10px;
  border-radius: 10px;
  -webkit-box-shadow: 3px 3px 5px 0px rgba(0,0,0,0.75);
  -moz-box-shadow: 3px 3px 5px 0px rgba(0,0,0,0.75);
  box-shadow: 3px 3px 5px 0px rgba(0,0,0,0.75);
}
</style>