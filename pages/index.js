import '../styles/uikit.less';
import Uikit from 'uikit';
import Vue from 'vue/dist/vue.esm.js';

import App from '../components/app.vue';

Vue.component('app', App);

new Vue({
    el: '#app',
});
