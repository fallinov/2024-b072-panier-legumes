<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/legumes">Nos Légumes</RouterLink>
        <RouterLink to="/contact">Nous Contacter</RouterLink>
      </nav>
    </div>
  </header>
  <!-- Affiche le composant correspondant à l'URL, à la route courante -->
  <!-- Les routes sont décrites dans le fichier src/router/index.js -->
  <main>
    <RouterView />
  </main>
  <footer>
    &copy;2024 - Steve Fallet
  </footer>
</template>

<style scoped>
nav a {
  display: inline-block;
  margin-right: 10px;
  padding: .5rem;
  background-color: black;
  color: white;
  text-decoration: none;
}

nav a.router-link-active,
nav a:hover {
  background-color: red;
}

</style>
