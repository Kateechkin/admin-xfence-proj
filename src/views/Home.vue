<template>
  <div class="home">
    <div class="content">
      <div class="index-page">
        <div class="index-page__title">
          <h1>Главная</h1>
        </div>
        <div class="index-page__row">
          <div class="index-page__column">
            <div class="index-page__item block">
              <div class="block__title">
                <h4>Посетители</h4>
                <button class="block__btn">
                  День<span class="block__icon"
                    ><svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="arrow-down"
                      class="svg-inline--fa fa-arrow-down fa-w-14"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                    >
                      <path
                        fill="currentColor"
                        d="M413.1 222.5l22.2 22.2c9.4 9.4 9.4 24.6 0 33.9L241 473c-9.4 9.4-24.6 9.4-33.9 0L12.7 278.6c-9.4-9.4-9.4-24.6 0-33.9l22.2-22.2c9.5-9.5 25-9.3 34.3.4L184 343.4V56c0-13.3 10.7-24 24-24h32c13.3 0 24 10.7 24 24v287.4l114.8-120.5c9.3-9.8 24.8-10 34.3-.4z"
                      ></path></svg
                  ></span>
                </button>
              </div>
              <div class="block__info">
                <h2>{{ visitors.nowday }}</h2>
              </div>
              <div class="block__statictic">
                <div class="block__plus">
                  <h6>{{ TotalVisitor }}</h6>
                  <p>Прирост</p>
                </div>
                <div class="block__percent">
                  <h6>{{ PersentVisitor }} %</h6>
                  <p>В процентах</p>
                </div>
              </div>
            </div>
          </div>
          <div class="index-page__column">
            <div class="index-page__item block">
              <div class="block__title">
                <h4>Заработано</h4>
                <button class="block__btn">
                  День<span class="block__icon"
                    ><svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="arrow-down"
                      class="svg-inline--fa fa-arrow-down fa-w-14"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                    >
                      <path
                        fill="currentColor"
                        d="M413.1 222.5l22.2 22.2c9.4 9.4 9.4 24.6 0 33.9L241 473c-9.4 9.4-24.6 9.4-33.9 0L12.7 278.6c-9.4-9.4-9.4-24.6 0-33.9l22.2-22.2c9.5-9.5 25-9.3 34.3.4L184 343.4V56c0-13.3 10.7-24 24-24h32c13.3 0 24 10.7 24 24v287.4l114.8-120.5c9.3-9.8 24.8-10 34.3-.4z"
                      ></path></svg
                  ></span>
                </button>
              </div>
              <div class="block__info">
                <h2>
                  {{ earned.nowday }}
                </h2>
              </div>
              <div class="block__statictic">
                <div class="block__plus">
                  <h6>{{ TotalEarned }}</h6>
                  <p>Прирост</p>
                </div>
                <div class="block__percent">
                  <h6>{{ PersentEarned }} %</h6>
                  <p>В процентах</p>
                </div>
              </div>
            </div>
          </div>
          <div class="index-page__column">
            <div class="index-page__item block">
              <div class="block__title">
                <h4>Клиентов</h4>
                <button class="block__btn">
                  День<span class="block__icon"
                    ><svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="arrow-down"
                      class="svg-inline--fa fa-arrow-down fa-w-14"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                    >
                      <path
                        fill="currentColor"
                        d="M413.1 222.5l22.2 22.2c9.4 9.4 9.4 24.6 0 33.9L241 473c-9.4 9.4-24.6 9.4-33.9 0L12.7 278.6c-9.4-9.4-9.4-24.6 0-33.9l22.2-22.2c9.5-9.5 25-9.3 34.3.4L184 343.4V56c0-13.3 10.7-24 24-24h32c13.3 0 24 10.7 24 24v287.4l114.8-120.5c9.3-9.8 24.8-10 34.3-.4z"
                      ></path></svg
                  ></span>
                </button>
              </div>
              <div class="block__info">
                <h2>{{ clients.nowday }}</h2>
              </div>
              <div class="block__statictic">
                <div class="block__plus">
                  <h6>{{ TotalClients }}</h6>
                  <p>Прирост</p>
                </div>
                <div class="block__percent">
                  <h6>{{ PersentClients }} %</h6>
                  <p>В процентах</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="index-page__table">
          <h2>Заказы</h2>
        </div>
        <table>
          <thead>
            <tr>
              <!-- <th @click="sort = !sort" style="cursor: pointer">ID</th> -->
              <th>ФИО</th>
              <th>Email</th>
              <th>Телефон</th>
              <!-- <th>Город</th> -->
              <th>Способ доставки</th>
              <th>Цена закааза</th>
              <th>Дата</th>
              <th>Статус</th>
            </tr>
          </thead>
          <TableIndex
            v-for="order in paginatedData"
            :key="order.id"
            v-bind:order_data="order"
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
        <div v-if="load" class="loading">
          <div class="spin-wrapper">
            <div class="spinner"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import login from "@/views/Login.vue";
