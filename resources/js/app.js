import Vue from 'vue';
import router from '../routes.js';
import App from '@/js/views/App';

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')