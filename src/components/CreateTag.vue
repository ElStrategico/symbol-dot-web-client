<template>
  <div class="main-card mb-3 card">
    <div class="card-body">
      <div>
        <h5 class="card-title">Создать тэг</h5>
        <form @submit.prevent="submit">
          <div class="form-group">
            <input v-model="name" type="text" class="form-control" placeholder="Название тэга">
          </div>
          <div v-model="description" class="form-group" style="text-align: left;">
            <textarea class="form-control" placeholder="Описание"></textarea>
            <small>Не обязательно</small>
          </div>
          <div class="form-group" style="text-align: left;">
            <button @click.prevent="toggleTextColorPalette" class="btn btn-dark">Цвет текста</button>
            <div class="selected-color" :style="{background: textColor.hex}"></div>
            <Chrome v-if="textColorShow" v-model="textColor"/>
          </div>
          <div class="form-group" style="text-align: left;">
            <button @click.prevent="toggleBackgroundColorPalette" class="btn btn-dark">Фон</button>
            <div class="selected-color" :style="{background: backgroundColor.hex}"></div>
            <Chrome v-if="backgroundColorShow" v-model="backgroundColor"/>
          </div>
          <div>
            <ContactTag :name="name" :color="textColor.hex" :background-color="backgroundColor.hex"/>
          </div>
          <div>
            <Loader v-if="loader"/>
          </div>
          <div class="form-group">
            <button class="btn btn-success">Создать</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { Chrome } from 'vue-color';
import Loader from "@/components/Loader";
import ContactTag from "@/components/ContactTag";

export default {
  name: "CreateTag",
  data() {
    return {
      name: '',
      description: '',
      textColorShow: false,
      textColor: {
        hex: '#ffffff'
      },
      backgroundColorShow: false,
      backgroundColor: {
        hex: '#000000'
      },
      loader: false
    }
  },
  props: {
      defaultTextColor: {
        default: '#ffffff'
      },
      defaultBackgroundColor: {
        default: '#000000'
      }
  },
  components: {Chrome, Loader, ContactTag},
  methods: {
    toggleTextColorPalette() {
      this.textColorShow = !this.textColorShow;
    },
    toggleBackgroundColorPalette() {
      this.backgroundColorShow = !this.backgroundColorShow;
    },
    async submit() {
      this.loader = true;

      let creatableTag = {
        name: this.name,
        description: this.description,
        text_color: this.textColor.hex,
        background_color: this.backgroundColor.hex
      }

      await this.$store.dispatch('createTag', creatableTag);

      this.name = this.description = '';
      this.textColor.hex = this.defaultTextColor;
      this.backgroundColor.hex = this.defaultBackgroundColor;

      this.loader = false;
    }
  }
}
</script>

<style scoped>
.selected-color {
  display: inline;
  margin-left: 10px;
  padding: 8px;
  border: 3px solid #000;
  border-radius: 3px;
}
</style>