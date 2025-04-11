import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import App from './App.vue'
import router from './router'
import 'vuetify/styles'
import client from './server/server'

const vuetify = createVuetify({
  components,
  directives,
})

const app = createApp(App)

app.provide('apollo', client)

app.use(createPinia())
app.use(router)
app.use(vuetify)
app.mount('#app')
