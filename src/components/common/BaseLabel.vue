<template>
	<label :for="labelFor" class="text-caption mb-1 flex items-center text-gray-90">
		<span v-if="required" class="text-caption mr-1 text-red">*</span>
		{{ text }}
	</label>
</template>

<script lang="ts" setup>
defineProps({
	labelFor: {
		type: String,
		default: '',
	},
	text: {
		type: String,
		default: '',
	},
	required: {
		type: Boolean,
		default: false,
	},
});
</script>
