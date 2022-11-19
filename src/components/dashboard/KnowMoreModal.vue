<template>
	<AnimatedModal :isOpen="isOpen" mdMiddleCenterSmBottom>
		<div class="z-50 w-full rounded-lg bg-white pb-5 md:w-[600px]">
			<div>
				<BaseModalHeader title="Let's know you more" @closed="emit('closed')" />

				<div class="mt-5 flex w-full flex-col items-center px-8">
					<BaseDropdown
						label="Who are you?"
						:items="['First Time Investor', 'Once in a while investor', 'Frequent Investor']"
						:return-object="false"
						placeholder="Who are you?"
						v-model="form.who"
					/>

					<BaseDropdown label="Purpose" :items="purposes" :return-object="false" placeholder="Purpose" v-model="form.purpose" />
					<BaseDropdown
						label="Volume"
						:items="expectations"
						:return-object="false"
						placeholder="Volume"
						v-model="form.expectations"
					/>
					<BaseDropdown
						label="Have You used a co-ownership app before?"
						:items="[
							{ label: 'Yes', value: true },
							{ label: 'No', value: false },
						]"
						item-key="label"
						item-value="value"
						:return-object="false"
						placeholder="Have You used a co-ownership app before?"
						v-model="form.used"
					/>
					<div class="mt-4 flex w-full justify-start text-left text-left font-medium text-gray-700">Investment Interests</div>
					<div class="mt-2 grid grid-cols-2">
						<div
							v-for="(interest, idx) in interests"
							:key="idx"
							class="relative flex items-start py-4"
							@click="handleSelectInterest(idx)"
						>
							<div class="mr-3 flex h-5 items-start">
								<input
									:id="`interest-${idx}`"
									:name="`interest-${idx}`"
									type="checkbox"
									:checked="form.interests.includes(interest)"
									class="h-4 w-4 rounded text-indigo-600 focus:ring-indigo-500"
								/>
							</div>
							<div class="min-w-0 flex-1 text-center text-sm" style="text-align: left !important">
								<label :for="`interest-${idx}`" class="select-none text-left font-medium text-gray-700">
									{{ interest }}
								</label>
							</div>
						</div>
					</div>

					<div class="mt-5 flex w-full items-end justify-end">
						<BaseButton
							class="mr-5 border border-black bg-white px-8 text-sm text-black"
							textColor="black"
							bgColor="white"
							@click="emit('closed')"
						>
							I'd do this later
						</BaseButton>
						<BaseButton class="bg-orange px-8 text-sm" :loading="isSaving" @click="proceed">Get Started</BaseButton>
					</div>
				</div>
			</div>
		</div>
	</AnimatedModal>
</template>

<script lang="ts" setup>
import AnimatedModal from '@/components/common/AnimatedModal.vue';
import BaseButton from '@/components/common/BaseButton.vue';
import BaseModalHeader from '@/components/common/BaseModalHeader.vue';
import type { Subscription } from '@/types';
import { formatMoney } from '@/utils/helpers';
import toast from '@/helpers/toast';
import { ref } from 'vue';
import BaseDropdown from '../common/BaseDropdown.vue';
import { useAuthStore } from '@/stores/auth';

const props = defineProps<{
	isOpen: boolean;
	subscription?: Subscription;
}>();

const isSaving = ref(false);

const authStore = useAuthStore();

const emit = defineEmits(['completed', 'closed']);

const interests = ref([
	'Agriculture',
	'Cryptocurrency',
	'Foreign Stocks',
	'Local Stocks',
	'Real Estate',
	'Bonds',
	'Precious Stones e.g. gold, emerald',
]);
const expectations = ref(['less than ₦1,000,000', '₦1,000,000 - ₦10,000,000', '₦10,000,000 - ₦100,000,000', 'greater than ₦100,000,000']);
const purposes = ref(['Investing', 'Referring']);

const form = ref<{
	who: string;
	purpose: string;
	interests: string[];
	expectations: string;
	used?: boolean | null;
}>({
	who: '',
	purpose: '',
	interests: [],
	expectations: '',
	used: null,
});

const handleSelectInterest = (index: number) => {
	const interest = interests.value[index];

	if (form.value.interests.includes(interest)) {
		const indexInForm = form.value.interests.indexOf(interest);
		form.value.interests.splice(indexInForm, 1);
	} else {
		form.value.interests.push(interest);
	}
};

const proceed = async () => {
	try {
		isSaving.value = true;

		const res = await authStore.collectInterests({ ...form.value, used: (form.value.used as any).value });
		toast.success(res.message);

		emit('completed');
	} finally {
		isSaving.value = false;
	}
};
</script>
