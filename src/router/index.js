import Vue from "vue";
import VueRouter from "vue-router";

import NotFound from "../views/NotFound";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import(/* webpackChunkName: "home" */ "../views/Home")
  },
  {
    path: "/todo-list",
    name: "TodoList",
    component: () =>
      import(/* webpackChunkName: "todo-list" */ "../views/TodoList")
  },
  {
    path: "*",
    component: NotFound
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
