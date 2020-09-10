import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        redirect: '/home'

    },
    //首页
    {
        path: '/home',
        component: Home,
        children: [{
            path: "",
            name: "home",
            component: () =>
                import ('../views/index/index'),
            meta: {
                title: '首页',
                isMeta: true
            }
        }],


    },
    //分类
    {
        path: '/category',
        component: Home,
        children: [{
            path: "",
            name: "category",
            component: () =>
                import ('../views/category/Category'),
            meta: {
                title: '聊天',
                isMeta: true
            }
        }]

    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router