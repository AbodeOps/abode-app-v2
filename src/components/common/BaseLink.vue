<template>
	<span @click.native="goToRoute" class="cursor-pointer text-sm underline" :class="[textColor]" v-bind="$attrs">
		<slot />
	</span>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router';

const props = defineProps<{
	textColor?: string;
	route?: string;
}>();

const router = useRouter();

const goToRoute = () => {
	router.push({ name: props.route });
};
</script>
