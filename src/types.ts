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

export interface LoginForm {
	loginId: string;
	password: string;
}

export interface Client {
	firstName: string;
	lastName: string;
	phoneNumber: string;
	createdAt: string;
}

export interface User {
	name: string;
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
}

export interface Subscription {
	id: number;
	project: Asset;
	amount: number;
	sell_as_group: boolean;
	units: number;
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
}
