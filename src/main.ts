import "./styles/index.scss";
import { createApp } from "vue";
import App from "./App.vue";
import { router } from "@/routers";

createApp(App)
    .use(router)
    .mount('#app')
    .$nextTick(() => {
        postMessage({ payload: 'removeLoading' }, '*')
    })
