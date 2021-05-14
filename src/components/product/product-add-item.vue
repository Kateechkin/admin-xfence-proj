<template>
  <form action="" method="PUT" id="form" @submit.prevent="newProduct">
    <div class="product-add__row">
      <div class="product-add__column">
        <p class="product-add__name">Артикль:</p>
        <h5>Артикль должен быть уникальным!</h5>

        <input
          type="text"
          name="article"
          id="article"
          class="product-add__input"
          v-bind:value="product.article"
        />

        <p class="product-add__name">Название:</p>
        <input
          type="text"
          id="name"
          name="name"
          class="product-add__input"
          v-bind:value="product.name"
        />
        <p class="product-add__name">Цена:</p>
        <input
          type="text"
          id="price"
          name="price"
          class="product-add__input"
          v-bind:value="product.price"
        />
        <p class="product-add__name">Раздел:</p>
        <select class="product-add__select" id="section" name="section">
          <option value="fence" :selected="product.section === 'fence'">
            Секция
          </option>
          <option value="goal" :selected="product.section === 'goal'">
            Ворота
          </option>
          <option value="wicket" :selected="product.section === 'wicket'">
            Калитка
          </option>
        </select>
        <!-- <input
          type="text"
          id="performance"
          name="performance"
          class="product-add__input"
          v-bind:value="product.section"
        /> -->
        <p class="product-add__name">Категория:</p>
        <select class="product-add__select" id="category" name="category">
          <option value="standart" :selected="product.category === 'standart'">
            Standart
          </option>
          <option value="guard" :selected="product.category === 'guard'">
            Guard
          </option>
          <option value="prestige" :selected="product.category === 'prestige'">
            Prestige
          </option>
        </select>
        <!-- <input
          type="text"
          id="performance"
          name="performance"
          class="product-add__input"
          v-bind:value="product.section"
        /> -->
      </div>
      <div class="product-add__column">
        <p class="product-add__name">Описание:</p>

        <textarea
          name="description"
          id="description"
          class="product-add__textarea"
          v-bind:value="product.description"
        ></textarea>
        <div class="example-2">
          <div class="form-group">
            <p>Прикрепить изображение:</p>
            <h5>Не забывайте расширение!</h5>

            <input
              type="text"
              name="image"
              id="image"
              class="product-add__input"
              v-bind:value="product.image"
            />

            <!-- <input type="file" name="file" id="file" class="input-file" />
            <label for="file" class="btn btn-tertiary js-labelFile">
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="download"
                class="svg-inline--fa fa-download fa-w-16"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M216 0h80c13.3 0 24 10.7 24 24v168h87.7c17.8 0 26.7 21.5 14.1 34.1L269.7 378.3c-7.5 7.5-19.8 7.5-27.3 0L90.1 226.1c-12.6-12.6-3.7-34.1 14.1-34.1H192V24c0-13.3 10.7-24 24-24zm296 376v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h146.7l49 49c20.1 20.1 52.5 20.1 72.6 0l49-49H488c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z"
                ></path>
              </svg>
              <span class="js-fileName">Загрузить файл</span>
            </label>-->
          </div>
        </div>
        <!-- <div class="form__cross">
          <p>Цвет перекладины:</p>
          <div class="form__input">
            <template
              v-for="colors in styleObjectCross.backgroundColor"
              :key="colors.id"
            >
              <label class="checkbox-other">
                <input
                  type="checkbox"
                  id="checkbox-id"
                  name="formCross"
                  v-bind:checked="colors.colorCross"
                  v-bind:value="colors.id"
                />
                <span
                  for="checkbox-id"
                  class="span"
                  :style="{ backgroundColor: colors.colorCross }"
                ></span>
              </label>
            </template>
          </div>
        </div>
        <div class="form__barr">
          <div class="form__cross">
            <p>Цвет штакетник:</p>
            <div class="form__input">
              <template
                v-for="colors in styleObjectBarrels.backgroundColor"
                :key="colors.id"
              >
                <label class="checkbox-other">
                  <input
                    type="checkbox"
                    id="checkbox-id"
                    name="formBarrels"
                    v-bind:checked="colors.colorBarrels"
                    v-bind:value="colors.id"
                  />
                  <span
                    for="checkbox-id"
                    class="span"
                    :style="{ backgroundColor: colors.colorBarrels }"
                  ></span>
                </label>
              </template>
            </div>
          </div>
        </div>
        <div class="form__colorrow">
          <div class="form__cross">
            <p>Цвет столбов:</p>
            <div class="form__input">
              <template
                v-for="colors in styleObjectRow.backgroundColor"
                :key="colors.id"
              >
                <label class="checkbox-other">
                  <input
                    type="checkbox"
                    id="checkbox-id"
                    name="formRow"
                    v-bind:checked="colors.colorRow"
                    v-bind:value="colors.id"
                  />
                  <span
                    for="checkbox-id"
                    class="span"
                    :style="{ backgroundColor: colors.colorRow }"
                  ></span>
                </label>
              </template>
            </div>
          </div>
        </div> -->

        <!-- <p class="product-add__namecateg">Категория товара:</p> -->
        <!-- <div class="check">
              <div class="checkbox">
                <label class="custom-checkbox">
                  <input
                    type="radio"
                    name="category"
                    id="checkbox-id-hone"
                    value="forHome"
                    :checked="product.category === 'forHome'"
                  />
                  <span for="checkbox-id">Для дома</span>
                </label>
                <label class="custom-checkbox">
                  <input
                    type="radio"
                    name="category"
                    id="checkbox-id-company"
                    value="forCompany"
                    :checked="product.category === 'forCompany'"
                  />
                  <span for="checkbox-id">Для предприятия</span>
                </label>
              </div>
            </div> -->
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
import modalOk from "@/components/modal/modal-ok.vue";
import axios from "axios";
export default {
  name: "product-add-item",
  data() {
    return {
      newprod: [],
      showModal: false,
    };
  },
  props: {
    product: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  components: {
    modalOk,
  },
  methods: {
    newProduct() {
      const forms = document.forms;
      console.log(forms);
      const formData = new FormData(forms[0]);
      this.newprod = [];
      for (let [name, value] of formData) {
        this.newprod = { ...this.newprod, [name]: value };

        //   console.log(`${name}: ${value}`);
      }
      if (this.newprod) {
        console.log(this.newprod);
        axios
          .put(
            `https://admin.xfence.ru/api/admin/v1/product/${this.$route.params.id}`,
            {
              article: this.newprod.article,
              name: this.newprod.name,
              price: this.newprod.price,
              section: this.newprod.section,
              description: this.newprod.description,
              category: this.newprod.category,
              image: this.newprod.image,
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
  computed: {
    styleObjectCross() {
      return {
        backgroundColor: this.product.formCross,
      };
    },
    styleObjectBarrels() {
      return {
        backgroundColor: this.product.formBarrels,
      };
    },
    styleObjectRow() {
      return {
        backgroundColor: this.product.formRow,
      };
    },
  },
};
</script>

<style>
</style>