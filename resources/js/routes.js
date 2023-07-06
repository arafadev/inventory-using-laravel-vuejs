let Login = require('./components/Auth/Login.vue').default ;
let Register = require('./components/Auth/Register.vue').default ;
let ForgetPassword = require('./components/Auth/ForgetPassword.vue').default ;
let Logout = require('./components/Auth/Logout.vue').default ;

// End Authentication
let Home = require('./components/Home.vue').default ;


export const routes =
[
  {
    path:'/',
    name:'/',
    component: Login
  },
  {
    path:'/register',
    name:'/register',
    component: Register
  },
  {
    path:'/forget_password',
    name:'/forget_password',
    component: ForgetPassword
  },
  {
    path:'/logout',
    name:'/logout',
    component: Logout
  },
  {
    path:'/home',
    name:'/home',
    component: Home
  },

];
