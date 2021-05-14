<template>
  <div class="home">
    <div class="content">
      <div class="product">
        <div class="product-search"></div>
        <div class="product-title">
          <h1>Используемые цвета</h1>
        </div>
        <div class="colors">
          <table>
            <thead>
              <tr>
                <th>HEX</th>
                <th>Цвет</th>
                <th>Действия</th>
              </tr>
            </thead>

            <ColorsItem
              v-for="colors in COLORS"
              :key="colors.id"
              v-bind:colors_item="colors"
              @deleteClient="deleteClient(colors)"
            />
          </table>
        </div>
      </div>
      <div v-if="loading" class="loading">
        <div class="spin-wrapper">
          <div class="spinner"></div>
        </div>
      </div>
    </div>
    <div class="product__addprod">
      <router-link :to="`/colors/new`">
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="plus"
          class="svg-inline--fa fa-plus fa-w-14"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
        >
          <path
            fill="currentColor"
            d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"
          ></path></svg
        >Добавить цвет
      </router-link>
    </div>
  </div>
</template>
<script>
import ColorsItem from "@/components/colors-item.vue";
import axios from "axios";
import { mapActions, mapGetters } from "vuex";
export default {
  name: "Colors",

  data() {
    return {
      loading: false,
      title: "Цвета",
    };
  },
  components: {
    ColorsItem,
  },
  computed: {
    ...mapGetters(["COLORS"]),
  },
  beforeMount() {
    document.title = this.title;
  },
  beforeUpdate() {
    document.title = this.title;
  },
  methods: {
    ...mapActions(["GET_COLORS"]),
    deleteClient(colors) {
      console.log(colors.id);
      return axios(
        `https://admin.xfence.ru/api/admin/v1/colors/${colors.id}`,
        {
          method: "delete",
        },
        {
          headers: {
            Authorization: this.TOKEN,
            "Content-Type": "application/json",
          },
        }
      )
        .then((response) => {
          this.GET_COLORS();
          console.log("Запрос прошёл успешно");
          return response;
        })
        .catch((error) => {
          console.log(error);
          return error;
        });
    },
  },
  mounted() {
    this.loading = true;
    this.GET_COLORS()
      .then((response) => {
        this.loading = false;
        if (response.data) {
          console.log("Data arrived");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>
