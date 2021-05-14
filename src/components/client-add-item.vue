<template>
  <form action="" method="PUT" id="form" @submit.prevent="newProduct">
    <div class="product-add__row">
      <div class="product-add__column">
        <p class="product-add__subtitle" v-if="client.city">
          {{ identification.entities }}
        </p>
        <p class="product-add__subtitle" v-else>
          {{ identification.individuals }}
        </p>
        <p class="product-add__name">ФИО:</p>
        <input
          type="text"
          id="name"
          name="name"
          class="product-add__input"
          v-bind:value="client.name"
        />
        <p class="product-add__name">Телефон:</p>
        <input
          type="text"
          id="phone"
          name="phone"
          class="product-add__input"
          v-bind:value="client.phone"
        />
        <p class="product-add__name">Email:</p>
        <input
          type="text"
          id="mail"
          name="email"
          class="product-add__input"
          v-bind:value="client.email"
        />
        <div class="entity" v-if="client.city">
          <p class="product-add__subtitle">Данные юридического лица:</p>
          <p class="product-add__name">Название компании:</p>
          <input
            type="text"
            id="city"
            name="company"
            class="product-add__input"
            v-bind:value="client.company"
          />
          <p class="product-add__name">Юридический адрес:</p>
          <input
            type="text"
            id="city"
            name="address"
            class="product-add__input"
            v-bind:value="client.address"
          />
          <p class="product-add__name">ИНН:</p>
          <input
            type="text"
            id="city"
            name="inn"
            class="product-add__input"
            v-bind:value="client.inn"
          />
          <p class="product-add__name">КПП:</p>
          <input
            type="text"
            id="city"
            name="kpp"
            class="product-add__input"
            v-bind:value="client.kpp"
          />
          <p class="product-add__name">БИК:</p>
          <input
            type="text"
            id="city"
            name="bik"
            class="product-add__input"
            v-bind:value="client.bik"
          />
          <p class="product-add__name">Расчетный счет:</p>
          <input
            type="text"
            id="city"
            name="scope"
            class="product-add__input"
            v-bind:value="client.scope"
          />
        </div>
      </div>
      <div class="product-add__column">
        <div class="product-add-product">
          <ClientProduct
            v-for="product in client.product"
            :key="product.id"
            v-bind:client_product="product"
          />
        </div>

        <p class="product-add__name">Дата заказа:</p>
        <input
          type="text"
          id="date"
          name="date"
          class="product-add__input"
          v-bind:value="client.date"
        />
        <!-- v-bind:value="client.date" -->
        <p class="product-add__name">Итоговая сумма:</p>
        <input
          type="text"
          id="price"
          name="price"
          class="product-add__input"
          v-bind:value="client.price"
        />

        <p class="product-add__namecateg">Способ доставки:</p>
        <div class="check">
          <div class="checkbox">
            <label class="custom-checkbox">
              <input
                type="radio"
                name="post"
                id="checkbox-id-hone"
                value="pickup"
                :checked="client.post === 'pickup'"
              />
              <span for="checkbox-id">Самовывоз</span>
            </label>
            <label class="custom-checkbox">
              <input
                type="radio"
                name="post"
                id="checkbox-id-company"
                value="delivery"
                :checked="client.post === 'delivery'"
              />
              <span for="checkbox-id">Доставка</span>
            </label>
          </div>
        </div>
        <div class="" v-if="client.city">
          <p class="product-add__subtitle">Доставка:</p>
          <p class="product-add__name">Страна заказчика:</p>
          <input
            type="text"
            id="city"
            name="country"
            class="product-add__input"
            v-bind:value="client.country"
          />
          <p class="product-add__name">Город заказчика:</p>
          <input
            type="text"
            id="city"
            name="city"
            class="product-add__input"
            v-bind:value="client.city"
          />
          <p class="product-add__name">Адрес заказчика:</p>
          <input
            type="text"
            id="city"
            name="addresspost"
            class="product-add__input"
            v-bind:value="client.addresspost"
          />
          <div class="comment" v-if="client.comment">
            <p class="product-add__name">Комментарий к заказу:</p>
            <input
              type="text"
              id="city"
              name="comment"
              class="product-add__input"
              v-bind:value="client.comment"
            />
          </div>
        </div>
        <p class="product-add__namecateg">Способ оплаты:</p>
        <div class="check">
          <div class="checkbox">
            <label class="custom-checkbox">
              <input
                type="radio"
                name="pay"
                id="checkbox-cart"
                value="cart"
                :checked="client.pay === 'cart'"
              />
              <span for="checkbox-id">Онлайн</span>
            </label>
            <label class="custom-checkbox">
              <input
                type="radio"
                name="pay"
                id="checkbox-cash"
                value="cash"
                :checked="client.pay === 'cash'"
              />
              <span for="checkbox-id">Наличные</span>
            </label>
          </div>
        </div>
      </div>
    </div>
    <div class="product__button">
      <input type="submit" class="button-add" value="Редактировать" />
    </div>
    <modalOk
      v-if="showModal"
      @close="showModal = false"
      v-bind:order_modal_ok="colors_item"
    >
    </modalOk>
  </form>
