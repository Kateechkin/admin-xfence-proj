<template>
  <div class="home">
    <div class="product-add">
      <div class="product-add__title">
        <h1>Добавление Новости</h1>
      </div>
      <form action="" method="POST">
        <div class="product-add__row">
          <div class="product-add__column">
            <p class="product-add__name">Артикль:</p>
            <h5>Артикль должен быть уникальным!</h5>
            <input
              type="text"
              id="article"
              class="product-add__input"
              v-model="id"
            />
          </div>
          <div class="product-add__column">
            <p class="product-add__name">Описание:</p>
            <textarea
              name="description"
              id="description"
              class="product-add__textarea"
              v-model="text"
            ></textarea>
            <div class="example-2">
              <div class="form-group">
                <p>Прикрепить изображение:</p>
                <input type="file" name="file" id="file" class="input-file" />
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
                </label>
              </div>
            </div>
          </div>
        </div>
        <div class="product__button">
          <input
            type="button"
            class="button-add"
            @click="newProduct(id, text)"
            value="Добавить"
          />
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "product-add",
  data() {
    return {
      id: "",
      text: "",
    };
  },
  methods: {
    newProduct(id, text) {
      axios
        .post("https://a0293cf7d5bc.ngrok.io/api", {
          database: "aquapriceplus",
          collection: "news",
          Document: {
            id: id,
            text: text,
          },
        })
        .then(() => {
          console.log("Все окей");
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
};
</script>

<style>
</style>