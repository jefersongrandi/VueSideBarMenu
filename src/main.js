import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

/*
Como fazer um Menu Side Bar (Lateral)
//https://bootstrapious.com/p/bootstrap-sidebar
*/

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
