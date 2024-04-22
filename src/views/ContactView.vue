<script setup>
import { ref, computed } from 'vue'

const legumes = ref([
  { libelle: 'Carottes', prix: 2.40, couleur: '#FFA500' },
  { libelle: 'Tomates', prix: 2.50, couleur: '#FF6347' },
  { libelle: 'Courgettes', prix: 1.80, couleur: '#228B22' },
  { libelle: 'Poivrons', prix: 2.20, couleur: '#FF4500' },
  { libelle: 'Aubergines', prix: 2.00, couleur: '#800080' },
  { libelle: 'Radis', prix: 1.00, couleur: '#FF0000' },
  { libelle: 'Salades', prix: 1.50, couleur: '#008000' },
  { libelle: 'Concombres', prix: 1.20, couleur: '#008000' },
  { libelle: 'Haricots verts', prix: 2.00, couleur: '#008000' },
  { libelle: 'Pommes de terre', prix: 1.80, couleur: '#D2B48C' },
  { libelle: 'Oignons', prix: 1.20, couleur: '#FFFF00' },
  { libelle: 'Choux', prix: 1.80, couleur: '#808000' },
  { libelle: 'Fenouils', prix: 2.00, couleur: '#808000' },
  { libelle: 'Radis noirs', prix: 1.50, couleur: '#000000' },
  { libelle: 'Betteraves', prix: 1.80, couleur: '#8B0000' },
  { libelle: 'Céleris', prix: 1.20, couleur: '#808000' },
  { libelle: 'Navets', prix: 1.50, couleur: '#FFFFFF' },
  { libelle: 'Choux-fleurs', prix: 2.00, couleur: '#FFFFFF' },
  { libelle: 'Brocolis', prix: 1.80, couleur: '#008000' },
  { libelle: 'Courges', prix: 2.20, couleur: '#FF8C00' },
])

const legumesTries = computed(() => {
  return legumes.value.sort((a, b) => a.libelle.localeCompare(b.libelle))
})
</script>

<template>
  <h1>Nous contacter</h1>

  <v-card title="Nos légumes"
          class="mx-auto"
          max-width="450"
          prepend-icon="mdi-leaf"
  >
    <v-list lines="two" selectable item-props>
        <v-list-item
          v-for="legume in legumesTries"
          :key="legume.libelle"
          :title="legume.libelle"
          :subtitle="legume.prix.toFixed(2) + ' CHF/1kg.'"x
        >
          <template v-slot:prepend>
            <v-avatar :color="legume.couleur">
              <v-icon icon="mdi-leaf"></v-icon>
            </v-avatar>
          </template>
          <template v-slot:append>
            <v-btn icon="mdi-cart"></v-btn>
          </template>
        </v-list-item>
    </v-list>
  </v-card>

</template>

<style scoped>
.v-list-item {
  border-top: 1px solid rgba(0, 0, 0, 0.12);
}
</style>
