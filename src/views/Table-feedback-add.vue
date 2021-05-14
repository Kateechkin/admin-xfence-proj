<template>
  <div class="home">
    <div class="product-add">
      <div class="breadcrumps">
        <router-link to="/feedback"> <p>Назад</p></router-link>
      </div>
      <div class="product-add__title">
        <h1>Редактирование заказа</h1>
      </div>
      <form
        action=""
        method="PUT"
        id="form"
        v-if="CONTACTID"
        @submit.prevent="newProduct"
      >
        <div class="product-add__row">
          <div class="product-add__column">
            <p class="product-add__name">ФИО:</p>
            <input
              type="text"
              id="name"
              name="name"
              class="product-add__input"
              v-bind:value="CONTACTID.name"
            />
            <p class="product-add__name">Телефон:</p>
            <input
              type="text"
              id="phone"
              name="phone"
              class="product-add__input"
              v-bind:value="CONTACTID.phone"
            />
            <p class="product-add__name">Дата поступления заявки:</p>
            <input
              type="text"
              id="date"
              name="date"
              class="product-add__input"
              v-bind:value="CONTACTID.date"
            />
          </div>
          <!-- v-bind:value="CONTACTID.date" -->
          <!-- v-bind:value="new Date(CONTACTID.date).toLocaleDateString()" -->
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
  name: "table-feedback",
  data() {
    return {
      newprod: {},
      showModal: false,
    };
  },

  components: {
    modalOk,
  },
  mounted() {
    localStorage.removeItem("contactitem");
    axios
      .get(
        `https://admin.xfence.ru/api/admin/v1/contacts/${this.$route.params.id}`,

        {
          headers: {
            Authorization: this.TOKEN,
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        console.log(response.data);
        this.product = response.data;
        this.$store.dispatch("GET_CONTACTITEM", this.product);
      })
      .catch((error) => {
        console.log(error);
        return error;
      });
  },
  computed: {
    ...mapGetters(["TOKEN"]),
    ...mapGetters(["CONTACTID"]),
  },
  methods: {
    ...mapActions(["GET_CONTACTITEM"]),
    newProduct() {
      const forms = document.forms;
      console.log(forms);
      const formData = new FormData(forms[0]);
      this.newprod = [];
      for (let [name, value] of formData) {
        this.newprod = { ...this.newprod, [name]: value };
        console.log(this.newprod);
      }
      if (this.newprod) {
        axios
          .put(
            `https://admin.xfence.ru/api/admin/v1/contacts/${this.$route.params.id}`,
            {
              name: this.newprod.name,
              phone: this.newprod.phone,
              date: this.newprod.date,
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