<template>
    <fr-layout :menus="menus"></fr-layout>
</template>

<script lang="ts" setup>
    import { reactive } from 'vue'
    import FrLayout from '@/components/Layout/index.vue'
    const menus = reactive<any[]>([
        {
            title: '基础组件',
            url: '',
            id: 21,
            children: [
                {
                    title: 'Button 按钮',
                    url: '/comp/button',
                    id: 211,
                    children: []
                },
                {
                    title: 'Collapse 折叠面板',
                    url: '/comp/collapse',
                    id: 212,
                    children: []
                },
                {
                    title: 'Icon 图标',
                    url: '/comp/icon',
                    id: 213,
                    children: []
                }
            ]
        },
        {
            title: '第三方组件',
            url: '',
            id: 22,
            children: [
                {
                    title: 'swiper 使用',
                    url: '/comp/button',
                    id: 221,
                    children: []
                }
            ]
        }
    ])
</script>

<style scoped></style>