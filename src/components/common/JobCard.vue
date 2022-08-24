<template>
	<div class="space-y-4 py-6" v-if="job">
		<div class="flex items-center justify-between">
			<div>
				<div class="text-body font-bold text-gray-80">{{ job.job_role.role_name }}</div>
				<div class="text-micro mt-1 font-bold text-green">{{ job.job_type.value }}</div>
			</div>
			<div class="flex flex-col items-end" v-if="!isJobPage && job.price && !isCompany">
				<div class="text-header6 font-bold text-green">{{ job.price[0] }}</div>
				<div class="text-micro mt-1 text-green">{{ job.price[1] }}</div>
			</div>
			<!-- <div class="flex flex-col items-end" v-if="isCompany">
				<BaseBadge :text="'Sourcing Workers'" class="border-orange bg-orange-10 text-orange" />
			</div> -->
			<div class="flex flex-col items-end" v-if="job.worker_job_status && !isCompany">
				<BaseBadge :text="job.worker_job_status[0].status" />
			</div>
		</div>
		<div class="space-y-2">
			<div class="flex items-center space-x-1" v-if="job.postal_town">
				<LocationIcon class="h-4 w-4" />
				<div class="text-micro text-gray-70" v-if="job.postal_town">
					<span>{{ job.postal_town }}</span>
					<span v-if="job.postal_code">, {{ job.postal_code.split(' ')[0] }}</span>
				</div>
			</div>
			<!-- <div class="flex items-center space-x-1">
				<ClockIcon class="w-4 h-4" />
				<div class="flex items-center space-x-2 text-micro text-gray-70">
					<div>Mon - Fri</div>
					<div class="h-[5px] w-[5px] rounded-full bg-gray-40"></div>
					<div>8AM - 5PM</div>
				</div>
			</div> -->
			<!-- <div class="flex items-center space-x-1">
				<WorkerIcon class="w-4 h-4" />
				<div class="text-micro text-gray-70">2 Workers</div>
			</div> -->
		</div>
		<div class="text-caption text-gray-60">Source: {{ job.source }}</div>

		<div class="text-caption whitespace-pre text-gray-80 line-clamp-3 md:w-2/3" v-html="job.job_description" />

		<GreyButton color="gray" @click="goToJob()">View Job</GreyButton>

		<div class="text-micro text-gray-70" v-if="isJobPage && job.worker_job_status">
			Applied on {{ formatDate(job.worker_job_status[0].created_at, 'dd MMM yyyy') }}
		</div>
		<div class="text-micro text-gray-70" v-if="!isJobPage">
			Posted
			<BaseTimeAgo :date="job.created_at" />
		</div>
	</div>
</template>

<script lang="ts" setup>
import { LocationIcon, ClockIcon, WorkerIcon } from '@/components/icons/AllIcons';
import GreyButton from '@/components//common/GreyButton.vue';
import BaseBadge from '@/components/common/BaseBadge.vue';
import { WorkerJobModel } from '@/models/WorkerJobModel';
import { useRouter, useRoute } from 'vue-router';
import { ROUTES } from '@/router/routes';
import BaseTimeAgo from './BaseTimeAgo.vue';
import { formatDate } from '@/helpers/functions';

const props = defineProps({
	job: {
		type: WorkerJobModel,
		required: true,
	},
	isJobPage: {
		type: Boolean,
		default: false,
	},
	isCompany: {
		type: Boolean,
		default: false,
	},
});
const router = useRouter();
const route = useRoute();
const goToJob = () => {
	if (props.job.external_job_url && props.job.source != 'Gigbridge App') {
		window.open(props.job.external_job_url, '_blank');
		return;
	}

	let routeName = ROUTES.WORKER_JOB_DETAILS;
	if (props.isCompany) {
		routeName = ROUTES.COMPANY_JOB_DETAILS;
	} else if (route.name === ROUTES.WORKER_HOME) {
		routeName = ROUTES.WORKER_HOME_JOB_DETAILS;
	}

	router.push({ name: routeName, params: { key: props.job.key } });
};
</script>
