import "@babel/polyfill";
import "mutationobserver-shim";
import Vue from "vue";
import "./plugins/bootstrap-vue";
import "./plugins/font-awesome";
import "./styles/index.scss";

import App from "./App.vue";
import router from "./router";
import store from "./store";

import "./plugins/common";
import Modals from "./components/Modal/index";
import ImageElement from "./components/ImageElement";
Vue.component("Lightbox", Modals.Lightbox);
Vue.component("ImageElement", ImageElement);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
