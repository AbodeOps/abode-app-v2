<template>
	<div class="space-y-10 pt-4 md:p-6">
		<!-- wrapping this in a glex to make sure just the item inside triggers the click not the entire space-->
		<div class="ml-4 flex md:ml-0">
			<div class="flex cursor-pointer items-center" @click="router.back()">
				<BackButtonIcon class="h-5 w-5" />
				<div class="text-body ml-2 text-gray-60">Go back</div>
			</div>
		</div>
		<div class="space-y-4">
			<BaseNotificationToast bgColor="white" textColor="blue" isAction actionText="Complete Onboarding" :action="toastAction" />
			<BaseNotificationToast
				bgColor="white"
				textColor="blue"
				isAction
				actionText="Complete Onboarding"
				:action="toastAction"
				title="Onboarding verification complete"
				subTitle="You need to complete your profile to start applying to jobs."
			/>
			<BaseNotificationToast
				bgColor="white"
				textColor="blue"
				isAction
				actionText="View Job"
				:action="toastAction"
				title="Hired for a job!"
				subTitle="You have been successfully hired for the “Painter” role. Congratulations!"
			>
				<template #icon>
					<CheckedIcon class="h-10 w-10" />
				</template>
			</BaseNotificationToast>
		</div>
	</div>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router';
import BaseNotificationToast from '@/components/workers/BaseNotificationToast.vue';
import { BackButtonIcon, CheckedIcon } from '@/components/icons/AllIcons';

const router = useRouter();

defineProps({
	isWorker: {
		type: Boolean,
		default: false,
	},
	isCompany: {
		type: Boolean,
		default: false,
	},
	notifications: {
		type: Array,
		default: () => [],
	},
});

const toastAction = () => {
	console.log('Action button clicked');
};
</script>
