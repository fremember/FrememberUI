<template>
    <fr-layout :menus="menus"></fr-layout>
</template>

<script lang="ts" setup>
    import { reactive } from 'vue'
    import FrLayout from '@/components/Layout/index.vue'
    const menus = reactive<any[]>([
        {
            title: '面试题目',
            url: '',
            id: 1,
            children: [
                {
                    title: 'javascript 题目',
                    url: '/document/js',
                    id: 11,
                    children: []
                },
                {
                    title: 'vue 题目',
                    url: '/document/vue',
                    id: 12,
                    children: []
                }
            ]
        }
    ])
</script>

<style scoped></style>