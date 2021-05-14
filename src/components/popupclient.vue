<template>
  <div id="popup" class="popup">
    <div class="popup__body">
      <div class="popup__content">
        <div class="popup__title">
          <p class="popup-name">Вы действительно хотите удалить заказ?</p>
          <a href="#" class="popup__close close-popup"
            ><img src="../assets/img/cross.png" alt=""
          /></a>
          <div class="popup-btn">
            {{ order_pop.id }}
            <input
              type="button"
              class="button-5"
              @click="deleteClient(order_data)"
            />
            <input type="button" value="Нет" class="button-5" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "popup-client",
  props: {
    order_pop: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {
    deleteClient(order_data) {
      console.log("метод del", order_data);
      // console.log(this.costumers);
      this.$emit("deleteClient");
      // var data = JSON.stringify({
      //   database: "xfence",
      //   collection: "orders",
      //   Filter: {
      //     id: this.costumers.id,
      //   },
      // });

      // var config = {
      //   method: "delete",
      //   url: "https://a0293cf7d5bc.ngrok.io/api",
      //   headers: {
      //     Authorization: this.TOKEN,
      //     //   "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjoiU2xhdmEiLCJleHAiOjE2MDYxNTUyODV9.Rgtl6miC-0i_18FpJV30LfuL0MY64aL2VmbSeVmMvfs",
      //     // "Content-Type": "application/json",
      //   },
      //   data: data,
      // };

      // axios(config)
      //   .then(function (response) {
      //     console.log(JSON.stringify(response.data));
      //   })
      //   .catch(function (error) {
      //     console.log(error);
      //   });
    },
  },
};
</script>

<style>
</style>