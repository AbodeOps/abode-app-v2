<template>
	<ul class="text-caption mt-2 ml-1 space-y-1 text-gray-60">
		<li class="flex items-center transition-colors" :class="passwordColorClass(passwordComplexity.minLength)">
			<CheckIcon v-if="passwordComplexity.minLength" class="mr-2 h-5 w-5 text-green" />
			<MinusIcon v-else-if="password.length > 0" class="mr-2 h-5 w-5 text-red" />
			<div v-else class="ml-4 mr-2 h-1 w-1 rounded-full bg-gray-60"></div>
			min. 8 characters
		</li>
		<li class="flex items-center transition-colors" :class="passwordColorClass(passwordComplexity.lowercase)">
			<CheckIcon v-if="passwordComplexity.lowercase" class="mr-2 h-5 w-5 text-green" />
			<MinusIcon v-else-if="password.length > 0" class="mr-2 h-5 w-5 text-red" />
			<div v-else class="ml-4 mr-2 h-1 w-1 rounded-full bg-gray-60"></div>
			min. 1 lowercase
		</li>
		<li class="flex items-center transition-colors" :class="passwordColorClass(passwordComplexity.uppercase)">
			<CheckIcon v-if="passwordComplexity.uppercase" class="mr-2 h-5 w-5 text-green" />
			<MinusIcon v-else-if="password.length > 0" class="mr-2 h-5 w-5 text-red" />
			<div v-else class="ml-4 mr-2 h-1 w-1 rounded-full bg-gray-60"></div>
			min. 1 uppercase
		</li>
		<li class="flex items-center transition-colors" :class="passwordColorClass(passwordComplexity.number)">
			<CheckIcon v-if="passwordComplexity.number" class="mr-2 h-5 w-5 text-green" />
			<MinusIcon v-else-if="password.length > 0" class="mr-2 h-5 w-5 text-red" />
			<div v-else class="ml-4 mr-2 h-1 w-1 rounded-full bg-gray-60"></div>
			min. 1 number
		</li>
		<li class="flex items-center transition-colors" :class="passwordColorClass(passwordComplexity.special)">
			<CheckIcon v-if="passwordComplexity.special" class="mr-2 h-5 w-5 text-green" />
			<MinusIcon v-else-if="password.length > 0" class="mr-2 h-5 w-5 text-red" />
			<div v-else class="ml-4 mr-2 h-1 w-1 rounded-full bg-gray-60"></div>
			min. 1 special
		</li>
	</ul>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { CheckIcon, MinusIcon } from '@/components/icons/AllIcons';

const props = defineProps({
	password: {
		type: String,
		required: true,
	},
});

const passwordComplexity = computed(() => {
	return {
		minLength: props.password.length >= 8,
		lowercase: /[a-z]/.test(props.password),
		uppercase: /[A-Z]/.test(props.password),
		number: /[0-9]/.test(props.password),
		special: /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(props.password),
	};
});

const passwordColorClass = (complexity: boolean) => {
	if (props.password.length <= 0) return '';

	return complexity ? 'text-green' : 'text-red';
};
</script>
