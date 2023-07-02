<template lang="">
  <header class="bg-white shadow h-16 flex justify-between items-stretch">
    <router-link
      class="inline-flex items-center px-2 h-full transition hover:bg-gray-200"
      to="/"
      >Home</router-link
    >
    <div class="flex items-center gap-1">
      <router-link
        :to="{ name: 'byName' }"
        class="inline-flex items-center px-2 h-full transition hover:bg-gray-200"
        >By Name</router-link
      >
      <router-link
        :to="{ name: 'byLetter' }"
        class="inline-flex items-center px-2 h-full transition hover:bg-gray-200"
        >By Letter</router-link
      >
      <router-link
        :to="{ name: 'byIntegrate' }"
        class="inline-flex items-center px-2 h-full transition hover:bg-gray-200"
        >By Integrate</router-link
      >
    </div>
  </header>
</template>
<script>
export default {
  name: "Navbar",
};
</script>
<style lang=""></style>
