import Vue from "vue";
import App from "./App.vue";
// import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import "lib-flexible/flexible"
import { Button, Tabbar, TabbarItem, Swipe, SwipeItem, NavBar, Toast, CellGroup, Cell, Form } from "vant";
import "./assets/iconfont/iconfont";
import "./assets/iconfont/icon.css";

Vue.use(Button).use(Tabbar).use(TabbarItem).use(Swipe).use(SwipeItem).use(NavBar).use(Toast).use(CellGroup).use(Cell).use(Form);
Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount("#app");
