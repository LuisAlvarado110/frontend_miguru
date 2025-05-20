<template>
  <v-app>
    <!-- Barra superior -->
    <v-app-bar app color="green-darken-4" dark flat>
      <v-app-bar-nav-icon @click="drawer = !drawer" color="amber-darken-2" />
      <v-toolbar-title class="text-white font-weight-bold">MiGurú</v-toolbar-title>

      <!-- Botón de Cerrar sesión alineado a la derecha -->
      <v-spacer />
      <v-btn text color="amber-lighten-3" @click="logout">Cerrar sesión</v-btn>
    </v-app-bar>

    <!-- Menú lateral -->
    <v-navigation-drawer v-model="drawer" temporary color="green-darken-4" dark>
      <v-list>
        <v-list-item link to="/dashboard" class="hoverable-link">
          <v-list-item-title class="text-amber-lighten-3">Dashboard</v-list-item-title>
        </v-list-item>
        <v-list-item link to="/cursos" class="hoverable-link">
          <v-list-item-title class="text-amber-lighten-3">Cursos</v-list-item-title>
        </v-list-item>
        <v-list-item link to="/reportes" class="hoverable-link">
          <v-list-item-title class="text-amber-lighten-3">Reportes</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <!-- Contenido principal -->
    <v-main>
      <slot />
    </v-main>

  </v-app>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Menu',
  data() {
    return {
      drawer: false,
    };
  },
  methods: {
    async logout() {
      const token = localStorage.getItem("token");
      if (token) {
        try {
          await axios.post("http://127.0.0.1:4000/usuarios/logout", null, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
            this.$router.push("/login");
        } catch (error) {
          console.error("Error al cerrar sesión en el backend:", error);
        }
      }
    },
  },
};
</script>

<style scoped>
.hoverable-link:hover .v-list-item-title {
  color: #ffca28; /* tono más claro de ámbar al pasar el mouse */
  transition: color 0.2s;
}
</style>
