import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
        {
            path: '/',
            redirect: '/comp'
        },
        {
            path: '/document',
            name: 'Document',
            component: () => import('@/views/document/index.vue'),
            children: [
                {
                    path: '/document',
                    redirect: '/document/javascript'
                },
                {
                    path: '/document/javascript',
                    name: 'Javascript',
                    component: () => import('@/views/document/js/index.vue')
                },
                {
                    path: '/document/typescript',
                    name: 'Typescript',
                    component: () => import('@/views/document/ts/index.vue')
                },
                {
                    path: '/document/vue',
                    name: 'Vue',
                    component: () => import('@/views/document/vue/index.vue')
                }
            ]
        },
        {
            path: '/comp',
            name: 'Comp',
            component: () => import('@/views/comp/index.vue'),
            children: [
                {
                    path: '/comp',
                    redirect: '/comp/button'
                },
                {
                    path: '/comp/button',
                    name: 'Button',
                    component: () => import('@/views/comp/basic/button/index.vue')
                },
                {
                    path: '/comp/collapse',
                    name: 'Collapse',
                    component: () => import('@/views/comp/basic/collapse/index.vue')
                },
                {
                    path: '/comp/icon',
                    name: 'Icon',
                    component: () => import('@/views/comp/basic/icon/index.vue')
                }
            ]
        },
        {
            path: '/interview',
            name: 'Interview',
            component: () => import('@/views/interview/index.vue'),
            children: [
                {
                    path: '/interview',
                    redirect: '/interview/js'
                },
                {
                    path: '/interview/js',
                    name: 'Js',
                    component: () => import('@/views/interview/js/index.vue'),
                }
            ]
        },
        {
            path: '/resume',
            name: 'Resume',
            component: () => import('@/views/resume/index.vue'),
            children: [
                {
                    path: '/resume',
                    redirect: '/resume/fremember'
                },
                {
                    path: '/resume/fremember',
                    name: 'Fremember',
                    component: () => import('@/views/resume/fremember/index.vue'),
                }
            ]
        }
    ],
    router = createRouter({
        history: createWebHashHistory('/'),
        routes,
        strict: true,
        scrollBehavior: () => ({ left: 0, right: 0 })
    });

export default router
