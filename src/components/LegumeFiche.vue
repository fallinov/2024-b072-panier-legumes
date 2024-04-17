<script setup>
/* setup active la nouvelle syntaxe de script COMPOSITION */

// Propriétés du composant
defineProps({
  legume: {
    type: Object,
    required: true
  }
})
</script>

<!--  Code HTML -->
<template>
  <div>
    <h2>{{ legume.nom }}</h2>
    <div>{{ legume.prix }} CHF</div>
    <div>{{ legume.couleur }}</div>
  </div>
</template>

<style scoped>
/* scope permet de limiter le style à ce composant */
p {
  color: red;
}
</style>
