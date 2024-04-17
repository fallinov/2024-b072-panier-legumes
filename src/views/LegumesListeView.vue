<script setup>
import LegumeFiche from "@/components/LegumeFiche.vue";
</script>

<template>
  <h1>Nos légumes</h1>
  <ul>
    <li>
      <LegumeFiche :legume="{nom: 'Poivron', prix: 5, couleur: 'Rouge'}" />
    </li>
  </ul>

</template>

<style scoped></style>
