<script setup>
import Button from "primevue/button"
import Calendar from 'primevue/calendar';
import Panel from 'primevue/panel';


import { ref } from "vue";
const date = ref();
</script>

<template>
  <div class="card flex justify-content-center">
    <Button label="Check" icon="pi pi-check" />

    <Calendar v-model="date" />

    <Panel header="Scoped Panel">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </Panel>

  </div>
</template>

<style scoped>

</style>
