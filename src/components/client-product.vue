<template>
  <div class="cart-order__wrap">
    <div class="cart-order__img">
      <img
        :src="`https://xfence.ru/img/${client_product.image} `"
        :alt="`${client_product.name}`"
      />
    </div>

    <div class="cart-order__info">
      <div class="cart-order__name">
        <p>{{ client_product.name }}</p>
      </div>

      <div class="cart-order__quantity">
        <div class="cart-item">
          <div class="cart-item__cross">
            <p>Цвет перекладин:</p>
            <div
              class="cart-item__color"
              :style="{ backgroundColor: styleObjectCross.backgroundColor }"
            ></div>
          </div>
          <div class="cart-item__barrels">
            <p>Цвет штакетник:</p>
            <div
              class="cart-item__color2"
              :style="{ backgroundColor: styleObjectBarrels.backgroundColor }"
            ></div>
          </div>
          <p class="cart-item__name">
            Кол-во cекций: <span>{{ client_product.section }}</span>
          </p>
        </div>
        <div class="cart-order__quantity">
          <p class="cart-item__name">
            Кол-во столбов: <span>{{ client_product.row }}</span>
          </p>
        </div>
        <div class="cart-item__barrels">
          <p>Цвет столбов:</p>
          <div
            class="cart-item__color3"
            :style="{ backgroundColor: styleObjectRow.backgroundColor }"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "client-products",
  props: {
    client_product: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  computed: {
    styleObjectCross() {
      return {
        backgroundColor: this.client_product.ColorCross,
      };
    },
    styleObjectBarrels() {
      return {
        backgroundColor: this.client_product.ColorBarrels,
      };
    },
    styleObjectRow() {
      return {
        backgroundColor: this.client_product.ColorRow,
      };
    },
  },
};
</script>

<style>
</style>