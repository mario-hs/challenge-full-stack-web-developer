import { createRouter, createWebHistory } from "vue-router";
import { useAuth } from "../stores/auth";
// import routes from "@/router/routes.js";

const routes = [
  {
    path: "/",
    name: "login",
    component: () => import("@/views/SingIn.vue"),
  },
  {
    path: "/home",
    name: "home",
    children: [
      {
        path: "/home/add",
        name: "add",
        component: () => import("@/components/Form.vue"),
        meta: {
          auth: true,
        },
      },
      {
        path: "/home/list",
        name: "list",
        component: () => import("@/components/List.vue"),
        meta: {
          auth: true,
        },
      },
    ],
    component: () => import("@/views/Home.vue"),
    meta: {
      auth: true,
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  linkActiveClass: "active",
  routes: routes,
});

router.beforeEach(async (to, from, next) => {
  if (to.meta.auth) {
    const auth = useAuth();
    if (auth.token && auth.user) {
      const isAuthenticated = await auth.checkAuth();
      if (isAuthenticated) next();
      else next({ name: "login" });
    } else {
      next({ name: "login" });
    }
  } else if (to.name === "home") {
    next({ name: "login" });
    return true;
  }
  next();
});

export { router };
