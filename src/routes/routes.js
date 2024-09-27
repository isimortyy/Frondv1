import { createRouter, createWebHashHistory } from "vue-router";
import Login from '../views/Login.vue'; // Importamos el componente Login

const routes = [
  {
    path: '/',           // Ruta principal
    name: 'Login',       // Nombre de la ruta
    component: Login,    // Componente asociado a la ruta
  },
  // Puedes agregar más rutas aquí si tienes más vistas en tu aplicación
];

const router = createRouter({
    history: createWebHashHistory(),
    routes
  });
  
  
  export default router;