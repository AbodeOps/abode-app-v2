<template>
	<span @click="goToRoute" class="cursor-pointer text-sm underline" :class="[textColor]" v-bind="$attrs">
		<slot />
	</span>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router';

const props = withDefaults(
	defineProps<{
		textColor?: string;
		route?: string;
		isLink?: boolean;
	}>(),
	{
		isLink: true,
	}
);

const router = useRouter();

const goToRoute = () => {
	if (props.isLink) router.push({ name: props.route });
};
</script>
