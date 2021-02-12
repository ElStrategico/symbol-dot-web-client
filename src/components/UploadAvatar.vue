<template>
  <div>
    <div v-if="!preview">
      <label>Изменить аватар</label><br>
      <input @change="upload($event)" type="file" accept="image/jpeg,image/png,image/bmp">
    </div>
    <div v-else>
      <label>Вы уверены, что хотите изменить аватар?</label>
      <div>
        <button @click="save" class="btn btn-success">Подтвердить</button>
        <button @click="cancel" class="btn btn-danger" style="margin-left: 5px;">Отменить</button>
      </div>
    </div>
    <div style="margin-top: 10px;">
      <ErrorAlert v-if="error" :message="error"/>
    </div>
    <div>
      <Loader v-if="loader"/>
    </div>
  </div>
</template>

<script>
import Loader from "@/components/Loader";
import ErrorAlert from "@/components/ErrorAlert";
import ErrorFetcher from "@/helpers/error-fetcher";

export default {
  name: "UploadAvatar",
  data() {
    return {
      loader: false,
      preview: false,
      error: '',
      allowedTypes: ['image/png', 'image/jpeg', 'image/bmp']
    }
  },
  components: {Loader, ErrorAlert},
  methods: {
    upload(event) {
      this.error = '';
      let file = event.target.files[0];

      if(!this.allowedTypes.includes(file.type)) {
        this.error = 'The avatar must be a file of type: jpg, bmp, png.';
        return;
      }

      let fileReader = new FileReader();
      fileReader.onload = () => {
        let dataURL = fileReader.result;
        this.preview = true;
        this.$store.commit('setAvatar', file);
        this.$emit('uploadAvatar', dataURL);
      }

      fileReader.readAsDataURL(file);
    },
    async save() {
      this.loader = true;

      try {
        await this.$store.dispatch('uploadAvatar');
        this.preview = false;
      } catch(e) {
        this.error = ErrorFetcher.firstError(e.response);
      } finally {
        this.loader = false;
      }
    },
    cancel() {
      this.preview = false;
      this.$emit('cancelSetAvatar');
    }
  }
}
</script>

<style scoped>

</style>