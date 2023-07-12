// this file defined Globally
require('./bootstrap');

import Vue from 'vue'
import VueRouter from 'vue-router';
Vue.use(VueRouter);
import {routes} from './routes';


import User from './Helpers/User';
window.User = User

// Notification
import Notification from './Helpers/Notification';
window.Notification = Notification

// Sweet Alert
import Swal from 'sweetalert2';
window.Swal =Swal
const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    onOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  });
  window.Toast = Toast;


const router = new VueRouter({
        routes,
        mode:'history'
});


const app = new Vue({
    el: '#app',
    router,
});