import axios from "axios";
import TableIndex from "@/components/table-index.vue";
import { mapActions, mapGetters } from "vuex";
// @ is an alias to /src
export default {
  name: "Home",
  data() {
    return {
      load: false,
      visitors: { nowday: 100, lastday: 50 },
      earned: { nowday: 12000, lastday: 1000 },
      clients: { nowday: 5, lastday: 10 },
      title: "Главная",
      pageNumber: 0,
      sort: false,
    };
  },
  components: {
    TableIndex,
  },
  props: {
    size: {
      type: Number,
      required: false,
      default: 10,
    },
  },
  methods: {
    ...mapActions(["GET_COSTUMERS"]),
    nextPage() {
      this.pageNumber++;
      console.log("next", this.pageNumber);
    },
    prevPage() {
      this.pageNumber--;
      console.log("page", this.pageNumber);
    },
  },
  computed: {
    ...mapGetters(["COSTUMERS"]),
    ...mapGetters(["authStatus"]),
    loading: function() {
      return this.authStatus === "loading";
      //  return this.authStatus === "loading" && !this.isAuthenticated;
    },
    pageCount() {
      let l = this.COSTUMERS.length,
        s = this.size;
      return Math.ceil(l / s);
    },
    paginatedData() {
      if (this.sort === true) {
        const start = this.pageNumber * this.size,
          end = start + this.size;
        return this.COSTUMERS.sort(function(a, b) {
          return b.id - a.id;
        }).slice(start, end);
      } else {
        const start = this.pageNumber * this.size,
          end = start + this.size;
        return this.COSTUMERS.sort(function(a, b) {
          return a.id - b.id;
        }).slice(start, end);
      }
    },
    TotalVisitor() {
      let result = "";
      result = this.visitors.nowday - this.visitors.lastday;

      return result;
    },
    PersentVisitor() {
      let result = "";
      let value = this.visitors.nowday - this.visitors.lastday;
      result = Math.round((value / this.visitors.nowday) * 100);
      return result;
    },
    TotalEarned() {
      let result = "";
      result = this.earned.nowday - this.earned.lastday;

      return result;
    },
    PersentEarned() {
      let result = "";
      let value = this.earned.nowday - this.earned.lastday;
      result = Math.round((value / this.earned.nowday) * 100);
      return result;
    },
    TotalClients() {
      let result = "";
      result = this.clients.nowday - this.clients.lastday;

      return result;
    },
    PersentClients() {
      let result = "";
      let value = this.clients.nowday - this.clients.lastday;
      result = Math.round((value / this.clients.nowday) * 100);

      return result;
    },
  },
  beforeMount() {
    document.title = this.title;
  },
  beforeUpdate() {
    document.title = this.title;
  },
  mounted() {
    this.load = true;
    this.GET_COSTUMERS()
      .then((response) => {
        this.load = false;
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
