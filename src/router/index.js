import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: () => import('../views/Home.vue')
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import('../views/Login.vue')
    },
    {
        path: '/registration',
        name: 'Registration',
        component: () => import('../views/Registration.vue')
    },
    {
        path: '/profile',
        name: 'Profile',
        component: () => import('../views/Profile')
    },
    {
        path: '/settings',
        name: 'Settings',
        component: () => import('../views/Settings')
    },
    {
        path: '/contact',
        name: 'Contact',
        component: () => import("../views/Contact")
    },
    {
        path: '/contact/create',
        name: 'CreateContact',
        component: () => import("../views/CreateContact")
    },
    {
        path: '/contact/:id',
        name: 'ContactDetail',
        component: () => import("../views/ContactDetails")
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router