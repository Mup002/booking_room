import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/users/HomeView.vue';
import SignUpView from '../views/authen/SignUpView.vue';
import SignInView from '../views/authen/SignInView.vue';
import AdminView from '../views/admin/AdminView.vue';
import RoomListView  from '@/views/admin/RoomListView.vue';
import OrderListView from '@/views/admin/OrderListView.vue';
import OrderDetailsView from '@/views/admin/OrderDetailsView.vue';
import SelectService from '@/views/users/SelectService.vue';
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
   
    {
      path : '/admin/',
      name : 'AdminView',
      component: AdminView
    },
    {
      path : '/admin/allRoom',
      name : 'RoomListView',
      component: RoomListView
    },
    {
      path : '/admin/allOrder',
      name : 'OrderListView',
      component: OrderListView
    },
    {
      path: '/admin/getOrderBy/:id',
      name : 'OderDetailsView',
      component: OrderDetailsView
    },
    {
      path: '/',
      name : 'HomeView',
      component : HomeView
    },
    {
      path : '/users/signup',
      name : 'SignUpView',
      component : SignUpView
    },
    {
      path : '/users/login',
      name : 'SignInView',
      component :  SignInView
    },
    {
      path : '/users/services',
      name : 'SelectService',
      component: SelectService
    }
  ]
})

export default router
