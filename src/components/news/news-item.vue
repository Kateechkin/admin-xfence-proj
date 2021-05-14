<template>
  <tbody>
    <tr>
      <td>{{ news_item.id }}</td>
      <td>{{ news_item.text }}</td>
      <td class="figure__td">
        <a href="#popup" class="popup-link figure__close"
          ><img src="../../assets/img/delete.png" alt="" @click="popup()"
        /></a>
        <router-link :to="`/news/${news_item.id}`" class="figure__editing"
          ><img src="../../assets/img/editing.png" alt=""
        /></router-link>
      </td>
    </tr>
  </tbody>
  <!-- <div class="">
    <div class="product__column">
      <div class="product__item">
        <a href="#popup" @click="openProduct(product_item)"> -->

  <!-- <figure class="product__fig figure">
            <a
              href="#popup3"
              class="figure__close"
              @click="openProduct(product_item)"
              ><img src="../../assets/img/bur-cross.png" alt=""
            /></a>
            <p class="figure__img">ТУТ КАРТИНКА</p> -->
  <!-- <img :src="require('../assets/img/' + product.img)" alt="img" /> -->
  <!-- <figcaption class="figure__fig">
              <div class="figure__title">
                <span>{{ product_item.article }}</span>
                <p class="figure__name">{{ product_item.name }}</p>
              </div>
              <div class="figure__price">
                <p class="figure__p">Цена: {{ product_item.price }}</p>
              </div>
              <div class="figure__description">
                <p class="figure__p">
                  Описание: {{ product_item.description }}
                </p>
                <p class="figure__p">
                  Производительность: {{ product_item.performance }}
                </p>
                <p class="figure__p">
                  Товар из категории "Для дома" {{ product_item.isforhome }}
                </p>
                <p class="figure__p">
                  Отображен ли товар на главной странице?<br />
                  {{ product_item.isonindex }}
                </p>
              </div>
            </figcaption>
          </figure>
        </a>
      </div>
    </div> -->
  <div id="popup" class="popup">
    <div class="popup__body">
      <div class="popup__content">
        <div class="popup__title">
          <p class="popup-name">Вы действительно хотите удалить новость?</p>
          <a href="#" class="popup__close close-popup"
            ><img src="../../assets/img/cross.png" alt=""
          /></a>
          <div class="popup-btn">
            <input
              type="button"
              value="Да"
              class="button-5"
              @click="deleteProduct(news_item)"
            />
            <input type="button" value="Нет" class="button-5" />
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- <div id="popup" class="popup">
      <a href="#header" class="popup__area"></a>
      <div class="popup__body">
        <div class="popup__content">
          <div class="popup__title">
            <h3>Редактирование товара:</h3>
            <a href="#" class="popup__close"
              ><img src="../../assets/img/cross.png" alt=""
            /></a>
          </div>
          <div class="popup__text">
            <form action="" method="PUT">
              <p>Артикль:</p>
              <input type="text" id="article" value="" />
              <p>Название:</p>
              <input type="text" id="name" value="" />
              <p>Цена:</p>
              <input type="text" id="price" value="" />
              <p>Производительность:</p>
              <input type="text" id="performance" value="" />
              <p>Описание:</p>
              <textarea name="description" id="description" value=""></textarea>
              <p>Товар для дома?</p>
              <h6>Если нет,оставьте поле пустым!</h6>

              <div class="check">
                <div class="checkbox">
                  <label class="custom-checkbox">
                    <input
                      type="checkbox"
                      name="isforhome"
                      value="true"
                      id="isforhome"
                    />
                    <span>Да</span>
                  </label>
                </div>
                <div class="checkbox">
                  <label class="custom-checkbox">
                    <input
                      type="checkbox"
                      name="isforhome"
                      value="false"
                      id="isforhome"
                    />
                    <span>Нет</span>
                  </label>
                </div>
              </div>

              <p>Отобразить товар на главной странице?</p>
              <h6>Если нет,оставьте поле пустым!</h6>
              <div class="check">
                <div class="checkbox">
                  <label class="custom-checkbox">
                    <input
                      type="checkbox"
                      name="isonindex"
                      value="true"
                      id="isonindex"
                    />
                    <span>Да</span>
                  </label>
                </div>
                <div class="checkbox">
                  <label class="custom-checkbox">
                    <input
                      type="checkbox"
                      name="isonindex"
                      value="false"
                      id="isonindex"
                    />
                    <span>Нет</span>
                  </label>
                </div>
              </div>

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
              <div class="product__button">
                <input
                  type="button"
                  class="button-4"
                  @click="
                    changeProduct(
                      article,
                      name,
                      price,
                      performance,
                      description,
                      isforhome,
                      isonindex
                    )
                  "
                  value="Oтправить"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div> -->
  <!-- </div> -->
