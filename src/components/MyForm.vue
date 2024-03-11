<template>
  <form>
    <p>{{ props.yourName }} {{ props.yourMail }} {{ props.yourMessage }}</p>
  </form>
</template>

<script setup>
const props = defineProps(['yourName', 'yourMail', 'yourMessage'])
</script>

<style scoped></style>
