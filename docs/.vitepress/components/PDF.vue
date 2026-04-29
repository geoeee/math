<script setup>
const props = defineProps({
  src: String,
  title: String,
  page: { type: Number, default: 1 },
  height: { type: String, default: '600px' }
})

const pdfUrl = props.src.includes('#') ? props.src : `${props.src}#page=${props.page}`
</script>

<template>
  <div class="pdf-embed">
    <p v-if="title" style="font-weight: 600; margin-bottom: 8px;">📖 {{ title }}</p>
    <iframe
      :src="pdfUrl"
      :style="{ width: '100%', height: height, border: '1px solid var(--vp-c-divider)', borderRadius: '8px' }"
      allowfullscreen
    ></iframe>
    <p style="font-size: 0.85em; color: var(--vp-c-text-2); margin-top: 4px;">
      如嵌入无法显示，<a :href="props.src" target="_blank">点此打开 PDF ↗</a>
    </p>
  </div>
</template>

<style scoped>
.pdf-embed {
  margin: 16px 0;
}
</style>
