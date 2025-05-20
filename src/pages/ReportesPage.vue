<template>
  <Menu>
    <template #default>
      <v-container fluid class="py-8">
        <!-- Filtros -->
        <v-row>
          <v-col cols="12" md="6">
            <v-select
              v-model="cursoSeleccionado"
              :items="cursos"
              label="Seleccione un curso"
              variant="outlined"
              density="comfortable"
              color="amber-darken-2"
              class="mb-4"
            ></v-select>
          </v-col>
          <v-col cols="12" md="6">
            <v-select
              v-model="usuarioSeleccionado"
              :items="usuarios"
              label="Seleccione un usuario"
              variant="outlined"
              density="comfortable"
              color="amber-darken-2"
              class="mb-4"
            ></v-select>
          </v-col>
        </v-row>

        <!-- Botón generar reporte -->
        <v-row>
          <v-col cols="12">
            <v-btn
              color="amber-darken-2"
              class="text-white font-weight-medium mb-6"
              block
              @click="generarReporte"
              elevation="2"
            >
              Generar Reporte
            </v-btn>
          </v-col>
        </v-row>

        <!-- Reporte generado -->
        <v-row v-if="reporteGenerado">
          <v-col cols="12">
            <v-card
              color="green-darken-4"
              dark
              elevation="8"
              class="rounded-lg pa-4"
            >
              <v-card-title class="text-h6 text-amber-darken-2 font-weight-bold">
                Reporte de {{ usuarioSeleccionado }}
              </v-card-title>
              <v-card-text class="text-white">
                <p><strong>Curso:</strong> {{ cursoSeleccionado }}</p>
                <p><strong>Fecha de Inicio:</strong> {{ fechaInicio }}</p>
                <p><strong>Fecha de Finalización:</strong> {{ fechaFinalizacion }}</p>
                <p><strong>Calificación:</strong> {{ calificacion }}</p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>

        <!-- Botón imprimir -->
        <v-row v-if="reporteGenerado">
          <v-col cols="12">
            <v-btn
              color="amber-darken-2"
              class="text-white font-weight-medium mt-4"
              block
              @click="imprimirReporte"
              elevation="2"
            >
              Imprimir Reporte
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </template>
  </Menu>
</template>

<script>
import Menu from "@/components/Menu.vue";

export default {
  name: "Reportes",
  components: {
    Menu,
  },
  data() {
    return {
      cursos: ["Curso 01", "Curso 02", "Curso 03"],
      usuarios: ["Usuario 1", "Usuario 2", "Usuario 3"],
      cursoSeleccionado: "",
      usuarioSeleccionado: "",
      reporteGenerado: false,
      fechaInicio: "",
      fechaFinalizacion: "",
      calificacion: "",
    };
  },
  methods: {
    generarReporte() {
      this.reporteGenerado = true;
      this.fechaInicio = "2025-01-01";
      this.fechaFinalizacion = "2025-01-31";
      this.calificacion = "Aprobado";
    },
    imprimirReporte() {
      window.print();
    },
  },
};
</script>

<style scoped>
/* Puedes agregar ajustes adicionales si lo necesitas */
</style>
