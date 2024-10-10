<template>
    <i
        class="fr-icon"
        :class="{
            [`fr-icon--${type}`]: type
        }"
        :style="customStyle"
        v-bind="$attrs"
    >
        <font-awesome-icon v-bind="filteredProps" />
    </i>
</template>
<script lang="ts" setup>
    import { computed } from 'vue'
    import { omit } from 'lodash-es'
    import { IconProps } from "./types"
    import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

    defineOptions({
        name: 'FrIcon',
        inheritAttrs: false
    })
    const props = defineProps<IconProps>()
    const filteredProps = computed(() => omit(props, ['type', 'color']))
    const customStyle = computed(() => {
        return props.color ? { color: props.color } : {}
    })
</script>
<style scoped src="./style.css"></style>