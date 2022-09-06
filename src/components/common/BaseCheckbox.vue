<template>
	<div class="relative flex items-start">
		<div class="flex h-5 items-center">
			<input
				id="comments"
				aria-describedby="comments-description"
				name="comments"
				type="checkbox"
				class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
			/>
		</div>
		<div class="ml-3 text-sm">
			<label for="comments" class="text-gray-700">{{ label }}</label>
		</div>
	</div>
</template>

<script setup lang="ts">
defineProps<{ label: string }>();
</script>
