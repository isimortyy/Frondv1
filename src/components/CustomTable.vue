<template>
    <div style="width:90%">
      <q-table :title="title" :rows="rows" :columns="columns" flat bordered>
        <template v-slot:body-cell-editar="props">
            <q-td :props="props" class="q-pa-sm">
              <q-btn class="q-pa-sm" @click="onClickEdit(props.row)">📝</q-btn>
            </q-td>
          </template>
          <template v-slot:body-cell-activar="props">
            <q-td :props="props" v-if="props.row.estado == 1" class="q-pa-sm">
              <q-btn class="q-pa-sm">❌</q-btn>
            </q-td>
            <q-td :props="props" v-else class="q-pa-sm">
              <q-btn class="q-pa-sm">✅</q-btn>
            </q-td>
          </template>
      </q-table>
    </div>
  </template>
  
  <script setup>
  const props = defineProps({
    rows: {
      type: Array,
      required: true
    },
    columns: {
      type: Array,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    onClickEdit:{
      type:Function,
      required: true
    },
  })
  
  
  </script>
  
  <style scoped>
  .tabla {
    border: 1px solid blue;
  }
  </style>
  