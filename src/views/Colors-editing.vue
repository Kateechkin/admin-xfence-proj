<template>
  <div class="home">
    <div class="product-add">
      <div class="breadcrumps">
        <router-link to="/colors"> <p>Назад</p></router-link>
      </div>
      <div class="product-add__title">
        <h1>Редактирование Цвета</h1>
      </div>
      <form action="" method="PUT" id="form" @submit.prevent="newprod">
        <div class="colors__row">
          <div class="colors__column">
            <p class="colors-form__name">HEX:</p>
            <input
              type="text"
              id="id"
              name="color"
              class="product-add__input"
              v-bind:value="COLORID.color"
            />
          </div>
          <p class="colors-form__name">Интерпретация цвета:</p>
          <div
            class="colors-form__color"
            :style="{ backgroundColor: COLORID.color }"
          ></div>
        </div>
        <div v-if="loading" class="loading">
          <div class="spin-wrapper">
            <div class="spinner"></div>
          </div>
        </div>
        <div class="product__button">
          <input type="submit" class="button-add" value="Редактировать" />
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
      newNews: [],
      loading: false,
      showModal: false,
    };
  },
  components: {
    modalOk,
  },
  mounted() {
    this.loading = true;
    localStorage.removeItem("coloritem");
    axios
      .get(
        `https://admin.xfence.ru/api/admin/v1/colors/${this.$route.params.id}`,
        {
          headers: {
            Authorization: this.TOKEN,
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        this.loading = false;
        console.log(response.data);
        this.product = response.data;
        this.$store.dispatch("GET_COLORITEM", this.product);
      })
      .catch((error) => {
        console.log(error);
        return error;
      });
  },
  computed: {
    ...mapGetters(["TOKEN"]),
    ...mapGetters(["COLORID"]),
  },
  methods: {
    ...mapActions(["GET_COLORITEM"]),
    newprod() {
      const forms = document.forms;
      console.log(forms);
      const formData = new FormData(forms[0]);
      console.log(formData);
      this.newNews = [];
      for (let [name, value] of formData) {
        this.newNews = { ...this.newNews, [name]: value };
        console.log(this.newNews);
      }
      if (this.newNews) {
        console.log(this.newNews.id);
        console.log(this.newNews.color);
        axios
          .put(
            `https://admin.xfence.ru/api/admin/v1/colors/${this.$route.params.id}`,
            {
              id: this.newNews.id,
              color: this.newNews.color,
            }
          )
          .then(() => {
            this.showModal = true;

            console.log("Все окей");
          })
          .catch((error) => {
            console.error(error);
          });
      }
    },
  },
};
</script>

<style>
</style>