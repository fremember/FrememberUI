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
                    title: 'Message 消息',
                    url: '/comp/message',
                    id: 212,
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
                },
                {
                    title: 'Message 消息',
                    url: '/comp/message',
                    id: 222,
                    children: []
                }
            ]
        }
    ])
</script>

<style scoped></style>