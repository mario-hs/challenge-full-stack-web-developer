/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Components
import App from "./App.vue";
import { router } from "./router";

// Composables
import { createApp } from "vue";
import { createPinia } from "pinia";

// Plugins
import { registerPlugins } from "@/plugins";

const pinia = createPinia();

const app = createApp(App);

app.use(pinia);
app.use(router);
registerPlugins(app);

app.mount("#app");
