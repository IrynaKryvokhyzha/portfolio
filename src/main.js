import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// Vuetify
import "vuetify/styles";
import { createVuetify } from "vuetify";
import { VApp, VMain } from "vuetify/components";
import * as directives from "vuetify/directives";

const vuetify = createVuetify({
  components: {
    VApp,
    VMain,
  },
  directives,
});

// FontAwesome
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faDatabase, faAnglesUp } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faJs,
  faVuejs,
  faReact,
  faHtml5,
  faCss3Alt,
  faSass,
  faBootstrap,
  faNodeJs,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

library.add(
  faGithub,
  faJs,
  faVuejs,
  faReact,
  faHtml5,
  faCss3Alt,
  faSass,
  faBootstrap,
  faNodeJs,
  faDatabase,
  faEnvelope,
  faLinkedinIn,
  faAnglesUp
);

createApp(App)
  .use(store)
  .use(router)
  .use(vuetify)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