</template>

<script>
import axios from "axios";
import { mapActions, mapGetters } from "vuex";
export default {
  name: "product-item",
  data() {
    return {
      newprod: [],
      article: "",
      text: "",
    };
  },
  props: {
    news_item: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  computed: {
    ...mapGetters(["TOKEN"]),
  },
  methods: {
    deleteProduct(news_item) {
      console.log(news_item);
      var data = JSON.stringify({
        database: "aquapriceplus",
        collection: "news",
        Filter: {
          id: news_item.id,
        },
      });

      var config = {
        method: "delete",
        url: "https://a0293cf7d5bc.ngrok.io/api",
        headers: {
          Authorization:
            "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjoiU2xhdmEiLCJleHAiOjE2MDYxNTUyODV9.Rgtl6miC-0i_18FpJV30LfuL0MY64aL2VmbSeVmMvfs",
          "Content-Type": "application/json",
        },
        data: data,
      };

      axios(config)
        .then(function (response) {
          console.log(JSON.stringify(response.data));
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    popup() {
      const popupLinks = document.querySelectorAll(".popup-link");
      const body = document.querySelector("body");
      const lockPadding = document.querySelectorAll(".lock-padding");

      let unlock = true;

      const timeout = 800;

      if (popupLinks.length > 0) {
        for (let index = 0; index < popupLinks.length; index++) {
          const popupLink = popupLinks[index];
          popupLink.addEventListener("click", function (e) {
            const popupName = popupLink.getAttribute("href").replace("#", "");
            const curentPopup = document.getElementById(popupName);
            popupOpen(curentPopup);
            e.preventDefault();
          });
        }
      }
      const popupCloseIcon = document.querySelectorAll(".close-popup");
      if (popupCloseIcon.length > 0) {
        for (let index = 0; index < popupCloseIcon.length; index++) {
          const el = popupCloseIcon[index];
          el.addEventListener("click", function (e) {
            popupClose(el.closest(".popup"));
            e.preventDefault();
          });
        }
      }

      function popupOpen(curentPopup) {
        if (curentPopup && unlock) {
          const popupActive = document.querySelector(".popup.open");
          if (popupActive) {
            popupClose(popupActive, false);
          } else {
            bodyLock();
          }
          curentPopup.classList.add("open");
          curentPopup.addEventListener("click", function (e) {
            if (!e.target.closest(".popup__content")) {
              popupClose(e.target.closest(".popup"));
            }
          });
        }
      }

      function popupClose(popupActive, doUnlock = true) {
        if (unlock) {
          popupActive.classList.remove("open");
          if (doUnlock) {
            bodyUnLock();
          }
        }
      }

      function bodyLock() {
        const lockPaddingValue =
          window.innerWidth -
          document.querySelector(".wrapperapp").offsetWidth +
          "px";

        if (lockPadding.length > 0) {
          for (let index = 0; index < lockPadding.length; index++) {
            const el = lockPadding[index];
            el.style.paddingRight = lockPaddingValue;
          }
        }
        body.style.paddingRight = lockPaddingValue;
        body.classList.add("lock");

        unlock = false;
        setTimeout(function () {
          unlock = true;
        }, timeout);
      }

      function bodyUnLock() {
        setTimeout(function () {
          if (lockPadding.length > 0) {
            for (let index = 0; index < lockPadding.length; index++) {
              const el = lockPadding[index];
              el.style.paddingRight = "0px";
            }
          }
          body.style.paddingRight = "0px";
          body.classList.remove("lock");
        }, timeout);

        unlock = false;
        setTimeout(function () {
          unlock = true;
        }, timeout);
      }

      document.addEventListener("keydown", function (e) {
        if (e.which === 27) {
          const popupActive = document.querySelector(".popup.open");
          popupClose(popupActive);
        }
      });

      (function () {
        // проверяем поддержку
        if (!Element.prototype.closest) {
          // реализуем
          Element.prototype.closest = function (css) {
            var node = this;
            while (node) {
              if (node.matches(css)) return node;
              else node = node.parentElement;
            }
            return null;
          };
        }
      })();
      (function () {
        // проверяем поддержку
        if (!Element.prototype.matches) {
          // определяем свойство
          Element.prototype.matches =
            Element.prototype.matchesSelector ||
            Element.prototype.webkitMatchesSelector ||
            Element.prototype.mozMatchesSelector ||
            Element.prototype.msMatchesSelector;
        }
      })();
    },
  },
};
</script>

<style>
</style>