import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../pages/Home.vue';
import EditUserView from '../pages/EditUserPage.vue';
import AddUserView from '../pages/AddUserPage.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/add-user',
    name: 'AddUser',
    component: AddUserView
  },
  {
    path: '/edit-user/:id',
    name: 'EditUser',
    component: EditUserView
  }
]

const router = createRouter({
  history: createWebHistory('/'),
  routes
})

export default router

