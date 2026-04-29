<script setup>
const props = defineProps({
  id: String,
  title: String
})
</script>

<template>
  <div class="youtube-embed">
    <p v-if="title" style="font-weight: 600; margin-bottom: 8px;">{{ title }}</p>
    <iframe
      :src="`https://www.youtube.com/embed/${id}`"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
      style="width: 100%; aspect-ratio: 16/9; border-radius: 8px;"
    ></iframe>
  </div>
</template>

<style scoped>
.youtube-embed {
  margin: 16px 0;
}
</style>
