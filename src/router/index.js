import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home.vue";
import User from "@/views/User.vue";
import Classify from "@/views/Classify";
import Cart from "@/views/Cart";
import Search from "@/views/Search";

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
    path: "/search",
    name: "Search",
    component: () => import(/* webpackChunkName: "Home" */ "@/views/Search.vue"),
    meta: {
      index:2
    }
  },
  {
    path: "/about",
    name: "About",
    component: () => import(/* webpackChunkName: "about" */ "@/views/About.vue"),
    meta: {
      index: 2
    }
  },
  {
    path: "/user",
    name: "User",
    component: () => import(/* webpackChunkName: "user" */ "@/views/User.vue"),
    meta: {
      index: 1
    }
  },
  {
    path: "/classify",
    name: "Classify",
    component: () => import(/* webpackChunkName: "classify" */ "@/views/Classify.vue"),
    meta: {
      index: 1
    }
  },
  {
    path: "/cart",
    name: "Cart",
    component: () => import(/* webpackChunkName: "cart" */ "@/views/Cart.vue"),
    meta: {
      index: 1
    }
  }
];

const router = new VueRouter({
  mode: "hash",
  base: process.env.BASE_URL,
  routes
});

export default router;
