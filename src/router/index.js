import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView,
        },
        {
            path: '/o_nas',
            name: 'Onas',
            component: () => import('../views/o_nasView.vue'),
        },
        {
            path: '/kava',
            name: 'Kava',
            component: () => import('../views/kavaView.vue'),
        },
        {
            path: '/caj',
            name: 'Caj',
            component: () => import('../views/cajView.vue'),
        },
        {
            path: '/kava/:id',
            name: 'kava-detail',
            props: true,
            component: () => import('../views/Podrobnosti_kavaView.vue'),
        },
        {
            path: '/caj/:id',
            name: 'caj-detail',
            props: true,
            component: () => import('../views/Podrobnosti_cajView.vue'),
        },
        {
            path: '/akcia',
            name: 'akcna ponuka',
            props: true,
            component: () => import('../views/akciaView.vue'),
        },
        {
            path: '/kontakt',
            name: 'kontakt',
            props: true,
            component: () => import('../views/kontaktView.vue'),
        },
    ],
});

export default router;
