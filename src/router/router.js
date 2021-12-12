import Main from "@/pages/Main";
import Explore from "@/pages/Explore";
import Contact from "@/pages/Contact";
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        path: '/',
        component: Main
    },
    {
        path: '/explore',
        component: Explore
    },
    {
        path: '/contact',
        component: Contact
    },
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router;