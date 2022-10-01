import axios from 'axios';

export const BASE_URL = import.meta.env.VITE_APP_API_BASE;
export const WEBSITE_URL = import.meta.env.VITE_WEBSITE_URL;

export const helpSupportUrl = `${WEBSITE_URL}`;
export const termsConditionUrl = `${WEBSITE_URL}/terms`;
export const privacyPolicyUrl = `${WEBSITE_URL}/privacy`;
export const startPageUrl = `${WEBSITE_URL}/start`;

axios.defaults.baseURL = BASE_URL;
if (localStorage.getItem('token')) {
	axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token');
}
export const api = axios;

export const ENDPOINTS = {};
