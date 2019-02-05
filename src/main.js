import Vue from 'vue'
import VueRouter from 'vue-router'
import VueMaterial from 'vue-material'

import 'vue-material/dist/vue-material.min.css'

import App from '@/App'
import { routes } from '@/routes'

Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(VueMaterial)

const router = new VueRouter({
    routes: routes
})

new Vue({
    el: '#root',
    router: router,
    render: h => h(App)
})
