<template>
  <div class="home">
    <div class="product-add">
      <div class="breadcrumps">
        <router-link to="/colors"> <p>Назад</p></router-link>
      </div>
      <div class="product-add__title">
        <h1>Добавление Цвета</h1>
      </div>
      <form action="" method="POST" id="form" @submit.prevent="newprod">
        <div class="colors__row">
          <div class="colors__column">
            <p class="colors-form__name">Интерпретация цвета:</p>
            <div
              class="colors-form__color"
              :style="{ backgroundColor: colornow.backgroundColor }"
            ></div>
            <p class="colors-form__name">HEX:</p>
            <input
              type="text"
              id="id"
              name="color"
              v-model="color"
              class="product-add__input"
            />
          </div>
        </div>
        <div v-if="loading" class="loading">
          <div class="spin-wrapper">
            <div class="spinner"></div>
          </div>
        </div>
        <div class="product__button">
          <input type="submit" class="button-add" value="Добавить" />
        </div>
      </form>
    </div>
    <modalOk
      v-if="showModal"
      @close="showModal = false"
      v-bind:order_modal_ok="colors_item"
    >
    </modalOk>
  </div>
</template>

<script>
import modalOk from "@/components/modal/modal-ok.vue";
import axios from "axios";
import { mapActions, mapGetters } from "vuex";
export default {
  name: "color-editing",
  data() {
    return {
      color: "",
      showModal: false,
    };
  },
  mounted() {},
  computed: {
    ...mapGetters(["TOKEN"]),
    colornow() {
      return {
        backgroundColor: this.color,
      };
    },
  },
  components: {
    modalOk,
  },
  methods: {
    ...mapActions(["GET_COLORITEM"]),
    newprod() {
      // const forms = document.forms;
      // console.log(forms);
      // const formData = new FormData(forms[0]);
      // console.log(formData);
      // this.newNews = [];
      // for (let [name, value] of formData) {
      //   this.newNews = { ...this.newNews, [name]: value };
      //   console.log(this.newNews);
      // }
      // if (this.newNews) {
      //   console.log(this.newNews.id);
      //   console.log(this.newNews.color);
      axios
        .post("https://admin.xfence.ru/api/admin/v1/colors/", {
          color: this.color,
        })
        .then(() => {
          this.showModal = true;
          console.log("Все окей");
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
};
</script>

<style>
</style>