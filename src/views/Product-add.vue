<template>
  <div class="home">
    <div class="product-add">
      <div class="breadcrumps">
        <router-link to="/product"> <p>Назад</p></router-link>
      </div>
      <div class="product-add__title">
        <h1>Редактирование товара</h1>
      </div>
      <ProductAddItem v-bind:product="PRODUCTID" />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import ProductAddItem from "@/components/product/product-add-item.vue";
import { mapActions, mapGetters } from "vuex";
export default {
  name: "product-add",
  data() {
    return {
      newarticle: "",
      newname: "",
      newprice: "",
      newperformance: "",
      newdescription: "",
      newcheckfh: "",
      newprod: {},
      newindex: false,
      database: { database: "aquapriceplus", collection: "products" },
      category: [
        { name: "Для дома", value: "forHome" },
        { name: "Для предприятия", value: "forCompany" },
      ],
    };
  },

  components: {
    ProductAddItem,
  },
  mounted() {
    localStorage.removeItem("productitem");
    axios
      .get(
        `https://admin.xfence.ru/api/admin/v1/product/${this.$route.params.id}`,

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
        this.$store.dispatch("GET_PRODUCTITEM", this.product);
      })
      .catch((error) => {
        console.log(error);
        return error;
      });
  },
  computed: {
    ...mapGetters(["TOKEN"]),
    ...mapGetters(["PRODUCTID"]),
  },
  methods: {
    ...mapActions(["GET_PRODUCTITEM"]),
    // newProduct() {
    //   const forms = document.forms;
    //   console.log(forms);
    //   const formData = new FormData(forms[0]);
    //   this.newprod = [];
    //   for (let [name, value] of formData) {
    //     this.newprod = { ...this.newprod, [name]: value };
    //     console.log(this.newprod);
    //   }
    //   if (this.newprod) {
    //     console.log(this.newprod.id), console.log(this.newprod.name);
    //     console.log(this.newprod.price);
    //     console.log(this.newprod.performance);
    //     console.log(this.newprod.description);
    //     console.log(this.newprod.category);
    //     console.log(this.newprod.isonindex);

    //     axios
    //       .put("https://a0293cf7d5bc.ngrok.io/api", {
    //         database: "xfence",
    //         collection: "products",
    //         Filter: {
    //           article: this.PRODUCTID.article,
    //         },
    //         DataToBeUpdated: {
    //           id: this.newprod.id,
    //           name: this.newprod.name,
    //           price: this.newprod.price,
    //           performance: this.newprod.performance,
    //           description: this.newprod.description,
    //           category: this.newprod.category,
    //           isonindex: this.newprod.isonindex,
    //         },
    //       })
    //       .then(() => {
    //         console.log("Все окей");
    //       })
    //       .catch((error) => {
    //         console.error(error);
    //       });
    //   }
    // },
  },
};
</script>

<style>
</style>