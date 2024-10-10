<template>
    <section class="layout">
        <header>
            <img src="@/assets/vue.svg" alt="logo" />
            <nav class="menu">
                <router-link
                    v-for="menu in subMenus"
                    :key="menu.id"
                    :to="menu.url"
                >{{ menu.title }}</router-link>
            </nav>
        </header>

        <section class="container">
            <nav v-if="menus.length">
                <div style="background: #f4f8fa;height: 100px;">轮播图留位置</div>
                <div v-for="menu in menus" :key="menu.id">
                    <div class="title">{{ menu.title }}</div>
                    <div class="sub-menu" v-show="menu.children.length">
                        <router-link
                            v-for="sub in menu.children"
                            :key="sub.id"
                            :to="sub.url"
                        >{{ sub.title }}</router-link>
                    </div>
                </div>
            </nav>
            <main>
                <router-view />
            </main>
        </section>
    </section>
</template>

<script lang="ts" setup>
    import { reactive } from 'vue'

    defineProps({
        menus: {
            type: Array<any>,
            default: []
        }
    })

    const subMenus = reactive<any[]>([
        { title: '文档', id: 1, url: '/document' },
        { title: '组件', id: 2, url: '/comp' },
        { title: '面试', id: 3, url: '/interview' },
        { title: '简历', id: 4, url: '/resume' }
    ])
</script>

<style scoped>
    .layout {
        width: 100vw;
        height: 100vh;
        header {
            padding: 0 30px;
            width: 100%;
            height: 55px;
            display: flex;
            align-items: center;
            border-bottom: 1px solid var(--fr-border-color);
            nav {
                flex: 1;
                display: flex;
                align-items: center;
                justify-content: flex-end;
                a {
                    position: relative;
                    padding: 0 12px;
                    min-width: 64px;
                    height: 55px;
                    line-height: 55px;
                    text-align: center;
                    &:hover,
                    &.router-link-active {
                        &:after {
                            content: '';
                            position: absolute;
                            right: 4px;
                            bottom: -1px;
                            left: 4px;
                            z-index: 2;
                            height: 2px;
                            background: var(--fr-color-primary);
                        }
                    }
                }
            }
        }
        .container {
            display: flex;
            align-items: flex-start;
            width: 100vw;
            height: calc(100% - 55px);
            nav, main {
                height: 100%;
                overflow-y: auto; 
            }
            nav {
                width: 200px;
                border-right: 1px solid var(--fr-border-color);
                .title {
                    margin: 8px auto;
                    width: 80%;
                    padding: 8px 0;
                    border-bottom: 1px solid var(--fr-border-color);
                    color: var(--fr-color-info);
                }
                .sub-menu {
                    cursor: pointer;
                    a {
                        display: block;
                        padding: 0 30px;
                        height: 40px;
                        line-height: 40px;
                        &:hover,
                        &.router-link-active {
                            background: #e6f7ff;
                        }
                        &:not(:last-child) {
                            margin-bottom: 6px;
                        }
                    }
                }
            }
            main {
                padding: 10px;
                flex: 1;
                background: var(--fr-bg-color-page);
            }
        }
    }
</style>