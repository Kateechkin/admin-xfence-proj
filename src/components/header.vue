<template>
  <div class="header">
    <div class="header__block">
      <div
        class="header__bar"
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
            fill="currentColor"
            d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
          ></path>
        </svg>
      </div>

      <div class="header__arrow" id="arrow" @click="closemenu()">
        <svg
          enable-background="new 0 0 96 96"
          height="96px"
          id="arrow_right"
          version="1.1"
          viewBox="0 0 96 96"
          width="96px"
          xml:space="preserve"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
        >
          <path
            d="M12,52h62.344L52.888,73.456c-1.562,1.562-1.562,4.095-0.001,5.656c1.562,1.562,4.096,1.562,5.658,0l28.283-28.284l0,0  c0.186-0.186,0.352-0.391,0.498-0.609c0.067-0.101,0.114-0.21,0.172-0.315c0.066-0.124,0.142-0.242,0.195-0.373  c0.057-0.135,0.089-0.275,0.129-0.415c0.033-0.111,0.076-0.217,0.099-0.331C87.973,48.525,88,48.263,88,48l0,0  c0-0.003-0.001-0.006-0.001-0.009c-0.001-0.259-0.027-0.519-0.078-0.774c-0.024-0.12-0.069-0.231-0.104-0.349  c-0.039-0.133-0.069-0.268-0.123-0.397c-0.058-0.139-0.136-0.265-0.208-0.396c-0.054-0.098-0.097-0.198-0.159-0.292  c-0.146-0.221-0.314-0.427-0.501-0.614L58.544,16.888c-1.562-1.562-4.095-1.562-5.657-0.001c-1.562,1.562-1.562,4.095,0,5.658  L74.343,44L12,44c-2.209,0-4,1.791-4,4C8,50.209,9.791,52,12,52z"
          />
        </svg>
      </div>
      <div class="header__wrap">
        <router-link to="/person"
          ><div class="header-person">
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="user-edit"
              class="svg-inline--fa fa-user-edit fa-w-20"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 512"
            >
              <path
                fill="currentColor"
                d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h274.9c-2.4-6.8-3.4-14-2.6-21.3l6.8-60.9 1.2-11.1 7.9-7.9 77.3-77.3c-24.5-27.7-60-45.5-99.9-45.5zm45.3 145.3l-6.8 61c-1.1 10.2 7.5 18.8 17.6 17.6l60.9-6.8 137.9-137.9-71.7-71.7-137.9 137.8zM633 268.9L595.1 231c-9.3-9.3-24.5-9.3-33.8 0l-37.8 37.8-4.1 4.1 71.8 71.7 41.8-41.8c9.3-9.4 9.3-24.5 0-33.9z"
              ></path>
            </svg>
            <a href="">Личный кабинет</a>
          </div></router-link
        >

        <div class="header-exit" v-if="isLoggedIn" @click="logout">
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="door-open"
            class="svg-inline--fa fa-door-open fa-w-20"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 512"
          >
            <path
              fill="currentColor"
              d="M624 448h-80V113.45C544 86.19 522.47 64 496 64H384v64h96v384h144c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16zM312.24 1.01l-192 49.74C105.99 54.44 96 67.7 96 82.92V448H16c-8.84 0-16 7.16-16 16v32c0 8.84 7.16 16 16 16h336V33.18c0-21.58-19.56-37.41-39.76-32.17zM264 288c-13.25 0-24-14.33-24-32s10.75-32 24-32 24 14.33 24 32-10.75 32-24 32z"
            ></path>
          </svg>
          <a href="">
            <span class="logout">Выйти</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";
export default {
  name: "Header",
  data() {
    return {
      isActive: true,
    };
  },
  computed: {
    isLoggedIn: function() {
      return this.$store.getters.isLoggedIn;
    },
  },
  methods: {
    logout: function() {
      this.$store.dispatch("logout").then(() => {
        this.$router.push("/login");
      });
    },
    openmenu() {
      if (window.innerWidth >= 1024) {
        document.getElementById("sidebar-wrap").style.width = "60px";
        document.getElementById("burger").style.display = "none";
        document.getElementById("imglogo").style.display = "none";
        document.getElementById("footer").style.display = "none";
        document.getElementById("arrow").style.display = "block";
        document.getElementById("wrapperapp").style.gridTemplateColumns =
          "60px";
      } else {
        document.getElementById("sidebar-wrap").style.width = "0px";
        document.getElementById("burger").style.display = "none";
        document.getElementById("arrow").style.display = "block";
        document.getElementById("wrapperapp").style.gridTemplateColumns = "0px";
      }
    },
    closemenu() {
      if (window.innerWidth >= 1024) {
        document.getElementById("sidebar-wrap").style.width = "224px";
        document.getElementById("imglogo").style.display = "initial";
        document.getElementById("footer").style.display = "block";
        document.getElementById("burger").style.display = "block";
        document.getElementById("arrow").style.display = "none";
        document.getElementById("wrapperapp").style.gridTemplateColumns =
          "224px 1fr";
      } else {
        document.getElementById("sidebar-wrap").style.width = "100%";

        document.getElementById("burger").style.display = "none";
        document.getElementById("arrow").style.display = "block";
        document.getElementById("wrapperapp").style.gridTemplateColumns =
          "100%";
      }
    },
  },
  components: {},
};
</script>
