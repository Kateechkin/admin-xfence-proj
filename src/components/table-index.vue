<template>
  <tbody>
    <tr>
      <!-- <td><span>Id</span>{{ order_data.id }}</td> -->
      <td><span>ФИО</span>{{ order_data.name }}</td>
      <td><span>Email</span>{{ order_data.email }}</td>
      <td><span>Телефон</span>{{ order_data.phone }}</td>
      <!-- <td>{{ order_data.city }}</td> -->
      <td v-if="order_data.post === 'delivery'">
        <span>Способ доставки</span>Почта
      </td>
      <td v-if="order_data.post === 'pickup'">
        <span>Способ доставки</span>Самовывоз
      </td>
      <td><span>Цена заказа</span>{{ order_data.price }} ₽</td>
      <td><span>Дата</span> {{ formatDate(timezone) }}</td>

      <td>
        <span>Статус</span>
        <select
          class="status"
          id="colors"
          @change="onChangeSelectedTask"
          v-bind:class="changeBackground"
        >
          <option
            value="В обработке"
            :selected="order_data.status === 'В обработке'"
          >
            В обработке
          </option>
          <option
            value="Обработан"
            :selected="order_data.status === 'Обработан'"
          >
            Обработан
          </option>
          <option value="Отменено" :selected="order_data.status === 'Отменено'">
            Отменено
          </option>
        </select>
      </td>
    </tr>
  </tbody>
</template>

<script>
import axios from "axios";
export default {
  name: "table-clients",
  data() {
    return {
      costumers: [],
      renderComponent: true,
      // selectedTask: "",
      styleobj: {
        backgroundColor: "green",
        fontSize: 20,
      },
    };
  },
  props: {
    order_data: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  computed: {
    changeBackground: function() {
      return {
        info: this.order_data.status === "В обработке",
        success: this.order_data.status === "Обработан",
        danger: this.order_data.status === "Отменено",
      };
    },
    timezone: function() {
      let a = this.order_data.date.replace(/ /g, "T");
      const d = new Date(a);
      let time = (d.getTimezoneOffset() / 60) * -1;
      let utc = d.getTime() + time;
      return new Date(utc + time * 3600000);
    },
  },
  methods: {
    formatDate(date) {
      return (
        date.getFullYear() +
        "." +
        (date.getMonth() + 1) +
        "." +
        date.getDate() +
        " " +
        date.getHours() +
        ":" +
        date.getMinutes() +
        ":" +
        date.getSeconds()
      );
    },
    onChangeSelectedTask: function() {
      let objSel = document.getElementById("colors").value;
      console.log(objSel);
      axios
        .put("https://admin.xfence.ru/api/admin/v1/orders/", {
          Filter: {
            id: this.order_data.id,
          },
          DataToBeUpdated: {
            id: this.order_data.id,
            status: objSel,
          },
        })
        .then(() => {
          console.log("Все окей");
        })
        .catch((error) => {
          console.error(error);
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
          popupLink.addEventListener("click", function(e) {
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
          el.addEventListener("click", function(e) {
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
          curentPopup.addEventListener("click", function(e) {
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
        setTimeout(function() {
          unlock = true;
        }, timeout);
      }

      function bodyUnLock() {
        setTimeout(function() {
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
        setTimeout(function() {
          unlock = true;
        }, timeout);
      }

      document.addEventListener("keydown", function(e) {
        if (e.which === 27) {
          const popupActive = document.querySelector(".popup.open");
          popupClose(popupActive);
        }
      });

      (function() {
        // проверяем поддержку
        if (!Element.prototype.closest) {
          // реализуем
          Element.prototype.closest = function(css) {
            var node = this;
            while (node) {
              if (node.matches(css)) return node;
              else node = node.parentElement;
            }
            return null;
          };
        }
      })();
      (function() {
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
    openContact(order_data) {
      // localStorage.setItem("costumers", JSON.stringify(this.order_data));
      console.log(this.order_data);
      localStorage.removeItem("costumers");
      this.costumers.splice(order_data, 1);
      this.costumers.push({
        id: order_data._id,
        name: order_data.name,
        surname: order_data.surn,
        email: order_data.email,
        phone: order_data.phone,
        cart: order_data.cart,
        price: order_data.price,
        date: order_data.date,
        status: order_data.status,
      });
      localStorage.setItem("costumers", JSON.stringify(this.costumers));
      console.log(JSON.stringify(this.costumers));
      // Загрузим массив из localStorage
      const costumers = JSON.parse(localStorage.getItem("costumers"));

      this.$router.push({ path: `/clients/${order_data._id}` });
      document.getElementById("name_order").value = costumers[0].name;
      document.getElementById("surname_order").value = costumers[0].surname;
      document.getElementById("email_order").value = costumers[0].email;
      document.getElementById("phone_order").value = costumers[0].phone;
      // for (var i = 0; i < costumers[0].cart.length i++) {
      //   console.log(costumers[0].cart);
      // }
      costumers[0].cart.forEach(
        (element) => (
          (document.getElementById("cart_order").value = element.name),
          console.log(element),
          console.log(document.getElementById("cart_order").value)
        )
      );
      document.getElementById("price_order").value = costumers[0].price;
      document.getElementById("date_order").value = costumers[0].date;
      document.getElementById("status_order").value = costumers[0].status;
    },
  },
};
</script>

<style></style>
