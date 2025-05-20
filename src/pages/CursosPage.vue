<template>
  <Menu>
    <template #default>
      <v-container fluid class="py-8">
        <v-row>
          <v-col
            v-for="(curso, index) in cursos"
            :key="index"
            cols="12"
            md="4"
          >
            <v-card
              color="green-darken-4"
              dark
              elevation="8"
              class="rounded-lg"
            >
              <v-img
                :src="curso.imagen"
                height="200px"
                cover
              ></v-img>

              <v-card-title class="text-amber-darken-2 font-weight-bold">
                {{ curso.titulo }}
              </v-card-title>

              <v-card-subtitle class="text-amber-lighten-3">
                {{ curso.subtitulo }}
              </v-card-subtitle>

              <v-card-text class="text-white text-body-2">
                {{ curso.descripcion }}
              </v-card-text>

              <v-card-actions>
                <v-btn
                  color="amber-darken-2"
                  class="text-white font-weight-medium"
                  block
                  elevation="2"
                >
                  Seleccionar
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </template>
  </Menu>
</template>

<script>
import Menu from "@/components/Menu.vue";

export default {
  components: {
    Menu,
  },
  data() {
    return {
      cursos: [
        {
          titulo: "Curso de capacitación 01",
          subtitulo: "Primer curso",
          imagen:
            "https://img.freepik.com/vector-gratis/concepto-diseno-web-dibujado-mano_23-2147839737.jpg",
          descripcion:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Condimentum porttitor per dis nostra tempor convallis litora...",
        },
        {
          titulo: "Curso de capacitación 02",
          subtitulo: "Segundo curso",
          imagen:
            "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEirqFAw-J6wyzqlow1SqgB5HCu6KnHzNAVq1vYz0A0TXzZ50LyY4oPiDmmooZgglSYE8sO1jR51gfmFK2qdCUZ-sOOwyNKA8gSVmE70gIp9QF2YUPkl1gpJRfmU2mpA5932tugBP8JZzbQv/s1600/Tecnologia+%25281%2529.jpg",
          descripcion:
            "Fusce dictum pellentesque diam auctor lobortis. Non felis libero tortor integer ut aliquet tempus...",
        },
        {
          titulo: "Curso de capacitación 03",
          subtitulo: "Tercer curso",
          imagen:
            "https://www.fundacionaquae.org/wp-content/uploads/2020/09/tecnologia-educacion-1024x684.jpg",
          descripcion:
            "Praesent porttitor urna purus parturient mus sem hendrerit senectus. Felis rhoncus non molestie tempus...",
        },
      ],
    };
  },
};
</script>

<style scoped>
.v-card-text {
  max-height: 180px;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
