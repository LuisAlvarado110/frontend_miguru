<template>
  <v-form @submit.prevent="login" ref="formRef" validate-on="submit lazy">
    <v-text-field
      v-model="email"
      label="Correo"
      type="email"
      :error-messages="errorEmail ? [errorEmail] : []"
      variant="outlined"
      density="comfortable"
      color="amber-darken-2"
      class="mb-4"
      required
    />

<v-text-field
  v-model="password"
  :type="showPassword ? 'text' : 'password'"
  label="Contraseña"
  :append-inner-icon="showPassword ? 'mdi-eye-off' : 'mdi-eye'"
  @click:append-inner="showPassword = !showPassword"
  :error-messages="errorPassword ? [errorPassword] : []"
  variant="outlined"
  density="comfortable"
  color="amber-darken-2"
  class="mb-4"
  required
/>


    <v-alert
      v-if="error"
      type="error"
      variant="tonal"
      class="mb-4"
      border="start"
    >
      {{ error }}
    </v-alert>

    <v-btn
      type="submit"
      block
      color="amber-darken-2"
      class="text-white mb-4"
      size="large"
      elevation="2"
    >
      Iniciar sesión
    </v-btn>

    <div class="text-center text-white">
      ¿No tienes cuenta?
      <RouterLink to="/register" class="text-amber-lighten-3 font-weight-medium">
        Regístrate
      </RouterLink>
    </div>
  </v-form>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      email: "",
      password: "",
      error: "",
      errorEmail: "",
      errorPassword: "",
      showPassword: false,
    };
  },
  methods: {
    async login() {
      this.error = "";
      this.errorEmail = "";
      this.errorPassword = "";

      // Validaciones locales
      if (!this.validateEmail(this.email)) {
        this.errorEmail = "Introduce un email válido.";
      }
      if (this.password.length < 6) {
        this.errorPassword = "La contraseña debe tener al menos 6 caracteres.";
      }

      if (!this.errorEmail && !this.errorPassword) {
        try {
          const response = await axios.post("http://127.0.0.1:4000/usuarios/login", {
            correo: this.email,
            contraseña: this.password,
          });

          if (response.data.response === "success") {
            //alert("¡Inicio de sesión exitoso!");

            // Puedes guardar el token si deseas
            localStorage.setItem("token", response.data.token);

            // Opcional: redirigir
            this.$router.push("/dashboard");
          } else {
            this.error = response.data.message || "Error en el login.";
          }
        } catch (err) {
          console.error("Error al iniciar sesión:", err);
          this.error = err.response?.data?.message || "Error en el servidor.";
        }
      } else {
        this.error = "Revisa los campos.";
      }
    },

    validateEmail(email) {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    },
  },
};
</script>

<style scoped>
/* Ya no es necesario ningún estilo adicional */
</style>
