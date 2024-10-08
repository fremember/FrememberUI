<template>
    <div class="collapse">
        <fr-collapse v-model="openValue">
            <fr-collapse-item name="a">
                <template #title>
                    <h1>nice title</h1>
                </template>
                <h2>heading title</h2>
                <div>this is content a aaa</div>
            </fr-collapse-item>
            <fr-collapse-item name="b" title="nice title b item bb">
                <div>asdf</div>
            </fr-collapse-item>
            <fr-collapse-item name="c" title="nice title c item cc" disabled></fr-collapse-item>
        </fr-collapse>
        {{ openValue }}
    </div>
</template>

<script lang="ts" setup>
    import { ref } from 'vue'
    import FrCollapse from '@/components/Collapse/Collapse.vue'
    import FrCollapseItem from '@/components/Collapse/CollapseItem.vue'

    const openValue = ref(['a'])

</script>