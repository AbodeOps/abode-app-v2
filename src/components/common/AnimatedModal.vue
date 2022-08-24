<template>
	<TransitionRoot as="template" :show="isOpen">
		<Dialog as="div" class="animated-modal relative z-10">
			<TransitionChild
				as="template"
				enter="ease-out duration-300"
				enter-from="opacity-0"
				enter-to="opacity-100"
				leave="ease-in duration-200"
				leave-from="opacity-100"
				leave-to="opacity-0"
			>
				<div class="fixed inset-0 bg-black bg-opacity-60 transition-opacity"></div>
			</TransitionChild>

			<div class="fixed inset-0 z-10 overflow-y-auto">
				<div
					class="flex min-h-full px-4 py-10 text-center sm:p-0"
					:class="[
						{
							'items-start justify-end ': right,
							'items-start justify-center lg:items-start lg:justify-end ': lgRightSmCenter,
							'items-start justify-start': left,
							'items-start justify-center': center,
							'flex-col items-center justify-center': middleCenter,
						},
					]"
				>
					<TransitionChild
						as="template"
						enter="ease-out duration-300"
						enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
						enter-to="opacity-100 translate-y-0 sm:scale-100"
						leave="ease-in duration-200"
						leave-from="opacity-100 translate-y-0 sm:scale-100"
						leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
					>
						<span>
							<slot></slot>
						</span>
					</TransitionChild>
				</div>
			</div>
		</Dialog>
	</TransitionRoot>
</template>

<script lang="ts" setup>
import { Dialog, TransitionChild, TransitionRoot } from '@headlessui/vue';

defineEmits(['closed']);
defineProps({
	isOpen: {
		type: Boolean,
		default: false,
		required: true,
	},
	center: {
		type: Boolean,
		default: false,
	},
	lgRightSmCenter: {
		type: Boolean,
		default: false,
	},
	right: {
		type: Boolean,
		default: false,
	},
	left: {
		type: Boolean,
		default: false,
	},
	middleCenter: {
		type: Boolean,
		default: false,
	},
});
</script>