</template>

<script>
import axios from "axios";
import ClientProduct from "@/components/client-product.vue";
import modalOk from "@/components/modal/modal-ok.vue";
import { mergeProps } from "vue";
export default {
  name: "client-add-item",
  data() {
    return {
      identification: {
        entities: "Юридичесоке лицо",
        individuals: "Физическое лицо",
      },
      showModal: false,
      newprod: [],
    };
  },
  props: {
    client: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  components: {
    ClientProduct,
    modalOk,
  },

  methods: {
    newProduct() {
      const forms = document.forms;
      const formData = new FormData(forms[0]);
      this.newprod = [];
      for (let [name, value] of formData) {
        this.newprod = { ...this.newprod, [name]: value };
        console.log(this.newprod);
      }
      if (this.newprod.post === "delivery") {
        axios
          .put(
            `https://admin.xfence.ru/api/admin/v1/orders/${this.client.id}`,
            {
              id: this.client.id,
              name: this.newprod.name,
              email: this.newprod.email,
              city: this.newprod.city,
              phone: this.newprod.phone,
              pay: this.newprod.pay,
              price: this.newprod.price,
              post: this.newprod.post,
              date: this.newprod.date,
              city: this.newprod.date,
              country: this.newprod.country,
              addresspost: this.newprod.addresspost,
            }
          )
          .then(() => {
            this.showModal = true;
            console.log("Запрос на deliveru");
          })
          .catch((error) => {
            console.error(error);
          });
      } else if (this.newprod.company) {
        axios
          .put(
            `https://admin.xfence.ru/api/admin/v1/orders/${this.client.id}`,
            {
              id: this.client.id,
              name: this.newprod.name,
              email: this.newprod.email,
              city: this.newprod.city,
              phone: this.newprod.phone,
              company: this.newprod.company,
              address: this.newprod.address,
              inn: this.newprod.inn,
              kpp: this.newprod.inn,
              bik: this.newprod.bik,
              scope: this.newprod.scope,
              pay: this.newprod.pay,
              price: this.newprod.price,
              post: this.newprod.post,
              date: this.newprod.date,
              city: this.newprod.city,
              country: this.newprod.country,
              addresspost: this.newprod.addresspost,
            }
          )
          .then(() => {
            this.showModal = true;
            console.log("Запрос на юр лицо");
          })
          .catch((error) => {
            console.error(error);
          });
      } else {
        axios
          .put(
            `https://admin.xfence.ru/api/admin/v1/orders/${this.client.id}`,
            {
              id: this.client.id,
              name: this.newprod.name,
              email: this.newprod.email,
              city: this.newprod.city,
              phone: this.newprod.phone,
              pay: this.newprod.pay,
              price: this.newprod.price,
              post: this.newprod.post,
              date: this.newprod.date,
            }
          )
          .then(() => {
            this.showModal = true;
            console.log("Иначе");
          })
          .catch((error) => {
            console.error(error);
          });
      }
    },
  },
};
</script>

<style></style>
