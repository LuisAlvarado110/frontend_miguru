<template>
  <v-form @submit.prevent="register" ref="formRef" validate-on="submit lazy">
    <v-text-field
      v-model="nombre"
      label="Nombre"
      required
      variant="outlined"
      density="comfortable"
      color="amber-darken-2"
      class="mb-4"
    />

    <v-text-field
      v-model="email"
      label="Correo"
      type="email"
      :error-messages="errorEmail ? [errorEmail] : []"
      required
      variant="outlined"
      density="comfortable"
      color="amber-darken-2"
      class="mb-4"
    />

    <v-select
      v-model="rol"
      :items="['Estudiante', 'Creador']"
      label="Rol"
      required
      variant="outlined"
      density="comfortable"
      color="amber-darken-2"
      class="mb-4"
    />

    <v-select
      v-model="idioma"
      :items="['Español', 'Inglés']"
      label="Idioma preferido"
      required
      variant="outlined"
      density="comfortable"
      color="amber-darken-2"
      class="mb-4"
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

    <v-text-field
      v-model="passwordRepeat"
      :type="showPassword ? 'text' : 'password'"
      label="Confirma la contraseña"
      :append-inner-icon="showPassword ? 'mdi-eye-off' : 'mdi-eye'"
      @click:append-inner="showPassword = !showPassword"
      :error-messages="errorPasswordRepeat ? [errorPasswordRepeat] : []"
      variant="outlined"
      density="comfortable"
      color="amber-darken-2"
      class="mb-4"
      required
    />

    <v-btn
      type="submit"
      block
      color="amber-darken-2"
      class="text-white mb-4"
      size="large"
      elevation="2"
    >
      Registrarse
    </v-btn>

    <div class="text-center text-white">
      ¿Ya tienes cuenta?
      <RouterLink to="/login" class="text-amber-lighten-3 font-weight-medium">
        Inicia sesión
      </RouterLink>
    </div>
  </v-form>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      nombre: "",
      email: "",
      rol: "",
      idioma: "",
      password: "",
      passwordRepeat: "",
      error: "",
      errorEmail: "",
      errorPassword: "",
      errorPasswordRepeat: "",
      showPassword: false,
    };
  },
  methods: {
    async register() {
      // Reset de errores
      this.error = "";
      this.errorEmail = "";
      this.errorPassword = "";
      this.errorPasswordRepeat = "";

      // Validaciones
      if (!this.validateEmail(this.email)) {
        this.errorEmail = "Introduce un correo válido";
      }

      if (this.password.length < 6) {
        this.errorPassword = "La contraseña debe tener al menos 6 caracteres";
      }

      if (this.password !== this.passwordRepeat) {
        this.errorPasswordRepeat = "Las contraseñas no coinciden";
      }

      // Si hay errores, detener
      if (this.errorEmail || this.errorPassword || this.errorPasswordRepeat) {
        this.error = "Revisa los campos";
        return;
      }

      const newUser = {
        nombre: this.nombre,
        correo: this.email,
        contraseña: this.password,
        rol: this.rol,
        idioma: this.idioma,
      };

      try {
        const response = await axios.post("http://127.0.0.1:4000/usuarios/add", newUser);
        alert(response.data.message || "Usuario registrado con éxito");

        //Redirige al login tras registro exitoso
        this.$router.push("/login");
      } catch (error) {
        console.error("Error en el registro:", error);
        alert(error.response?.data?.message || "Error al registrar usuario");
      }
    },

    validateEmail(email) {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    },
  },
};
</script>



<style scoped>
/* No se necesita estilo adicional ya que todo está controlado desde RegisterPage.vue */
</style>
