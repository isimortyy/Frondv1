<template>
  <q-page class="flex flex-center">
    <q-card class="q-pa-md" style="max-width: 500px"> <!-- Aumentamos el ancho a 500px -->
      <!-- Encabezado con el logo y título -->
      <div class="text-center q-mb-md">
        <img :src="logosena" alt="Logo SENA" class="imgSena">
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

        <!-- Input de Usuario -->
        <q-input
          v-model="username"
          label="Usuario"
          dense
          outlined
          class="q-mt-md"
        />

        <!-- Input de Contraseña con icono para mostrar/ocultar -->
        <q-input
          v-model="password"
          :type="showPassword ? 'text' : 'password'" 
          label="Contraseña"
          dense
          outlined
          class="q-mt-md"
        >
          <!-- Icono de mostrar/ocultar contraseña (aparece a la derecha) -->
          <template v-slot:append>
            <q-icon
              :name="eyeIcon"
              class="cursor-pointer"
              @click="togglePasswordVisibility"
            />
          </template>
        </q-input>

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
  </q-page>
</template>


<script setup>
import { ref } from 'vue';
import { useQuasar } from 'quasar';
import logosena from '../assets/logosena.png';

const $q = useQuasar();

const selectedRole = ref('');
const roles = ['ADMINISTRADOR', 'INSTRUCTOR', 'APRENDIZ'];

const username = ref('');
const password = ref('');
const showPassword = ref(false);

const eyeIcon = ref('visibility_off'); // Icono por defecto (ocultar contraseña)

const togglePasswordVisibility = () => {
  showPassword.value = !showPassword.value;
  eyeIcon.value = showPassword.value ? 'visibility' : 'visibility_off';
};

const onSubmit = () => {
  if (selectedRole.value && username.value && password.value) {
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
      message: 'Por favor, rellena todos los campos',
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
  width: 100%;
}

.full-width {
  width: 100%;
}

.imgSena {
    max-width: 100px;
    margin: 10px 0;
}
</style>
