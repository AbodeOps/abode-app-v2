declare global {
	interface Window {
		Intercom: any;
	}
}

export type HTMLInputTypeAttribute =
	| 'number'
	| 'search'
	| 'button'
	| 'time'
	| 'image'
	| 'text'
	| 'tel'
	| 'checkbox'
	| 'color'
	| 'date'
	| 'datetime-local'
	| 'email'
	| 'file'
	| 'hidden'
	| 'month'
	| 'password'
	| 'radio'
	| 'range';

export const AbodeAdminReferrer = 'abodeadmin';

export enum AssetFilters {
	ALL = 'ALL',
	AVAILABLE = 'AVAILABLE',
	SOLD_OUT = 'SOLD_OUT',
}

export enum AssetSortOptions {
	ASC = 'Ascending',
	DESC = 'Descending',
}

export enum OTPOptions {
	ADD_BANK_ACCOUNT = 'ADD_BANK',
	WITHDRAW = 'WITHDRAW',
}

export enum PaymentOption {
	BANK_TRANSFER = 'bank_transfer',
	CARD = 'online_transfer',
	WALLET = 'wallet',
}

export interface LoginForm {
	loginId: string;
	password: string;
}

export interface SignUpForm {
	firstName: string;
	lastName: string;
	email: string;
	phoneNumber: string;
	password: string;
	confirmPassword: string;
	referrer: string;
}

export interface Client {
	firstName: string;
	middleName: string;
	lastName: string;
	phoneNumber: string;
	createdAt: string;
	country: string;
	state: string;
	gender: string;
	referrer: User;
	type_interests: string;
	volume_interests: string;
	purpose: string;
	nextOfKinName: string;
	nextOfKinAddress: string;
	nextOfKinEmail: string;
	nextOfKinPhoneNumber: string;
	nextOfKinRelationship: string;
}

export interface User {
	name: string;
	email: string;
	username: string;
	client: Client;
}

export interface ActivityLog {
	id: number;
	description: string;
	created_at: string;
}

export interface Asset {
	id: number;
	available_units: number;
	banner: string;
	description: string;
	name: string;
	image_url: string;
	location: string;
	total_price: number;
	unit_measurement: string;
	unit_price: number;
	max_duration: number;
	status: boolean;
	totalUnits: number;
	percentFunded: number;
	potentialGrowth: string;
	funds: Subscription[]
}

export interface Subscription {
	id: number;
	project: Asset;
	amount: number;
	sell_as_group: boolean;
	units: number;
	userId: number;
}

export interface BankAccount {
	id: number;
	name: string;
	number: string;
	bankCode: string;
	bank: string;
}

export interface Transaction {
	id: number;
	amount: number;
	balance: number;
	createdAt: string;
	description: string;
	type: string;
}

export interface TabItem {
	label: string;
	key: string;
}

export interface OptionItem {
	id: number;
	value: string;
}

export interface PaymentMethod {
	key: string;
	label: string;
	description: string;
	icon: any;
	disabled?: boolean;
}

export interface WithdrawalForm {
	amount: string;
	bankId: string;
	otp: string;
}

export interface TopUpForm {
	amount: string;
	reference: string;
	bankCode: string;
	proof: any;
}

export interface AddBankAccountForm {
	accountName: string;
	accountNumber: string;
	bankCode: string;
	otp: string;
	bank?: { id: number; number: number; } | null | string;
}
