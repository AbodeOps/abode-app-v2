<template>
	<div>
		<div class="z-40 h-[700px] w-full overflow-y-scroll rounded-lg bg-white pb-5 md:w-[600px]">
			<!-- TODO: Clicking form elements closes modal -->
			<BaseModalHeader title="Bank Transfer" @closed="$emit('closed')" />
			<div class="mt-8 flex flex-col items-start px-8">
				<div class="flex">
					<BaseGoBack @click="emit('go-back')" :isNav="false" />
				</div>
				<div class="mt-3 text-2xl font-semibold text-primary">Make Payment To:</div>

				<div class="mt-3 w-full rounded-xl border border-gray-30 p-8 text-left">
					<div class="mb-1 text-sm text-gray-600">Bank Name and Account Name</div>
					<div class="flex">
						<div class="mr-1 text-sm font-semibold text-black">Bank Name:</div>
						<div class="text-sm font-light text-gray-80">Guarantee Trust Bank</div>
					</div>
					<div class="mt-2 flex">
						<div class="mr-1 text-sm font-semibold text-black">Account Name:</div>
						<div class="text-sm font-light text-gray-80">Abode Assets Limited</div>
					</div>
				</div>

				<div class="mt-5 w-full rounded-xl border border-gray-30 p-8 text-left">
					<div class="mb-1 text-sm text-gray-600">Account Number</div>
					<div class="mb-2 grid grid-cols-2 gap-1" v-for="(accountNumber, ix) in accountNumbers" :key="ix">
						<div class="mr-1 text-sm font-semibold text-black">{{ accountNumber.label }}</div>
						<CopyIcon :class="['h-5 w-5 cursor-pointer text-primary']" @click.stop.prevent="copyNumber(accountNumber)" />
					</div>
				</div>
			</div>

			<div class="px-8">
				<div class="my-5 w-full rounded-xl bg-primary-30 p-8">
					Copy your transaction reference number and fill in below with the receipt of your transaction.
				</div>
			</div>

			<div class="mt-5 flex w-full flex-col items-center px-8">
				<BaseInput type="text" placeholder="Amount" v-model="form.amount" />
				<!-- <BaseInput type="text" placeholder="Account Name" v-model="form.accountName" /> -->
				<BaseDropdown
					label="Bank Account"
					:items="banks"
					item-key="name"
					item-value="code"
					type="text"
					placeholder="Proof"
					v-model="form.bank"
				/>
				<BaseFilePicker type="text" placeholder="Proof" v-model="form.proof" />
				<BaseInput type="text" placeholder="Reference" v-model="form.reference" />

				<div class="mt-5 flex justify-end">
					<BaseButton :loading="isLoading" class="bg-orange px-8 text-sm" @click.prevent="proceed">Submit</BaseButton>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup>
import BaseButton from '@/components/common/BaseButton.vue';
import BaseModalHeader from '@/components/common/BaseModalHeader.vue';
import BaseInput from '@/components/common/BaseInput.vue';
import { ref } from 'vue';
import BaseGoBack from './BaseGoBack.vue';
import { CopyIcon } from '@/components/icons/AllIcons';
import toast from '@/helpers/toast';
import BaseDropdown from './BaseDropdown.vue';
import { banks } from '@/utils/nigerianBanks';
import BaseFilePicker from './BaseFilePicker.vue';

defineProps<{
	isLoading: boolean;
}>();

const accountNumbers = ref([
	{ label: '0668633069 (Naira - NGN)', value: '0668633069', isCopying: false },
	{ label: '0668633076 (Dollar - USD)', value: '0668633076', isCopying: false },
	{ label: '0668633083 (Pounds - GBP)', value: '0668633083', isCopying: false },
	{ label: '0668633090 (Euros - EUR)', value: '0668633090', isCopying: false },
]);

const form = ref({
	amount: '2000',
	accountName: '',
	bank: '',
	proof: '',
	bankCode: '',
	reference: '',
});

const emit = defineEmits(['completed', 'closed', 'go-back']);

const proceed = () => {
	emit('completed', { ...form.value, bankCode: (form.value.bank as any).code });
};

const copyNumber = async (account: { label: string; value: string; isCopying: boolean }) => {
	try {
		account.isCopying = true;
		await navigator.clipboard.writeText(account.value);
		toast.success('Account Number copied successfully!');
		account.isCopying = false;
	} catch (err: any) {
		account.isCopying = false;
	}
};
</script>
