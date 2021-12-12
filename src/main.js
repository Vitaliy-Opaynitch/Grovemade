import Vue from 'vue'
import { createApp } from 'vue'
import App from './App.vue'
import router from "@/router/router"
import AOS from 'aos'
import 'aos/dist/aos.css'

const app = createApp(App);
app.use(AOS.init({ duration: 500, startEvent: 'load', }));
app.use(router).mount('#app');


