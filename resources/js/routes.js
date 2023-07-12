let Login = require('./components/Auth/Login.vue').default ;
let Register = require('./components/Auth/Register.vue').default ;
let ForgetPassword = require('./components/Auth/ForgetPassword.vue').default ;
let Logout = require('./components/Auth/Logout.vue').default ;
// End Authentication


let Home = require('./components/Home.vue').default ;

// Employees routes
let StoreEmployee = require('./components/employee/create.vue').default ;
let Employee = require('./components/employee/index.vue').default ;


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
  {
    path:'/store-employee',
    name:'/store-employee',
    component: StoreEmployee
  },

  {
    path:'/employee',
    name:'/employee',
    component: Employee
  },

];
