<template>
    <div class="flex items-center space-x-1 text-caption py-0.5 px-1 rounded border" :class="[baseStyle]">
        <slot/>
        <div class="text-caption">{{title}}</div>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
const props = defineProps({
    color: {
        type: String,
        default: 'blue',
    },
    title: {
        type: String,
        default: 'Required',
    },
})

const baseStyle = computed(() => {
    if (props.color === 'green') {
        return 'text-green bg-green-10 border-green-40'
    }
    if (props.color === 'orange') {
        return 'text-gray-60 bg-orange-10 border-transparent'
    }
    return 'text-blue bg-blue-10 border-blue-40'
})
</script>