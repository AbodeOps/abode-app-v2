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

export interface TabItem {
	id: number;
	label: string;
	to: string;
	current: boolean;
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
