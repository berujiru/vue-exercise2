import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "ant-design-vue/dist/antd.css";
import Antd from "ant-design-vue";
import axios from "axios";
import VueAxios from "vue-axios";

const app = createApp(App).use(store);
app.use(VueAxios, axios);
app.provide("axios", app.config.globalProperties.axios);
app.use(router);
app.use(Antd);
app.mount("#app");
