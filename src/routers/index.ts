import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        name: '导航',
        component: () => import("@/views/Guide.vue")
    }
]

const router = createRouter({
    routes,
    history: createWebHashHistory()
})

export {
    router
}