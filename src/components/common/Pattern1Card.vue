<template>
	<div class="relative flex h-full w-full">
		<div class="relative z-20 h-full w-full p-8">
			<slot />
		</div>
		<Pattern1 :bgColor="bgColor" :patternColor="patternColor" class="absolute top-0 z-10 h-full w-full" />
	</div>
</template>

<script lang="ts" setup>
import Pattern1 from '../icons/Pattern1.vue';

defineProps<{ bgColor?: string; patternColor?: string }>();
</script>
