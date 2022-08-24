import { object, string, array, number, mixed, ref } from 'yup';

export const loginFormSchema = object().shape({
	email: string().required().email().label('Email'),
	password: string().required(),
});
