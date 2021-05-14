<template>
  <div class="sidebar">
    <div class="sidebar-wrapper" id="sidebar-wrap">
      <div class="sidebar sidebar-static">
        <div class="sidebar__header" id="logo">
          <router-link to="/"
            ><img
              src="../assets/img/logo.png"
              alt=""
              id="imglogo"
              @click="openmenu()"
          /></router-link>
        </div>
        <div
          class="header__bar-mini"
          id="burger"
          @click="openmenu()"
          v-bind:class="{ close: isActive }"
        >
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="bars"
            class="svg-inline--fa fa-bars fa-w-14"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path
              fill="white"
              d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
            ></path>
          </svg>
        </div>
        <div class="sidebar__nav">
          <ul class="nav">
            <router-link to="/"
              ><li class="nav__item">
                <a href="" class="nav__link" @click="openmenu()"
                  ><span class="nav__icon"
                    ><svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="home"
                      class="svg-inline--fa fa-home fa-w-18"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 576 512"
                    >
                      <path
                        fill="currentColor"
                        d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"
                      ></path></svg
                  ></span>
                  Главная</a
                >
              </li></router-link
            >
            <router-link to="/product"
              ><li class="nav__item">
                <a href="" class="nav__link" @click="openmenu()"
                  ><span class="nav__icon"
                    ><svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fab"
                      data-icon="product-hunt"
                      class="svg-inline--fa fa-product-hunt fa-w-16"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path
                        fill="currentColor"
                        d="M326.3 218.8c0 20.5-16.7 37.2-37.2 37.2h-70.3v-74.4h70.3c20.5 0 37.2 16.7 37.2 37.2zM504 256c0 137-111 248-248 248S8 393 8 256 119 8 256 8s248 111 248 248zm-128.1-37.2c0-47.9-38.9-86.8-86.8-86.8H169.2v248h49.6v-74.4h70.3c47.9 0 86.8-38.9 86.8-86.8z"
                      ></path></svg
                  ></span>
                  Товары</a
                >
              </li></router-link
            >
            <router-link to="/colors"
              ><li class="nav__item">
                <a href="" class="nav__link" @click="openmenu()">
                  <span class="nav__icon"
                    ><svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="palette"
                      class="svg-inline--fa fa-palette fa-w-16"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path
                        fill="currentColor"
                        d="M204.3 5C104.9 24.4 24.8 104.3 5.2 203.4c-37 187 131.7 326.4 258.8 306.7 41.2-6.4 61.4-54.6 42.5-91.7-23.1-45.4 9.9-98.4 60.9-98.4h79.7c35.8 0 64.8-29.6 64.9-65.3C511.5 97.1 368.1-26.9 204.3 5zM96 320c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm32-128c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm128-64c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm128 64c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32z"
                      ></path></svg
                  ></span>
                  Цвета</a
                >
              </li></router-link
            >
            <router-link to="/clients"
              ><li class="nav__item">
                <a href="" class="nav__link" @click="openmenu()"
                  ><span class="nav__icon"
                    ><svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="male"
                      class="svg-inline--fa fa-male fa-w-6"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 192 512"
                    >
                      <path
                        fill="currentColor"
                        d="M96 0c35.346 0 64 28.654 64 64s-28.654 64-64 64-64-28.654-64-64S60.654 0 96 0m48 144h-11.36c-22.711 10.443-49.59 10.894-73.28 0H48c-26.51 0-48 21.49-48 48v136c0 13.255 10.745 24 24 24h16v136c0 13.255 10.745 24 24 24h64c13.255 0 24-10.745 24-24V352h16c13.255 0 24-10.745 24-24V192c0-26.51-21.49-48-48-48z"
                      ></path></svg
                  ></span>
                  Клиенты</a
                >
              </li></router-link
            >
            <router-link to="/feedback"
              ><li class="nav__item">
                <a href="" class="nav__link" @click="openmenu()"
                  ><span class="nav__icon"
                    ><svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="id-card"
                      class="svg-inline--fa fa-id-card fa-w-18"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 576 512"
                    >
                      <path
                        fill="currentColor"
                        d="M528 32H48C21.5 32 0 53.5 0 80v16h576V80c0-26.5-21.5-48-48-48zM0 432c0 26.5 21.5 48 48 48h480c26.5 0 48-21.5 48-48V128H0v304zm352-232c0-4.4 3.6-8 8-8h144c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8H360c-4.4 0-8-3.6-8-8v-16zm0 64c0-4.4 3.6-8 8-8h144c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8H360c-4.4 0-8-3.6-8-8v-16zm0 64c0-4.4 3.6-8 8-8h144c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8H360c-4.4 0-8-3.6-8-8v-16zM176 192c35.3 0 64 28.7 64 64s-28.7 64-64 64-64-28.7-64-64 28.7-64 64-64zM67.1 396.2C75.5 370.5 99.6 352 128 352h8.2c12.3 5.1 25.7 8 39.8 8s27.6-2.9 39.8-8h8.2c28.4 0 52.5 18.5 60.9 44.2 3.2 9.9-5.2 19.8-15.6 19.8H82.7c-10.4 0-18.8-10-15.6-19.8z"
                      ></path></svg
                  ></span>
                  Обратная связь</a
                >
              </li></router-link
            >
            <router-link to="/photo"
              ><li class="nav__item">
                <a href="" class="nav__link" @click="openmenu()">
                  <span class="nav__icon">
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="far"
                      data-icon="image"
                      class="svg-inline--fa fa-image fa-w-16"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path
                        fill="#fff"
                        d="M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm-6 336H54a6 6 0 0 1-6-6V118a6 6 0 0 1 6-6h404a6 6 0 0 1 6 6v276a6 6 0 0 1-6 6zM128 152c-22.091 0-40 17.909-40 40s17.909 40 40 40 40-17.909 40-40-17.909-40-40-40zM96 352h320v-80l-87.515-87.515c-4.686-4.686-12.284-4.686-16.971 0L192 304l-39.515-39.515c-4.686-4.686-12.284-4.686-16.971 0L96 304v48z"
                      ></path>
                    </svg>
                  </span>
                  Фотографии</a
                >
              </li></router-link
            >
          </ul>
        </div>
        <div class="footer" id="footer">
          <p class="footer__text">Made by Lumerty</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Nav",
  components: {},
  methods: {
    openmenu() {
      if (window.innerWidth >= 1024) {
        document.getElementById("sidebar-wrap").style.width = "60px";
        document.getElementById("imglogo").style.display = "none";
        document.getElementById("footer").style.display = "none";
        // document.getElementById("logo").style.display = "none";
        document.getElementById("burger").style.display = "none";
        document.getElementById("arrow").style.display = "block";
        document.getElementById("wrapperapp").style.gridTemplateColumns =
          "60px";
      } else {
        document.getElementById("sidebar-wrap").style.width = "0px";
        // document.getElementById("logo").style.display = "none";
        document.getElementById("burger").style.display = "none";
        document.getElementById("arrow").style.display = "block";
        document.getElementById("wrapperapp").style.gridTemplateColumns = "0px";
      }
    },
  },
};
</script>
