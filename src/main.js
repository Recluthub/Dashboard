import { createApp } from 'vue'
import App from './App.vue'
import '@/assets/css/output.css'
import "@/assets/libs/@mdi/font/css/materialdesignicons.min.css";
import '@/assets/libs/@iconscout/unicons/css/line.css'
import router from './router';

const app = createApp(App)
app.use(router);
app.mount('#app')


    