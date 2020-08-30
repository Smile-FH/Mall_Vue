import Vue from "vue";
import App from "./App.vue";
import md5 from "js-md5";
import router from "./router";
import store from "./store";
import "lib-flexible/flexible"
import { Button, Tabbar, TabbarItem, Swipe, SwipeItem, NavBar, Toast, CellGroup, Cell, Form, Lazyload, Search, Icon, Field } from "vant";

Vue.use(Button).use(Tabbar).use(TabbarItem).use(Swipe).use(SwipeItem).use(NavBar).use(Toast).use(CellGroup).use(Cell).use(Form).use(Lazyload).use(Search).use(Icon).use(Field);
Vue.config.productionTip = false;
Vue.prototype.$md5 = md5;
window.VRouter = router;

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount("#app");
