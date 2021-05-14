<template>
  <div class="home">
    <div class="content">
      <div class="client">
        <div class="client__about">
          <h1>Обратная связь</h1>
        </div>
        <div class="sort">
          <p>Выберите статус:</p>
          <select
            class="status"
            v-model="selectStatus"
            @change="onChangeSelectedTask"
          >
            <option value="all" selected>Все</option>
            <option value="В обработке">В обработке</option>
            <option value="Обработан">Обработан</option>
            <option value="Отменено">Отменено</option>
          </select>
        </div>
        <div class="sort">
          <p>Выберите дату:</p>
          <input type="date" id="startDate" class="status" v-model="date" />
        </div>
        <div class="client-table">
          <div class="client-table__th">
            <div class="client-table__name">
              <h2>Заявки на обратную связь:</h2>
            </div>
            <table>
              <thead>
                <tr>
                  <th>ФИО</th>
                  <th>Телефон</th>
                  <th @click="sort = !sort" style="cursor: pointer">Дата</th>
                  <th>Статус</th>
                  <th>Действия</th>
                </tr>
              </thead>
              <TableFeedback
                v-for="app in filterName"
                :key="app.id"
                v-bind:app_data="app"
                @deleteClient="deleteClient(app)"
              />
            </table>
            <div
              class="table-block"
              v-if="this.selectStatus == 'all' || !this.selectStatus.length"
            >
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
              <button
                :disabled="pageNumber >= pageCount - 1"
                @click="nextPage()"
              >
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
            <!-- <TableNone v-if="!this.sortProd && this.selectStatus" /> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import TableFeedback from "@/components/table-feedback.vue";
import TableNone from "@/components/Table-none.vue";
import { mapActions, mapGetters } from "vuex";
export default {
  name: "table-feedback",
  data() {
    return {
      selectStatus: "",
      selected: "Все",
      sortProd: [],
      date: "",
      sort: false,
      loading: false,
      pageNumber: 0,
      title: "Обратная связь",
    };
  },
  props: {
    size: {
      type: Number,
      required: false,
      default: 10,
    },
  },
  components: {
    TableFeedback,
    TableNone,
  },
  computed: {
    ...mapGetters(["CONTACTS"]),
    pageCount() {
      let l = this.CONTACTS.length,
        s = this.size;
      return Math.ceil(l / s);
    },
    filterName() {
      if (this.selectStatus === "all" && this.date) {
        console.log("это я");
        let startData = this.date;
        return this.CONTACTS.filter(function(value) {
          if (
            new Date(startData).toLocaleDateString() ===
            new Date(value.date).toLocaleDateString()
          ) {
            return value;
          }
        });
      } else if (this.selectStatus === "all") {
        const start = this.pageNumber * this.size,
          end = start + this.size;
        return this.CONTACTS.slice(start, end);
        // return this.COSTUMERS;
      } else if (this.selectStatus && this.date) {
        let startData = this.date;
        return this.sortProd.filter(function(value) {
          if (
            new Date(startData).toLocaleDateString() ===
            new Date(value.date).toLocaleDateString()
          ) {
            return value;
          }
        });
      } else if (this.selectStatus) {
        return this.sortProd;
      } else if (this.date) {
        let startData = this.date;
        return this.CONTACTS.filter(function(value) {
          if (
            new Date(startData).toLocaleDateString() ===
            new Date(value.date).toLocaleDateString()
          ) {
            return value;
          }
        });
      } else {
        const start = this.pageNumber * this.size,
          end = start + this.size;
        return this.CONTACTS.sort(function(a, b) {
          return new Date(a.date) - new Date(b.date);
        }).slice(start, end);
      }
    },
    // СОРТИРОВНКА ПО ДАТЕ
    // else if (!this.selectStatus && this.sort === true) {
    //     const start = this.pageNumber * this.size,
    //       end = start + this.size;
    //     return this.CONTACTS.sort(function(a, b) {
    //       return new Date(b.date) - new Date(a.date);
    //     }).slice(start, end);

    //   }
  },
  beforeMount() {
    document.title = this.title;
  },
  beforeUpdate() {
    document.title = this.title;
  },
  methods: {
    ...mapActions(["GET_CONTACTS"]),
    nextPage() {
      this.pageNumber++;
    },
    prevPage() {
      this.pageNumber--;
    },
    onChangeSelectedTask() {
      this.sortProd = [];
      let vm = this;
      this.CONTACTS.map(function(item) {
        if (item.status === vm.selectStatus) {
          vm.sortProd.push(item);
        }
      });
    },
    deleteClient(app) {
      console.log(app.id);
      return axios(
        `https://admin.xfence.ru/api/admin/v1/contacts/${app.id}`,
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
          this.GET_CONTACTS();
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
    this.GET_CONTACTS()

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

<style></style>
