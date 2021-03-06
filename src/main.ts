import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
require('./utils/index');
declare module 'vue/types/vue' {
	interface Vue {
		$cookie: any;
		$notify: Function;
	}
}
Vue.config.productionTip = false;

new Vue({
	router,
	store,
	render: (h) => h(App),
}).$mount('#app');
