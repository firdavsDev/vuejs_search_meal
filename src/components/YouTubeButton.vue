<template lang="">
  <a :href="href" target="_blank">
    <button
      class="px-3 py-2 rounded border-2 text-white bg-red-600 hover:bg-red-500"
    >
      <i class="fab fa-youtube"></i> <slot>YouTube</slot>
    </button>
  </a>
</template>
<script>
export default {
  name: "YouTubeButton",
  props: {
    href: {
      type: String,
    },
    //alternative version is <slot></slot>
    name: {
      type: String,
      default: "Watch on YouTube",
    },
  },
};
</script>
<style lang=""></style>
