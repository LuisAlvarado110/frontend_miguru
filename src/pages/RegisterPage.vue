<template>
  <v-container class="fill-height d-flex flex-column justify-center align-center text-center" fluid>
    <v-card
      class="auth-card pa-6"
      flat
    >
      <h1 class="text-h4 font-weight-bold text-white mb-4">Registrarse en MiGurú</h1>
      <RegisterForm />
    </v-card>
  </v-container>
</template>

<script>
import RegisterForm from "@/components/RegisterForm.vue";

export default {
  components: {
    RegisterForm,
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
