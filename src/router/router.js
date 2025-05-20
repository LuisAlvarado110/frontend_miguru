import { createRouter, createWebHistory } from 'vue-router';
import Login from '@/pages/LoginPage.vue';
import Register from '@/pages/RegisterPage.vue';
import Cursos from '@/pages/CursosPage.vue';
import Dashboard from '@/pages/DashboardPage.vue';
import Reportes from '@/pages/ReportesPage.vue';


const routes = [
  { path: '/', redirect: '/login' },
  { path: '/login', name: 'Login', component: Login },
  { path: '/register', name: 'Register', component: Register },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard},
  { path: '/reportes', name: 'Reportes', component: Reportes},
  { path: '/cursos', name: 'Cursos', component: Cursos},
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
