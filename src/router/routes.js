import Apprentice from '../views/Apprentice.vue';
import Assignment from '../views/Assignment.vue';
import Binnacle from '../views/Binnacle.vue';
import Followup from '../views/Followup.vue';
import ForgottenPassword from '../views/ForgottenPassword.vue';
import Index from '../views/Index.vue';
import Log from '../views/Log.vue';
import Login from '../views/Login.vue';
import Modality from '../views/Modality.vue';
import Register from '../views/Register.vue';
import RessetPassword from '../views/ResetPassword.vue';
import Home from '../views/home.vue'
import { createRouter, createWebHashHistory } from 'vue-router';

export const routes = [
    {
        path: '/home', component: Home, children: [
            { path: '/index', component: Index },
            { path: '/apprentice', component: Apprentice },
            { path: '/assignment', component: Assignment },
            { path: '/binnacle', component: Binnacle },
            { path: '/followup', component: Followup },
            { path: '/log', component: Log },
            { path: '/modality', component: Modality },
        ]
    },
    { path: '/', component: Login },
    { path: '/forgotten-password', component: ForgottenPassword },
    { path: '/reset-password', component: RessetPassword },
    { path: '/register', component: Register }

];

export const router = createRouter({
    history: createWebHashHistory(),
    routes
});