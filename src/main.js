import { createApp } from 'vue'
import router from './router'
import './style.css'
import App from './App.vue'
import { useRouter } from 'vue-router'

createApp(App)
    .use(router)
.mount('#app')
