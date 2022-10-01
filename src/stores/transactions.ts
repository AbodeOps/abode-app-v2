import { defineStore, acceptHMRUpdate } from 'pinia';
import { TransactionService } from '@/services';
import { formatMoney } from '@/utils/helpers';
import type { BankAccount, Transaction } from '@/types';
import { getBankName } from '@/utils/nigerianBanks';

export const useTransactionStore = defineStore({
	id: 'transactions',
	persist: true,
	state: () => ({
		balance: 0,
		totalInflow: 0,
		totalOutflow: 0,
		projectsFunded: 0,
		actualNetWorth: 0,
		potentialNetWorth: 0,
		bankAccounts: [] as BankAccount[],
		transactions: [] as Transaction[],
	}),
	getters: {
		formattedBalance: (state) => formatMoney(state.balance),
		formattedActualNetworth: (state) => formatMoney(state.actualNetWorth),
		formattedOutflow: (state) => formatMoney(state.totalOutflow),
		formattedInflow: (state) => formatMoney(state.totalInflow),
	},
	actions: {
		async fetchTransactions() {
			const res = await TransactionService.fetchTransactions();

			this.transactions = res.data.map(
				(transaction: any) =>
					({
						id: transaction.id,
						amount: transaction.amount,
						balance: transaction.balance,
						description: transaction.description,
						type: transaction.type,
						createdAt: transaction.created_at,
					} as Transaction)
			);
			return res;
		},

		async fetchWallet() {
			const res = await TransactionService.fetchWallet();

			this.balance = res.data.balance;
			this.totalInflow = res.data.total_inflow;
			this.totalOutflow = res.data.total_outflow;
			this.projectsFunded = res.data.projects_funded;
			this.actualNetWorth = res.data.actual_networth;
			this.potentialNetWorth = res.data.potential_networth;

			return res;
		},

		async fetchBankAccounts() {
			const res = await TransactionService.fetchBankAccounts();

			this.bankAccounts = res.data.map(
				(account: any) =>
					({
						id: account.id,
						name: account.account_name,
						number: account.account_number,
						bankCode: account.bank_code,
						bank: getBankName(account.bank_code),
					} as BankAccount)
			);

			return res;
		},

		async requestOtp(purpose: string) {
			const res = await TransactionService.requestOtp(purpose);

			return res;
		},
		async addBank(payload: any) {
			const res = await TransactionService.addBank(payload);

			return res;
		},
		async resolveBankAccount(payload: any) {
			const res = await TransactionService.resolveBankAccount(payload);

			return res;
		},
		async topup(payload: any) {
			const res = await TransactionService.topup(payload);

			return res;
		},
		async withdraw(payload: any) {
			const res = await TransactionService.withdraw(payload);

			return res;
		},
	},
});

if (import.meta.hot) {
	import.meta.hot.accept(acceptHMRUpdate(useTransactionStore, import.meta.hot));
}
