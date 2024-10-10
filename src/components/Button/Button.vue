<template>
    <button
        ref="_ref"
        class="fr-button"
        :class="{
            [`fr-button--${type}`]: type,
            [`fr-button--${size}`]: size,
            'is-plain': plain,
            'is-round': round,
            'is-circle': circle,
            'is-disabled': disabled,
            'is-loading': loading
        }"
        :disabled="disabled || loading"
        :autofocus="autofocus"
        :type="nativeType"
    >
        <fr-icon icon="spinner" spin v-if="loading" />
        <fr-icon :icon="icon" v-if="icon" />
        <span v-if="slotDefault">
            <slot />
        </span>
    </button>
</template>
<script lang="ts" setup>
/**
 * type 不同的样式（primary、danger、Info、Success、warning）
 * plain 样式的不同展现模式 boolean
 * round 圆角 boolean
 * circle 圆形按钮，适合图标 boolean
 * size 不同大小（small、normal、large）
 * disabled 禁用 boolean
 * 图标
 * loading 按钮loading状态
 */
import { ref, useSlots } from 'vue'
import FrIcon from '@/components/Icon/Icon.vue'
import { ButtonProps } from './types'
defineOptions({
    name: 'FrButton'
})
withDefaults(defineProps<ButtonProps>(), {
    nativeType: 'button'
})

const slotDefault = !!useSlots().default;

const _ref = ref<HTMLButtonElement>()
defineExpose({
    ref: _ref
})
</script>
<style scoped src="./style.css"></style>