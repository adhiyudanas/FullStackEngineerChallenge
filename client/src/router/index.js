import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/pages/Login.vue'
import Admin from '@/pages/Admin.vue'
import Employee from '@/pages/Employee.vue'

Vue.use(Router)

export default new Router({
  /**
   * The system consists of 3 main pages, the login, admin and employee
   * Each separated in different vue components
   */
  routes: [
    {
      path: '/',
      name: 'Employee Review',
      component: Login
    },
    {
      path: '/admin',
      name: 'Admin',
      component: Admin
    },
    {
      path: '/employee',
      name: 'Employee',
      component: Employee
    }
  ]
})
