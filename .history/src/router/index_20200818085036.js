import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/index',
        name: 'index',
        component: () =>
            import ('../views/index/index.vue')
    },
    {
        path: '/category',
        name: 'category',
        component: () =>
            import ('../views/category/category.vue')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router