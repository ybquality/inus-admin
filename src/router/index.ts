import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Layout from "@/layouts/index.vue";
// import path from "path";

const routes:Array<RouteRecordRaw> = [
    {
        path: "/login",
        name: "Login",
        component: () => import("../views/Login.vue")
    },
    {
        path: '/register',
        name: "Register",
        component: () => import('@/views/Register.vue')
    },
    {
        path: '/:catchAll(.*)',
        name: "404",
        component: () => import('@/views/404.vue')
    },
    {
        path: '/',
        redirect: '/index',
        name: 'Index',
        component: Layout,
        meta: {
            title: '首页',
            icon: 'Grid'
        },
        children: [
            {
                path: 'index',
                name: 'index',
                component: () => import('@/views/index.vue'),
                meta: {
                    title: '首页'
                }
            }
        ]
    },
    {
        path: '/article',
        redirect: '/article/articleList',
        name: 'Article',
        component: Layout,
        meta: {
            title: '文章管理',
            icon: 'Notebook'
        },
        children: [
            {
                path: 'articleList',
                name: 'articleList',
                component: () => import('@/views/article/ArticleList.vue'),
                meta: {
                    title: '文章列表'
                }
            },
            {
                path: 'articleAdd',
                name: 'articleAdd',
                component: () => import('@/views/article/ArticleAdd.vue'),
                meta: {
                    title: '新增文章'
                }
            },
        ],
    },
    {
        path: '/settings',
        redirect: '/settings/account',
        name: 'Settings',
        component: Layout,
        meta: {
            title: 'Settings',
            icon: ''
        },
        children: [
            {
                path: 'account',
                name: 'account',
                component: () => import('@/views/settings/account.vue'),
                meta: {
                    title: '首页'
                }
            }
        ]
    },
]

//创建路由
const router = createRouter({
    history: createWebHistory(),
    routes
})
//实现路由守卫
router.beforeEach((to,from,next) => {
    const isLogin:Boolean = localStorage.token ? true : false;

    if(to.path === "/login" || to.path === "/register"){
        next()
    }else{
        isLogin ? next() : next("/login")
    }
})

export default router