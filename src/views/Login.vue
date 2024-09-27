<template>
    <q-page class="flex flex-center">
      <q-card class="q-pa-md" style="max-width: 400px">
        <!-- Encabezado con el logo -->
        <div class="text-center q-mb-md">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Emblema_del_SENA.svg/1200px-Emblema_del_SENA.svg.png" alt="SENA Logo" width="100" />
          <h3 class="q-mt-md">REPFORA</h3>
          <h4 class="text-green-8">LOGIN</h4>
        </div>
  
        <!-- Selección del rol -->
        <q-form @submit="onSubmit">
          <q-select
            v-model="selectedRole"
            label="Rol"
            :options="roles"
            dense
            outlined
          />
  
          <!-- Botón de Iniciar sesión -->
          <q-btn
            type="submit"
            label="INICIAR SESIÓN"
            color="green"
            class="full-width q-mt-lg"
          />
  
          <!-- Enlace para olvidar contraseña -->
          <q-btn
            flat
            label="Olvidé mi contraseña"
            color="green"
            class="full-width q-mt-sm"
          />
        </q-form>
      </q-card>
  
      <!-- Botón para registrar novedades -->
      <q-btn
        label="REGISTRAR NOVEDAD"
        color="green"
        class="absolute-top-right q-mt-md q-mr-md"
        icon="add"
      />
    </q-page>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { useQuasar } from 'quasar';
  
  const $q = useQuasar();
  
  const selectedRole = ref('');
  const roles = ['CONSULTOR', 'ADMINISTRADOR', 'USUARIO'];
  
  const onSubmit = () => {
    if (selectedRole.value) {
      $q.notify({
        color: 'green-4',
        textColor: 'white',
        message: `Has iniciado sesión como ${selectedRole.value}`,
        position: 'top',
      });
    } else {
      $q.notify({
        color: 'red-4',
        textColor: 'white',
        message: 'Por favor, selecciona un rol',
        position: 'top',
      });
    }
  };
  </script>
  
  <style scoped>
  .q-page {
    background-color: #f5f5f5;
    min-height: 100vh;
  }
  
  .q-card {
    box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.1);
  }
  
  .full-width {
    width: 100%;
  }
  </style>
  
  