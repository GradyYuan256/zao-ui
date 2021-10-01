import { createApp } from 'vue'
import App from './App.vue'
import {createRouter, createWebHashHistory} from 'vue-router'

import Yuan from './components/Yuan.vue'
import Xxx from './components/Xxx.vue'

const history = createWebHashHistory()
const router = createRouter({
    history: history,
    routes: [
        {path: '/', component: Yuan},
        {path: '/xxx', component: Xxx}
    ]
})
const app = createApp(App)
app.use(router)
app.mount('#app')
