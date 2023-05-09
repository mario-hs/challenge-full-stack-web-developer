import { createRouter, createWebHistory } from "vue-router";
import { useAuth } from "../stores/auth";

const routes = [
  {
    path: "/",
    name: "login",
    component: () => import("../views/SingIn.vue"),
  },
  {
    path: "/home",
    name: "home",
    component: () => import("../views/Home.vue"),
    meta: {
      auth: true,
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach(async (to, from, next) => {
  if (to.meta.auth) {
    const auth = useAuth();
    if (auth.token && auth.user) {
      const isAuthenticated = await auth.checkAuth();
      if (isAuthenticated) {
        next();
      } else {
        next({ name: "login" });
      }
    } else {
      next({ name: "login" });
    }
  } else {
    next();
    // next({ name: "login" });
  }
});

export default router;
