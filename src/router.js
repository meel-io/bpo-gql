import Vue from "vue";
import Router from "vue-router";
import Rates from "./views/Rates.vue";
import About from "./views/About.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/rates",
      name: "rates",
      component: Rates
    },
    {
      path: "/about",
      name: "about",
      component: About
    }
  ]
});
