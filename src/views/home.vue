<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

import fichasImage from '/src/assets/fichasImage.png';
import aprendicesImage from '/src/assets/aprendices.png';
import bitacoraImage from '/src/assets/bitacoras.png';
import seguimientosImage from '/src/assets/seguimientosimage.png';
import logImage from '/src/assets/logImage.png';
import modalidadImage from '/src/assets/modalidadImage.png';


const router = useRouter();
const drawerOpen = ref(false);
const headerBgColor = 'rgb(78, 172, 49)'; 
const nombreUsuario = ref('');
const correoUsuario = ref('');

const menuItems = [
  { title: 'Fichas', route: 'fichas', image: fichasImage },
  { title: 'Aprendices', route: 'aprendices', image: aprendicesImage },
  { title: 'Bitacora', route: 'bitacora', image: bitacoraImage },
  { title: 'Seguimientos', route: 'seguimientos', image: seguimientosImage },
  { title: 'Log', route: 'log', image: logImage },
  { title: 'Modalidad', route: 'modalidad', image: modalidadImage }

];

function navigateTo(route) {
  if(route === '') {
    router.push('/home');
  } else {
    router.push(`/home/${route}`);
  }
}

function toggleDrawer() {
  drawerOpen.value = !drawerOpen.value;
}

function cerrarSesion() {
  localStorage.removeItem('token');
  sessionStorage.removeItem('email');
  sessionStorage.removeItem('nombre');
  router.push('/login');
}

onMounted(() => {
  nombreUsuario.value = sessionStorage.getItem('nombre') || '';
  correoUsuario.value = sessionStorage.getItem('email') || '';
});
</script>

<template>
  <q-layout view="hHh LpR fFf">
    <q-drawer
      v-model="drawerOpen"
      side="left"
      overlay behavior="desktop"
      elevated
      bordered
      class="q-drawer__content fit scroll drawer-styled"
    >
      <div class="drawer-header">
        <q-avatar size="80px" class="avatar">
          <q-icon name="person" size="60px" />
        </q-avatar>
        <div class="user-details">
          <p class="user-name">{{ nombreUsuario }}</p>
          <p class="user-email">{{ correoUsuario }}</p>
        </div>
      </div>
      <q-list class="menu-list">
  <q-item clickable @click="navigateTo('')" class="menu-item">
    <q-item-section avatar>
      <q-icon name="home" class="icon" />
    </q-item-section>
    <q-item-section class="drawer-item">INICIO</q-item-section>
  </q-item>
  <q-item clickable @click="navigateTo('fichas')" class="menu-item">
    <q-item-section avatar>
      <q-icon name="folder" class="icon" />
    </q-item-section>
    <q-item-section class="drawer-item">FICHAS</q-item-section>
  </q-item>
  <q-item clickable @click="navigateTo('aprendices')" class="menu-item">
    <q-item-section avatar>
      <q-icon name="school" class="icon" />
    </q-item-section>
    <q-item-section class="drawer-item">APRENDICES</q-item-section>
  </q-item>
  <q-item clickable @click="navigateTo('bitacora')" class="menu-item">
    <q-item-section avatar>
      <q-icon name="note" class="icon" />
    </q-item-section>
    <q-item-section class="drawer-item">BITÁCORA</q-item-section>
  </q-item>
  <q-item clickable @click="navigateTo('seguimientos')" class="menu-item">
    <q-item-section avatar>
      <q-icon name="track_changes" class="icon" />
    </q-item-section>
    <q-item-section class="drawer-item">SEGUIMIENTOS</q-item-section>
  </q-item>
  <q-item clickable @click="navigateTo('log')" class="menu-item">
    <q-item-section avatar>
      <q-icon name="history" class="icon" />
    </q-item-section>
    <q-item-section class="drawer-item">LOG</q-item-section>
  </q-item>
  <q-item clickable @click="navigateTo('modalidad')" class="menu-item">
    <q-item-section avatar>
      <q-icon name="build" class="icon" />
    </q-item-section>
    <q-item-section class="drawer-item">MODALIDAD</q-item-section>
  </q-item>
</q-list>
 </q-drawer>

    <q-header elevated :style="{ backgroundColor: headerBgColor }">
      <q-toolbar>
        <q-btn dense flat icon="menu" @click="toggleDrawer" />
        <q-toolbar-title class="toolbar-title">REPFORA</q-toolbar-title>
        <q-space />
        <q-btn dense flat icon="logout" @click="cerrarSesion" />
      </q-toolbar>
    </q-header>

    <q-page-container>
      <q-page class="q-pa-md">
        <div v-if="!$route.path.includes('/home/')" class="row justify-center q-mt-md q-gutter-md">
          <div class="col-xs-12 col-sm-6 col-md-3" v-for="item in menuItems" :key="item.title">
            <q-card class="card-styled">
              <q-img :src="item.image" class="card-image" />
              <q-card-section class="q-pa-xs">
                <div class="card-title">{{ item.title }}</div>
              </q-card-section>
              <q-card-actions>
                <q-btn @click="() => navigateTo(item.route)" class="view-button">VER</q-btn>
              </q-card-actions>
            </q-card>
          </div>
        </div>
        <router-view></router-view>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Calistoga&family=Oswald:wght@200..700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Sofia+Pro:wght@400;600&display=swap');

.drawer-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: rgb(78, 172, 49);
  color: white;
  text-align: center;
}

.avatar {
  margin-bottom: 15px;
  background-color: #ffffff;
  border: 4px solid rgb(255, 255, 255);
  display: flex;
  align-items: center;
  justify-content: center;
}

.avatar .q-icon {
  color: rgb(78, 172, 49);
}

.user-details {
  font-family: 'Bebas Neue', sans-serif;

}

.user-name {
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0;
}

.user-email {
  font-size: 1rem;
  font-weight: 400;
  margin: 0;
}

.q-header, .q-drawer {
  font-family: 'Sofia Pro', sans-serif;
}

.menu-list {
  padding-top: 20px; 
}

.menu-item {
  position: relative;
  padding: 10px;
  margin: 10px;
  border-radius: 75px;
  background: linear-gradient(135deg, rgb(42, 175, 2), rgba(77, 229, 115, 0.8));
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  text-align:left;
}

.menu-item:hover {
  transform: scale(1.02);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
}

.drawer-item {
  color: #000000;
  font-family: "Calistoga", serif;
  font-weight: 400;
  font-size: 15px;
  font-style: normal;
}

.icon {
  color: #000000; 
}

.toolbar-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: #fff;
}

.card-image {
  width: 100%;
  height: 200px;
  object-fit: cover; 
  border-radius: 20px 20px 0 0;
}

.card-title {
  font-size: 1.5rem; 
  font-weight: bold;
  text-align: center;
  margin: 5px 0; 
  background-color: transparent;
}

.card-styled {
  display: flex;
  flex-direction: column;
  height: 300px;
  border: none;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(7, 246, 11, 0.2);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border-radius: 20px; 
}

.card-styled:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 16px rgba(54, 255, 57, 0.462);
}

.view-button {
  background-color: rgb(78, 172, 49);
  font-size: 15px;
  color: white;
  width: 100%; 
  border-radius: 15px;
  padding: 10px 0; 
  font-weight: bold; 
  transition: background-color 0.3s ease;
}

.view-button:hover {
  background-color: #4d6f2b;
}
</style>