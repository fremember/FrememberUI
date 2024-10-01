<template>
    <fr-layout :menus="menus"></fr-layout>
</template>

<script lang="ts" setup>
    import { reactive } from 'vue'
    import FrLayout from '@/components/Layout/index.vue'
    const menus = reactive<any[]>([
        {
            title: '前端文档',
            url: '',
            id: 1,
            children: [
                {
                    title: 'javascript 文档',
                    url: '/document/javascript',
                    id: 11,
                    children: []
                },
                {
                    title: 'typescript 文档',
                    url: '/document/typescript',
                    id: 12,
                    children: []
                },
                {
                    title: 'vue 文档',
                    url: '/document/vue',
                    id: 13,
                    children: []
                }
            ]
        }
    ])
</script>

<style scoped></style>