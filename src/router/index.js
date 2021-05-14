import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Colors from "../views/Colors.vue";
import Clients from "../views/Clients.vue";
import Feedback from "../views/Feedback.vue";
import TabClientAdd from "../views/Table-clients-add.vue";
import TabFeedAdd from "../views/Table-feedback-add.vue";
import Product from "../views/Product.vue";
import ProductApp from "../views/Product-add.vue";
import Person from "../views/Person.vue";
import ColorsEdt from "../views/Colors-editing.vue";
import Photo from "../views/Photo.vue";
import ColorsAdd from "../views/Colors-add.vue";
import ProductNew from "../views/Product-new.vue";
import Login from "../views/Login.vue";
import store from "../store";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      showFeedback: true,
      requiresAuth: true,
      showgrid: true,
    },
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
    meta: {
      showFeedback: false,
      showgrid: false,
    },
  },
  {
    path: "/colors",
    name: "colors",
    component: Colors,
    meta: {
      showFeedback: true,
      requiresAuth: true,
      showgrid: true,
    },
  },
  {
    path: "/colors/:id",
    name: "colorsid",
    component: ColorsEdt,
    meta: {
      showFeedback: true,
      requiresAuth: true,
      showgrid: true,
    },
  },
  {
    path: "/colors/new",
    name: "colorsNew",
    component: ColorsAdd,
    meta: {
      showFeedback: true,
      requiresAuth: true,
      showgrid: true,
    },
  },
  {
    path: "/person",
    name: "person",
    component: Person,
    meta: {
      showFeedback: true,
      requiresAuth: true,
      showgrid: true,
    },
  },
  {
    path: "/photo",
    name: "photo",
    component: Photo,
    meta: {
      showFeedback: true,
      requiresAuth: true,
      showgrid: true,
    },
  },

  // {
  //   path: '/news/new',
  //   name: 'newsnew',
  //   component: NewsNew,
  //   meta: {
  //     showFeedback: true,
  //     showgrid: true
  //   }
  // },
  {
    path: "/feedback",
    name: "feedback",
    component: Feedback,
    meta: {
      showFeedback: true,
      requiresAuth: true,
      showgrid: true,
    },
  },
  {
    path: "/feedback/:id",
    name: "feedbackadd",
    component: TabFeedAdd,
    meta: {
      showFeedback: true,
      requiresAuth: true,
      showgrid: true,
    },
  },
  {
    path: "/clients",
    name: "clients",
    component: Clients,
    meta: {
      showFeedback: true,
      requiresAuth: true,
      showgrid: true,
    },
  },
  {
    path: "/clients/:id",
    name: "clientsadd",
    component: TabClientAdd,
    meta: {
      showFeedback: true,
      requiresAuth: true,
      showgrid: true,
    },
  },
  {
    path: "/clients/:article",
    name: "clientsid",
    component: Clients,
    meta: {
      showFeedback: true,
      requiresAuth: true,
      showgrid: true,
    },
  },
  {
    path: "/product",
    name: "product",
    component: Product,
    meta: {
      showFeedback: true,
      requiresAuth: true,
      showgrid: true,
    },
  },
  {
    path: "/product/:id",
    name: "products",
    component: ProductApp,
    meta: {
      showFeedback: true,
      showgrid: true,
    },
  },
  {
    path: "/product/new",
    name: "productsnew",
    component: ProductNew,
    meta: {
      showFeedback: true,
      showgrid: true,
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (store.getters.isLoggedIn) {
      next();
      return;
    }
    next("/login");
  } else {
    next();
  }
});

export default router;
