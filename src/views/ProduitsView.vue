<script setup>
import { ref } from 'vue'

// ref est une fonction qui crée une référence réactive
let titre = ref('Nos Produits')
let count = ref(0)

function minus() {
  count.value -= 1
}
</script>

<template>
  <h1>{{ titre }} {{ count }}</h1>

  <button @click='count += 1'>+</button>
  <button @click='minus'>-</button>

</template>

<style scoped>
  button {
    background-color: aquamarine;
  }
</style>
