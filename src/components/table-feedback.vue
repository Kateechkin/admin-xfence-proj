<template>
  <tbody>
    <tr>
      <td class="contact-td"><span>Имя</span>{{ app_data.name }}</td>
      <td class="contact-td"><span>Телефон</span>{{ app_data.phone }}</td>
      <td class="contact-td">
        <span>Дата</span>
        <!-- {{
          new Date(timezone).toLocaleString("ru-RU", {
            dateStyle: "short",
            timeStyle: "full",
          })
        }} -->
        {{ formatDate(timezone) }}
      </td>
      <td>
        <span>Статус</span>
        <!-- v-model="selectedTask" -->
        <select
          class="status"
          id="colors"
          v-model.trim="app_data.status"
          @change="onChangeSelectedTask"
          v-bind:class="changeBackground"
        >
          <option
            value="В обработке"
            :selected="app_data.status === 'В обработке'"
          >
            В обработке
          </option>
          <option value="Обработан" :selected="app_data.status === 'Обработан'">
            Обработан
          </option>
          <option value="Отменено" :selected="app_data.status === 'Отменено'">
            Отменено
          </option>
        </select>
      </td>
      <td class="figure__td">
        <router-link :to="`/feedback/${app_data.id}`" class="figure__editing"
          ><img src="../assets/img/editing.png" alt=""
        /></router-link>
        <button id="show-modal" class="figure__close" @click="showModal = true">
          <img
            src="../assets/img/delete.png"
            id="show-modal"
            @click="showModal = true"
            alt=""
          />
        </button>
      </td>
      <div class="figure-editor-mini">
        <router-link :to="`/feedback/${app_data.id}`" class="figure__editing"
          >Изменить</router-link
        >
        <button id="show-modal" class="figure__close" @click="showModal = true">
          Удалить
        </button>
      </div>
      <modalClient
        v-if="showModal"
        @close="showModal = false"
        v-bind:order_modal="app_data"
        @deleteClient="deleteClient(app_data)"
      >
        <!-- <h3 slot="header">custom header</h3> -->
      </modalClient>
    </tr>
  </tbody>
</template>

<script>
import axios from "axios";
import modalClient from "@/components/modal/modal-client.vue";
import { mapActions, mapGetters } from "vuex";
export default {
  name: "table-add",
  data() {
    return {
      select: "",
      showModal: false,
      contact: [],
      styleobj: {
        backgroundColor: "green",
        fontSize: 20,
      },
      // selectex: "",
    };
  },
  props: {
    app_data: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  components: {
    modalClient,
  },
  computed: {
    changeBackground: function() {
      return {
        info: this.app_data.status === "В обработке",
        success: this.app_data.status === "Обработан",
        danger: this.app_data.status === "Отменено",
      };
    },
    timezone: function() {
      let a = this.app_data.date.replace(/ /g, "T");
      const d = new Date(a);
      console.log(d);
      let time = (d.getTimezoneOffset() / 60) * -1;
      let utc = d.getTime() + time;
      return new Date(utc + time * 3600000);
    },
  },
  methods: {
    ...mapActions(["GET_CONTACTS"]),
    deleteClient(app_data) {
      console.log("метод del table", app_data);
      this.$emit("deleteClient");
    },
    formatDate(date) {
      return (
        date.getFullYear() +
        "." +
        (date.getMonth() + 1) +
        "." +
        date.getDate() +
        " " +
        date.getHours() +
        ":" +
        date.getMinutes() +
        ":" +
        date.getSeconds()
      );
    },
    onChangeSelectedTask: function() {
      // let vm = this;
      axios
        .put(
          `https://admin.xfence.ru/api/admin/v1/contacts/${this.app_data.id}`,
          {
            status: this.app_data.status,
          }
        )
        .then(() => {
          this.GET_CONTACTS();
          console.log("Все окей");
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
};
</script>

<style></style>
