<template>
  <div class="home">
    <div class="product-add">
      <div class="breadcrumps">
        <router-link to="/clients"> <p>Назад</p></router-link>
      </div>
      <div class="product-add__title">
        <h1>Редактирование заказа</h1>
        <ClientAddItem v-bind:client="COSTUMERSID" />
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import ClientAddItem from "@/components/client-add-item.vue";
import { mapActions, mapGetters } from "vuex";
export default {
  name: "table-clients-add",
  data() {
    return {
      newprod: {},
      newindex: false,
    };
  },

  components: {
    ClientAddItem,
  },
  mounted() {
    localStorage.removeItem("costumersitem");
    axios
      .get(`https://f1297a1d5fdd.ngrok.io/companies/`, {
        headers: {
          Authorization: this.TOKEN,
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        console.log(response.data);
        this.product = response.data;
        this.$store.dispatch("GET_COSTUMERSITEM", this.product);
      })
      .catch((error) => {
        console.log(error);
        return error;
      });
  },
  computed: {
    ...mapGetters(["TOKEN"]),
    ...mapGetters(["COSTUMERSID"]),
  },
  methods: {
    ...mapActions(["GET_COSTUMERSITEM"]),
  },
};
</script>

<style></style>
