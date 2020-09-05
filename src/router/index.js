import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home";
import User from "@/views/User";
import Classify from "@/views/Classify";
import Cart from "@/views/Cart";
import Search from "@/views/Search";
import Login from "@/views/Login";
import Settings from "@/views/Settings";

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
    component: () => import(/* webpackChunkName: "Home" */ "@/views/Search"),
    meta: {
      index:2
    }
  },
  {
    path: "/about",
    name: "About",
    component: () => import(/* webpackChunkName: "about" */ "@/views/About"),
    meta: {
      index: 2
    }
  },
  {
    path: "/user",
    name: "User",
    component: () => import(/* webpackChunkName: "user" */ "@/views/User"),
    meta: {
      index: 1
    }
  },
  {
    path: "/classify",
    name: "Classify",
    component: () => import(/* webpackChunkName: "classify" */ "@/views/Classify"),
    meta: {
      index: 1
    }
  },
  {
    path: "/cart",
    name: "Cart",
    component: () => import(/* webpackChunkName: "cart" */ "@/views/Cart"),
    meta: {
      index: 1
    }
  },
  {
    path: "/login",
    name: "Login",
    component: () => import(/* webpackChunkName: "login" */ "@/views/Login"),
    meta: {
      index: 2
    }
  },
  {
    path: "/settings",
    name: "Settings",
    component: () => import(/* webpackChunkName: "user" */ "@/views/Settings"),
    meta: {
      index: 2
    }
  }
];

const router = new VueRouter({
  mode: "hash",
  base: process.env.BASE_URL,
  routes
});

export default router;
