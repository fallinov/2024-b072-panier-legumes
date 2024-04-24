import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
// Icones: https://pictogrammers.com/library/mdi/
// Télécharger les fichiers icônes avec NPM :
// npm install @mdi/font -D
// Importer les icônes
import '@mdi/font/css/materialdesignicons.css'

// Créer une instance de Vuetify
// Importer les composants et les directives Vuetify
const vuetify = createVuetify({
  components,
  directives,
})

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia()) // Ajouter Pinia à l'application
app.use(router) // Ajouter le routeur à l'application
app.use(vuetify) // Ajouter Vuetify à l'application

app.mount('#app') // Monter l'application dans la div avec l'id app
