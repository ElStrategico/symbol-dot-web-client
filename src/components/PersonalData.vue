<template>
  <div class="personal">
    <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <img v-if="authorizedUser" class="avatar img-fluid" :src="avatar">
          <div style="margin-top: 10px;">
            <UploadAvatar
                @uploadAvatar="uploadAvatar"
                @cancelSetAvatar="cancelSetAvatar"
            />
          </div>
        </div>
        <div v-if="authorizedUser" class="col-lg-6">
          <span class="text">Имя: {{authorizedUser.name}}</span>
          <span class="text">Почта: {{authorizedUser.email}}</span>
          <span class="text">Баланс: {{authorizedUser.balance}}</span>
          <span class="text">
            Телефон:
              <span v-if="authorizedUser.phone">{{authorizedUser.phone}}</span>
              <span class="warning" v-else>Вы не указали телефон</span>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import UploadAvatar from "@/components/UploadAvatar";

export default {
  name: "PersonalData",
  data() {
    return {
      localAvatar: ''
    }
  },
  components: {UploadAvatar},
  computed: {
    ...mapGetters(['authorizedUser']),
    avatar() {
      if(this.localAvatar) {
        return this.localAvatar;
      }

      return `http://symbol-dot.local${this.authorizedUser.avatar}`;
    }
  },
  methods: {
    uploadAvatar(dataURL) {
      this.localAvatar = dataURL;
    },
    cancelSetAvatar() {
      this.localAvatar = '';
    }
  }
}
</script>

<style scoped>
.personal {
  background: #f2f2f2;
  text-align: left;
  padding: 10px;
  border-radius: 10px;
}
.avatar {
  width: 500px;
}
.text {
  display: block;
  font-size: 30px;
}
.warning {
  color: #f5576c;
}
</style>