<template>
  <tbody>
    <tr>
      <td><span>Имя</span>{{ order_data.name }}</td>
      <td><span>Email</span>{{ order_data.email }}</td>
      <td><span>Телефон</span>{{ order_data.phone }}</td>
      <!-- <td>{{ order_data.city }}</td> -->
      <td v-if="order_data.post === 'delivery'">
        <span>Способ доставки</span>Почта
      </td>
      <td v-if="order_data.post === 'pickup'">
        <span>Способ доставки</span>Самовывоз
      </td>
      <td><span>Цена заказа</span>{{ order_data.price }} ₽</td>
      <td>
        <span>Дата </span>
        {{ formatDate(timezone) }}
        <!-- {{ order_data.date }} -->
        <!-- {{ new Date(order_data.date).toLocaleDateString() }} -->
      </td>
      <td>
        <span>Статус</span>
        <select
          class="status"
          id="colors"
          v-model.trim="order_data.status"
          @change="onChangeSelectedTask"
          v-bind:class="changeBackground"
        >
          <option
            value="В обработке"
            :selected="order_data.status === 'В обработке'"
          >
            В обработке
          </option>
          <option
            value="Обработан"
            :selected="order_data.status === 'Обработан'"
          >
            Обработан
          </option>
          <option value="Отменено" :selected="order_data.status === 'Отменено'">
            Отменено
          </option>
        </select>
      </td>
      <td class="figure__td">
        <router-link :to="`/clients/${order_data.id}`" class="figure__editing"
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
        <router-link :to="`/clients/${order_data.id}`" class="figure__editing"
          >Изменить</router-link
        >
        <button id="show-modal" class="figure__close" @click="showModal = true">
          Удалить
        </button>
      </div>
      <modalClient
        v-if="showModal"
        @close="showModal = false"
        v-bind:order_modal="order_data"
        @deleteClient="deleteClient(order_data)"
      >
      </modalClient>
    </tr>
  </tbody>
</template>

<script>
import axios from "axios";
import modalClient from "@/components/modal/modal-client.vue";

import { mapActions, mapGetters } from "vuex";
import Popupclient from "./popupclient.vue";
export default {
  name: "table-clients",
  data() {
    return {
      costumersid: "",
      renderComponent: true,
      showModal: false,
      // selectedTask: "",
      styleobj: {
        backgroundColor: "green",
        fontSize: 20,
      },
    };
  },
  components: {
    modalClient,
  },
  props: {
    order_data: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  computed: {
    changeBackground: function() {
      return {
        info: this.order_data.status === "В обработке",
        success: this.order_data.status === "Обработан",
        danger: this.order_data.status === "Отменено",
      };
    },
    timezone: function() {
      let a = this.order_data.date.replace(/ /g, "T");
      const d = new Date(a);
      console.log(d);
      let time = (d.getTimezoneOffset() / 60) * -1;
      let utc = d.getTime() + time;
      return new Date(utc + time * 3600000);
    },
  },

  methods: {
    ...mapActions(["GET_COSTUMERS"]),
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
      axios
        .put(
          `https://admin.xfence.ru/api/admin/v1/orders/${this.order_data.id}`,
          {
            status: this.order_data.status,
          }
        )
        .then(() => {
          this.GET_COSTUMERS();
          console.log("Все окей");
        })
        .catch((error) => {
          console.error(error);
        });
    },

    deleteClient(order_data) {
      console.log("метод del table", order_data);
      this.$emit("deleteClient");
    },
  },
};
</script>

<style></style>
