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

export interface User {
	name: string;
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
