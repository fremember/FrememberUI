<template>
    <div
        class="fr-collapse-item"
        :class="{
            'is-disabled': disabled
        }"
    >
        <div
            class="fr-collapse-item__header"
            :class="{
                'is-disabled': disabled,
                'is-active': isActive
            }"
            :id="`item-header-${name}`"
            @click="handleClick"
        >
            <slot name="title">{{ title }}</slot>
        </div>
        <Transition name="slide" v-on="transitionEvents">
            <div class="fr-collapse-item__wrapper" v-show="isActive">
                <div class="fr-collapse-item__content" :id="`item-content-${name}`">
                    <slot/>
                </div>
            </div>
        </Transition>
    </div>
</template>
<script lang="ts" setup>
    import { inject, computed } from 'vue'
    import type { CollapseItemProps, CollapseContext } from './types'
    import { collapseContextKey } from './types'
    defineOptions({
        name: 'FrCollapseItem'
    })
    const props = defineProps<CollapseItemProps>()
    const collapseContext: CollapseContext = inject(collapseContextKey)
    const isActive = computed(() => collapseContext?.activeNames.value.includes(props.name))
    const handleClick = () => {
        if (props.disabled) { return }
        collapseContext?.handleItemClick(props.name)
    }
    const transitionEvents: Record<string, (el: HTMLElement) => void> = {
        beforeEnter(el) {
            el.style.height = '0px'
            el.style.overflow = 'hidden'
        },
        enter(el) {
            el.style.height = `${el.scrollHeight}px`
        },
        afterEnter(el) {
            el.style.height = ''
            el.style.overflow = ''
        },
        beforeLeave(el) {
            el.style.height = `${el.scrollHeight}px`
            el.style.overflow = 'hidden'
        },
        leave(el) {
            el.style.height = '0px'
        },
        afterLeave(el) {
            el.style.height = ''
            el.style.overflow = ''
        }
    }
</script>
<style scoped src="./style.css"></style>