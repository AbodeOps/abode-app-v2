import { resolveRequestError } from '@/utils/auth';
import { api } from '@/config/app';

export default class AuthService {
	static async signup({
		firstName,
		lastName,
		email,
		phoneNumber,
		password,
		username,
		referrer,
	}: {
		firstName: string;
		lastName: string;
		email: string;
		phoneNumber: string;
		password: string;
		username: string;
		referrer: string;
	}) {
		try {
			const res = await api.post('/auth/register', {
				first_name: firstName.trim(),
				last_name: lastName.trim(),
				email: email.trim(),
				phone_number: phoneNumber.trim(),
				password,
				username: username.trim(),
				referrer: referrer.trim(),
			});

			return res.data;
		} catch (error: any) {
			resolveRequestError(error);
		}
	}

	static async login({ loginId, password }: { loginId: string; password: string }) {
		try {
			const res = await api.post('/auth/login', {
				login_id: loginId,
				password,
			});

			return res.data;
		} catch (error) {
			resolveRequestError(error);
		}
	}

	static async collectInterests({
		expectations,
		purpose,
		interests,
		who,
		used
	}: {
		expectations: string;
		purpose: string;
		interests: string[];
		used: boolean;
		who: string;
	}) {
		try {
			const res = await api.post('clients/collect-interests', {
				type_interests: interests.toString(),
				volume_interests: expectations,
				purpose,
				who,
				used,
			});

			return res.data;
		} catch (error) {
			resolveRequestError(error);
		}
	}

	static async fetchActivityLogs() {
		try {
			const res = await api.get(`activity-logs`);

			return res.data;
		} catch (error) {
			resolveRequestError(error);
		}
	}

	static async fetchProfile() {
		try {
			const res = await api.post(`/auth/me`);

			return res.data;
		} catch (error) {
			resolveRequestError(error);
		}
	}

	static async editProfile(payload: any) {
		try {
			const res = await api.post(`/auth/me/update`, payload);

			return res.data;
		} catch (error) {
			resolveRequestError(error);
		}
	}

	static async fetchReferrals() {
		try {
			const res = await api.get(`referrals`);

			return res.data;
		} catch (error) {
			resolveRequestError(error);
		}
	}

	static async checkUsername({ username }: { username: string }) {
		try {
			const res = await api.get(`username/${username}`);

			return res.data;
		} catch (error) {
			resolveRequestError(error);
		}
	}

	static async resolveReferrer({ referrer }: { referrer: string }) {
		try {
			const res = await api.post(`referrer/resolve`, {
				referrer,
			});

			return res.data;
		} catch (error) {
			resolveRequestError(error);
		}
	}

	static async forgotPassword(email: string) {
		try {
			// const res = await api.post(`auth/forgot-password`, { email });
			const res = await api.post(`auth/forgot-password`, { email });

			return res.data;
		} catch (error) {
			resolveRequestError(error);
		}
	}

	static async resetPassword(form: { otp: string | number; email: string; password: string }) {
		try {
			const res = await api.post(`auth/reset-password`, form);

			return res.data;
		} catch (error) {
			resolveRequestError(error);
		}
	}

	static async verifyEmail(form: { otp: string | number; email: string }) {
		try {
			const res = await api.post(`auth/email/verify`, form);

			return res.data;
		} catch (error) {
			resolveRequestError(error);
		}
	}

	static async resendEmailVerification(email: string) {
		try {
			const res = await api.post('auth/verify-email', { email });

			return res.data;
		} catch (error) {
			resolveRequestError(error);
		}
	}

	static authenticateUser(token: string) {
		api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
		localStorage.setItem('token', token);
	}
}
