<template>
  <div class="home">
    <div class="content">
      <div class="product">
        <div class="product-search">
          <p class="product-search__name">Поиск по товарам:</p>
          <input
            type="text"
            v-model="searchName"
            placeholder="Введите название товара"
            class="product-search__input"
          />
        </div>

        <div class="product-title">
          <h1>Товары</h1>
        </div>
        <div class="client-table__th">
          <table>
            <thead>
              <tr>
                <!-- <th @click="sort = !sort" style="cursor: pointer">ID</th> -->
                <th>Название</th>
                <th>Цена</th>
                <th>Раздел</th>
                <th>Категория</th>
                <th>Действия</th>
              </tr>
            </thead>
            <ProductItem
              v-for="(product, index) in paginatedData"
              :key="index"
              v-bind:product_item="product"
              @deleteClient="deleteClient(product)"
            />
          </table>
          <div class="table-block">
            <button :disabled="pageNumber === 0" @click="prevPage()">
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="backward"
                class="svg-inline--fa fa-backward fa-w-16"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M11.5 280.6l192 160c20.6 17.2 52.5 2.8 52.5-24.6V96c0-27.4-31.9-41.8-52.5-24.6l-192 160c-15.3 12.8-15.3 36.4 0 49.2zm256 0l192 160c20.6 17.2 52.5 2.8 52.5-24.6V96c0-27.4-31.9-41.8-52.5-24.6l-192 160c-15.3 12.8-15.3 36.4 0 49.2z"
                ></path>
              </svg>
            </button>
            <p>{{ pageNumber + 1 }}</p>
            <button :disabled="pageNumber >= pageCount - 1" @click="nextPage()">
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="forward"
                class="svg-inline--fa fa-forward fa-w-16"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M500.5 231.4l-192-160C287.9 54.3 256 68.6 256 96v320c0 27.4 31.9 41.8 52.5 24.6l192-160c15.3-12.8 15.3-36.4 0-49.2zm-256 0l-192-160C31.9 54.3 0 68.6 0 96v320c0 27.4 31.9 41.8 52.5 24.6l192-160c15.3-12.8 15.3-36.4 0-49.2z"
                ></path>
              </svg>
            </button>
          </div>
          <div v-if="loading" class="loading">
            <div class="spin-wrapper">
              <div class="spinner"></div>
            </div>
          </div>
        </div>

        <div class="product__addprod">
          <router-link :to="`/product/new`">
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
            >Добавить товар
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ProductItem from "@/components/product/product-item.vue";
import axios from "axios";
import { mapActions, mapGetters } from "vuex";
export default {
  name: "Product",
  data() {
    return {
      searchName: "",
      newprod: [],
      sort: false,
      loading: false,
      article: "",
      actives: false,
      pageNumber: 0,
      title: "Товары",
    };
  },
  components: {
    ProductItem,
  },
  props: {
    size: {
      type: Number,
      required: false,
      default: 10,
    },
  },
  beforeMount() {
    document.title = this.title;
  },
  beforeUpdate() {
    document.title = this.title;
  },
  computed: {
    ...mapGetters(["PRODUCTS"]),
    ...mapGetters(["TOKEN"]),
    pageCount() {
      let l = this.PRODUCTS.length,
        s = this.size;
      return Math.ceil(l / s);
    },

    paginatedData() {
      if (this.searchName) {
        return this.PRODUCTS.filter((PRODUCTS) => {
          return (
            PRODUCTS.name
              .toUpperCase()
              .indexOf(this.searchName.toUpperCase()) !== -1
          );
        });
      } else if (!this.searchName && this.sort === true) {
        const start = this.pageNumber * this.size,
          end = start + this.size;
        return this.PRODUCTS.sort(function(a, b) {
          return b.id - a.id;
        }).slice(start, end);
      } else {
        const start = this.pageNumber * this.size,
          end = start + this.size;
        return this.PRODUCTS.sort(function(a, b) {
          return a.id - b.id;
        }).slice(start, end);
      }
    },
  },
  methods: {
    ...mapActions(["GET_PRODUCTS"]),

    sortDate() {
      this.PRODUCTS.sort((a, b) => {
        return a.id - b.id;
      });
    },
    sortid(active) {
      if ((active = true)) {
        active = false;
      } else active = true;
    },
    nextPage() {
      this.pageNumber++;
      console.log("next", this.pageNumber);
    },
    prevPage() {
      this.pageNumber--;
      console.log("page", this.pageNumber);
    },
    deleteClient(order) {
      console.log(order.id);
      return axios(
        `https://admin.xfence.ru/api/admin/v1/product/${order.id}`,
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
          this.GET_PRODUCTS();
          console.log("Запрос прошёл успешно", order.id);
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
    this.GET_PRODUCTS()
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
