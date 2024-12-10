import { createRouter, createWebHistory } from "vue-router";

import UserLogin from "src/components/UserLogin.vue";
import MainLayout from "src/layouts/MainLayout.vue";

const routes = [
  { path: "/login", name: "Login", component: UserLogin },
  {
    path: "/",
    component: MainLayout,
    children: [
      {
        path: "home",
        name: "Home",
        component: () => import("src/components/HomePage.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
