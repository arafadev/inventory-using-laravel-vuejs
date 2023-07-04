let Login = require('./components/Auth/Login.vue').default ;
let Register = require('./components/Auth/Register.vue').default ;

export const routes =
[
  {
    path:'/',
    name:'/login',
    component: Login
  },
  {
    path:'/register',
    name:'/register',
    component: Register
  },


];
