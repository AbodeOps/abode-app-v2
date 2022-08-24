import type { UserModel } from './../models/UserModel';
import format from 'date-fns/format';
import parseISO from 'date-fns/parseISO';

export const formatDate = (date: Date | string | null, formatStr: string): string => {
	if (date === null) return '-';

	if (Object.prototype.toString.call(date) !== '[object Date]') {
		try {
			date = parseISO(date as string);
		} catch (e) {
			console.warn(e);
			return '-';
		}
	}

	try {
		return format(date as Date, formatStr);
	} catch (e) {
		console.warn(e);
		return '-';
	}
};

const units: { unit: Intl.RelativeTimeFormatUnit; ms: number }[] = [
	{ unit: 'year', ms: 31536000000 },
	{ unit: 'month', ms: 2628000000 },
	{ unit: 'day', ms: 86400000 },
	{ unit: 'hour', ms: 3600000 },
	{ unit: 'minute', ms: 60000 },
	{ unit: 'second', ms: 1000 },
];
const rtf = new Intl.RelativeTimeFormat('en', { numeric: 'auto' });
/**
 * Get language-sensitive relative time message from Dates.
 * @param relative  - the relative dateTime, generally is in the past or future
 * @param pivot     - the dateTime of reference, generally is the current time
 */
export function relativeTimeFromDates(relative: Date | null, pivot: Date = new Date()): string {
	if (!relative) return '';
	const elapsed = relative.getTime() - pivot.getTime();
	return relativeTimeFromElapsed(elapsed);
}

/**
 * Get language-sensitive relative time message from elapsed time.
 * @param elapsed   - the elapsed time in milliseconds
 */
export function relativeTimeFromElapsed(elapsed: number): string {
	for (const { unit, ms } of units) {
		if (Math.abs(elapsed) >= ms || unit === 'second') {
			return rtf.format(Math.round(elapsed / ms), unit);
		}
	}
	return '';
}

export function setupIntercom(user: UserModel) {
	if (window.Intercom) {
		window.Intercom('update', {
			app_id: 'oj9nvgww',
			email: user.email,
			name: user.fullName,
			full_name: user.fullName,
			user_id: user.id,
			created_at: user.created_at.getTime(),
			date_joined: formatDate(user.created_at, 'd-MMM-yyyy'),
			role: user.role,
			company_name: user.company_name,
		});
	}
}

export function bootIntercom(user: UserModel | undefined = undefined) {
	if (window.Intercom) {
		if (user) {
			window.Intercom('boot', {
				app_id: 'oj9nvgww',
				email: user.email,
				name: user.fullName,
				full_name: user.fullName,
				user_id: user.id,
				created_at: user.created_at.getTime(),
				date_joined: formatDate(user.created_at, 'd-MMM-yyyy'),
				role: user.role,
				company_name: user.company_name,
			});
		} else {
			window.Intercom('boot', { app_id: 'oj9nvgww' });
		}
	}
}

export function tearDownIntercom() {
	if (window.Intercom) {
		window.Intercom('shutdown');
	}
}

export function rebootIntercom(user: UserModel | undefined = undefined) {
	tearDownIntercom();
	bootIntercom(user);
}

export function openIntercom() {
	if (window.Intercom) {
		window.Intercom('show');
	}
}
