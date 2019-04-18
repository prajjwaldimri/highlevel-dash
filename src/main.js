import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import { Drag, Drop } from "vue-drag-drop";

Vue.config.productionTip = false;

Vue.component("drag", Drag);
Vue.component("drop", Drop);

new Vue({
  store,
  render: h => h(App)
}).$mount("#app");
