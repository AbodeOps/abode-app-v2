<template>
	<div class="activity-log-card rounded-lg">
		<div class="border-b border-gray-25 px-8 pt-4 pb-3 text-2xl">Activity Log</div>
		<div class="flow-root px-8 py-5">
			<ul role="list" class="-mb-8">
				<li v-for="(event, eventIdx) in activityLogs" :key="event.id">
					<div class="relative pb-8">
						<span
							v-if="eventIdx !== activityLogs.length - 1"
							class="border-left absolute top-4 left-2 -ml-px h-full w-0.5 bg-gray-200"
							aria-hidden="true"
						/>
						<div class="relative flex space-x-3">
							<div>
								<span class="flex h-4 w-4 items-center justify-center rounded-full bg-black ring-8 ring-white" />
							</div>
							<div class="-pt-1.5 flex min-w-0 flex-1">
								<div>
									<div class="whitespace-nowrap text-left text-sm text-gray-500">
										<time :datetime="event.created_at">{{ formatDate(event.created_at) }}</time>
									</div>
									<p class="text-sm text-gray-500">
										{{ event.description }}
										<!-- <a :href="event.href" class="font-medium text-gray-900">{{ event.target }}</a> -->
									</p>
								</div>
							</div>
						</div>
					</div>
				</li>
			</ul>
		</div>
	</div>
</template>

<script lang="ts" setup>
import { useAuthStore } from '@/stores/auth';
import { CheckIcon, HandThumbUpIcon, UserIcon } from '@heroicons/vue/20/solid';
import { storeToRefs } from 'pinia';
import { formatDate } from '@/utils/helpers';

const timeline = [
	{
		id: 1,
		content: 'Your ',
		target: 'Abode Asset has been reset',
		href: '#',
		date: 'Sep 20',
		datetime: '2020-09-20',
		icon: UserIcon,
		iconBackground: 'bg-gray-400',
	},
	{
		id: 2,
		content: 'Your',
		target: 'Email has been verified on Abode',
		href: '#',
		date: 'Sep 22',
		datetime: '2020-09-22',
		icon: HandThumbUpIcon,
		iconBackground: 'bg-blue-500',
	},
	{
		id: 3,
		content: 'Welcome to Abode',
		target: '',
		href: '#',
		date: 'Sep 28',
		datetime: '2020-09-28',
		icon: CheckIcon,
		iconBackground: 'bg-green-500',
	},
];
const authStore = useAuthStore();
const { activityLogs } = storeToRefs(authStore);
</script>

<style scoped>
.activity-log-card {
	box-shadow: 0px 4px 16px rgba(30, 30, 30, 0.08);
}
</style>
