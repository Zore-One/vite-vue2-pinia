import {createRouter, createWebHistory} from 'vue-router'

const routes = [
    {
        path:'/',
        name:'container',
        component:() =>import('../pages/container.vue')
    },
    {
        path:'/news',
        name:'news',
        component:() =>import('../pages/news.vue')
    },
]

const router = createRouter({
    history:createWebHistory(),
    routes,
})

export default router