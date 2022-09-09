import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        name: '导航',
        component: () => import("@/views/Guide.vue")
    },
    {
        path: '/icons',
        name: '图标总览',
        component: () => import("@/components/iconsOverviews")
    }
]

const router = createRouter({
    routes,
    history: createWebHashHistory()
})

export {
    router
}