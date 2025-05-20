<template>
  <v-container class="fill-height d-flex flex-column justify-center align-center text-center" fluid>
    <v-card
      class="auth-card pa-6"
      flat
    >
      <h1 class="text-h4 font-weight-bold text-white mb-4">Iniciar sesión en MiGurú</h1>
      <LoginForm />
    </v-card>
  </v-container>
</template>

<script>
import LoginForm from "@/components/LoginForm.vue";

export default {
  components: {
    LoginForm,
  },
};
</script>

<style scoped>
.fill-height {
  min-height: 100vh;
  background: linear-gradient(to bottom right, #004d40, #1b5e20);
}

.auth-card {
  background-color: #1b5e20;
  border-radius: 12px;
  width: 100%;
  max-width: 400px;
}
</style>
