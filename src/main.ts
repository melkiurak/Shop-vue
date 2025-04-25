import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import 'vuetify/styles'
import vuetify from './plugins/vuetify'
import { provideApolloClient } from '@vue/apollo-composable'
import client from './server/server'
import pinia from './plugins/pinia'

const app = createApp(App)
provideApolloClient(client)

app.use(createPinia())
app.use(router)
app.use(vuetify)
app.use(pinia)
app.mount('#app')
