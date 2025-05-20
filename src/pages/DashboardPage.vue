<template>
  <Menu>
    <template #default>
      <v-container fluid class="py-8">
        <!-- Título -->
        <v-row justify="center">
          <v-col cols="12" class="text-center">
            <h1 class="text-h5 font-weight-bold text-amber-darken-2 mb-6">
              Estadísticas de Cursos
            </h1>
          </v-col>
        </v-row>

        <!-- Tarjetas de progreso -->
        <v-row>
          <v-col cols="12" md="4">
            <v-card color="green-darken-4" dark class="pa-4" elevation="6" rounded>
              <v-card-title class="text-amber-darken-2 font-weight-bold">
                Curso 01
              </v-card-title>
              <v-card-text class="text-center">
                <v-progress-circular
                  :value="curso01"
                  color="amber-darken-2"
                  size="100"
                  width="10"
                >
                  {{ curso01 }}%
                </v-progress-circular>
                <p class="mt-4">Usuarios inscritos: {{ inscritosCurso01 }}</p>
              </v-card-text>
            </v-card>
          </v-col>

          <v-col cols="12" md="4">
            <v-card color="green-darken-4" dark class="pa-4" elevation="6" rounded>
              <v-card-title class="text-amber-darken-2 font-weight-bold">
                Curso 02
              </v-card-title>
              <v-card-text class="text-center">
                <v-progress-circular
                  :value="curso02"
                  color="amber-darken-2"
                  size="100"
                  width="10"
                >
                  {{ curso02 }}%
                </v-progress-circular>
                <p class="mt-4">Usuarios inscritos: {{ inscritosCurso02 }}</p>
              </v-card-text>
            </v-card>
          </v-col>

          <v-col cols="12" md="4">
            <v-card color="green-darken-4" dark class="pa-4" elevation="6" rounded>
              <v-card-title class="text-amber-darken-2 font-weight-bold">
                Curso 03
              </v-card-title>
              <v-card-text class="text-center">
                <v-progress-circular
                  :value="curso03"
                  color="amber-darken-2"
                  size="100"
                  width="10"
                >
                  {{ curso03 }}%
                </v-progress-circular>
                <p class="mt-4">Usuarios inscritos: {{ inscritosCurso03 }}</p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </template>
  </Menu>
</template>

<script>
import Menu from '@/components/menu.vue';

export default {
  name: 'Dashboard',
  components: {
    Menu,
  },
  data() {
    return {
      curso01: 75,
      curso02: 50,
      curso03: 90,
      inscritosCurso01: 120,
      inscritosCurso02: 80,
      inscritosCurso03: 150,
    };
  },
};
</script>

<style scoped>
/* Puedes ajustar tipografía o espacios si lo deseas */
</style>
