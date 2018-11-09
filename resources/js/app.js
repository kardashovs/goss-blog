
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

Vue.component('example-component', require('./components/ExampleComponent.vue'));
Vue.component('user-component', require('./components/UserComponent.vue'));
Vue.component('posts-component', require('./components/Posts/PostsComponent.vue'));

// const files = require.context('./', true, /\.vue$/i)

// files.keys().map(key => {
//     return Vue.component(_.last(key.split('/')).split('.')[0], files(key))
// })


axios.defaults.headers.common = {
    'X-CSRF-TOKEN': document.head.querySelector('meta[name="csrf-token"]').content,
    'ContentType':'application/json',
    'X-Requested-With': 'XMLHttpRequest',
};

const app = new Vue({
    el: '#app'
});
