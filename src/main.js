// remove this line or edit this file for css
import './assets/main.css'

import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import HomeComponent from './components/HomeComponent.vue'
import DownloadComponent from './components/DownloadComponent.vue'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

// Components
import App from './App.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: HomeComponent },
    { path: '/download', component: DownloadComponent}
  ]
})


const vuetify = createVuetify({
  components,
  directives,
})

createApp(App).use(router).use(vuetify).mount('#app')
