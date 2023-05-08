import { createRouter, createWebHistory } from "vue-router";

import Home from "../views/Home.vue";
import SingIn from "../views/SingIn.vue";

const routes = [
  {
    path: "/",
    name: "sigin",
    component: SingIn,
  },
  {
    path: "/home",
    name: "home",
    component: Home,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
