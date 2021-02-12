<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-12">
        <Title
            message="Личный кабинет"
            description="На данной странице, вы можете менять свои конфиденциальные данные, смотреть личные сообщения, настраивать
            приватность"
            :helpers="helpers"
        />
      </div>
    </div>

    <div class="row">
      <div class="col-lg-12">
        <VerifyEmailForm v-if="authorizedUser && !authorizedUser.email_verified_at" @verified="verifiedEmail" />
      </div>
    </div>

    <div class="row">
      <div class="col-lg-12">
        <PersonalData />
      </div>
    </div>
  </div>
</template>

<script>
import Title from "@/components/Title";
import PersonalData from "@/components/PersonalData";
import VerifyEmailForm from "@/components/VerifyEmailForm";
import {mapGetters} from "vuex";

export default {
  name: "Profile",
  data() {
    return {
      helpers: [
        {name: 'Сообщения', link: '/messager', counter: 80},
        {name: 'Настройки', link: '/settings',},
        {name: 'Выход', link: '/logout',}
      ]
    }
  },
  components: {Title, PersonalData, VerifyEmailForm},
  methods: {
    async verifiedEmail() {
      this.$store.commit('setVerifyEmail');
    }
  },
  computed: mapGetters(['authorizedUser'])
};
</script>

<style scoped></style>
