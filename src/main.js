// import './assets/main.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import PrimeVueStyled from 'primevue/styled';
import Aura from 'primevue/themes/primeone/aura';
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(PrimeVueStyled)

app.mount('#app')
