/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
const path = require('path');
const colors = require('tailwindcss/colors');
const plugin = require('tailwindcss/plugin');

module.exports = {
	content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}', path.resolve(__dirname, './node_modules/litepie-datepicker/**/*.js')],
	darkMode: 'class',
	theme: {
		extend: {
			fontFamily: {
				sans: ['DM Sans', ...defaultTheme.fontFamily.sans],
			},
			colors: {
				black: {
					DEFAULT: '#231F20',
				},
				gray: {
					10: '#F9FAFB',
					20: '#F2F4F7',
					30: '#E4E7EC',
					40: '#D0D5DD',
					50: '#98A2B3',
					60: '#667085',
					70: '#475467',
					80: '#344054',
					90: '#1D2939',
				},
				green: {
					DEFAULT: '#00956B',
					10: '#F5FFFC',
					15: '#BBEFD6',
					20: '#E0FFF6',
					30: '#CCFFF1',
					40: '#9EFAE0',
					50: '#75F0CD',
					60: '#2FC69C',
					70: '#29A381',
					80: '#048B65',
					90: '#026348',
				},
				orange: {
					DEFAULT: '#FD7448',
					10: '#FFF7F5',
					20: '#FEECE6',
					30: '#FCDBD0',
				},
				red: {
					DEFAULT: '#F54624',
				},
				violet: {
					DEFAULT: '#5746AF',
				},
				blue: {
					DEFAULT: '#006ADC',
					10: '#F0F7FF',
					20: '#E0EFFF',
					30: '#CEE5FD',
					40: '#B3D7FE',
					50: '#6EB0F7',
					60: '#4196F1',
					70: '#1B77DA',
					80: '#1D5086',
				},
				'litepie-primary': '#00956B', // color system for light mode
				'litepie-secondary': '#00956B', // color system for dark mode
			},
		},
	},
	variants: {
		extend: {
			cursor: ['disabled'],
			textOpacity: ['disabled'],
			textColor: ['disabled'],
		},
	},
	plugins: [
		require('@tailwindcss/forms'),
		require('@tailwindcss/line-clamp'),
		plugin(function ({ addUtilities }) {
			addUtilities({
				'.no-scrollbar::-webkit-scrollbar': {
					display: 'none',
				},
				'.no-scrollbar': {
					'-ms-overflow-style': 'none',
					'scrollbar-width': 'none',
				},
			});
		}),
	],
};
