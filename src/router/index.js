import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import User from "../views/User.vue";
import Classify from "@/views/Classify";
import Cart from "@/views/Cart";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      index:1
    }
  },
  {
    path: "/about",
    name: "About",
    component: () => import(/* webpackChunkName: "about" */ "../views/About.vue"),
    meta: {
      index: 2
    }
  },
  {
    path: "/user",
    name: "User",
    component: User,
    meta: {
      index: 1
    }
  },
  {
    path: "/classify",
    name: "Classify",
    component: Classify,
    meta: {
      index: 1
    }
  },
  {
    path: "/cart",
    name: "Cart",
    component: Cart,
    meta: {
      index: 1
    }
  }
];

const router = new VueRouter({
  routes
});

export default router;
