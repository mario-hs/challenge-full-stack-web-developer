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
    children: [
      {
        path: "/home/",
        name: "add",
        component: () => import("@/components/Form.vue"),
        meta: {
          auth: true,
        },
      },
      {
        path: "/home/list",
        name: "list",
        component: () => import("@/components/Card.vue"),
        meta: {
          auth: true,
        },
      },
    ],
    component: () => import("@/views/Home.vue"),
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
