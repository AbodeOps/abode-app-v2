<template>
	<div class="flex w-full items-start">
		<span
			class="inline-flex cursor-pointer whitespace-pre rounded-full px-4 py-1 text-xs"
			:class="{ 'bg-primary text-white': activeTab === tab.key }"
			v-for="(tab, ix) in tabs"
			:key="ix"
			@click="selected = tab.key;$emit('change', tab.key)"
		>
			{{ tab.label }}
		</span>
	</div>
</template>

<script lang="ts" setup>
import type { TabItem } from '@/types';
import { onMounted, ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const emit = defineEmits(['change']);

const props =defineProps<{
	tabs: TabItem[];
	activeTab: string;
}>();

const selected = ref(props.activeTab);

const route = useRoute();
const router = useRouter();

watch([selected], () =>{
	router.replace({query: {
		tab: selected.value
	}})
})

onMounted(() => {
	if (route.query.tab) {
		emit('change', route.query.tab);
	}
});
</script>
