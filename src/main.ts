import { createApp } from 'vue'
import App from './App.vue'
import {createRouter, createWebHashHistory} from 'vue-router'

import Yuan from './components/Yuan.vue'

const history = createWebHashHistory()
const router = createRouter({
    history: history,
    routes: [
        {path: '/', component: Yuan},
        {path: '/xxx', component: Yuan},
    ]
})
const app = createApp(App)
app.use(router)
app.mount('#app')
