import { createApp } from 'vue';
import { createPinia } from 'pinia';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';

import App from './App.vue';
import router from './router';

import './assets/main.css';
import './assets/tailwind.css';
import { api } from '@/config/app';

if (localStorage.getItem('token')) {
	api.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token');
}

const app = createApp(App);

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);
app.use(pinia);

app.use(router);

app.mount('#app');
