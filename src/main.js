import Vue from "vue";

import { Plugin as FragmentPlugin } from "vue-fragment";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import {
  FontAwesomeIcon,
  FontAwesomeLayers,
  FontAwesomeLayersText
} from "@fortawesome/vue-fontawesome";

import router from "./router";
import App from "./App.vue";

Vue.use(FragmentPlugin);
library.add(faTrash);

Vue.component("font-awesome-icon", FontAwesomeIcon);
Vue.component("font-awesome-layers", FontAwesomeLayers);
Vue.component("font-awesome-layers-text", FontAwesomeLayersText);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
