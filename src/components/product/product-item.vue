<template>
  <tbody>
    <tr @click="click(product_item)">
      <td><span>Название</span>{{ product_item.name }}</td>
      <td><span>Цена</span>{{ product_item.price }} ₽</td>
      <td v-if="product_item.section === 'fence'"><span>Раздел</span>Секция</td>
      <td v-if="product_item.section === 'goal'"><span>Раздел</span>Ворота</td>
      <td v-if="product_item.section === 'wicket'">
        <span>Раздел</span>Калитка
      </td>
      <!-- <td>{{ product_item.section }}</td> -->
      <td><span>Категория</span>{{ product_item.category }}</td>
      <td class="figure__td">
        <router-link :to="`/product/${product_item.id}`" class="figure__editing"
          ><img src="../../assets/img/editing.png" alt=""
        /></router-link>
        <button id="show-modal" class="figure__close" @click="showModal = true">
          <img
            src="../../assets/img/delete.png"
            id="show-modal"
            @click="showModal = true"
            alt=""
          />
        </button>
      </td>
      <div class="figure-editor-mini">
        <router-link :to="`/product/${product_item.id}`" class="figure__editing"
          >Изменить</router-link
        >
        <button id="show-modal" class="figure__close" @click="showModal = true">
          Удалить
        </button>
      </div>
      <modalClient
        v-if="showModal"
        @close="showModal = false"
        v-bind:order_modal="product_item"
        @deleteClient="deleteClient(product_item)"
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
  name: "product-item",
  data() {
    return { showModal: false };
  },
  props: {
    product_item: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  computed: {
    ...mapGetters(["TOKEN"]),
  },
  components: {
    modalClient,
  },
  methods: {
    ...mapActions(["GET_PRODUCTS"]),
    click(item) {
      console.log(item);
    },
    deleteClient(product_item) {
      console.log("метод del table", product_item);
      this.$emit("deleteClient");
    },
  },
};
</script>

<style></style>
