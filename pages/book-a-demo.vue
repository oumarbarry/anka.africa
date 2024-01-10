<script setup lang="ts">
definePageMeta({ layout: "empty" })

const options = { url: "https://calendly.com/oumar-barry/book-a-demo-with-anka" }
</script>

<template>
  <div>
    <CalendlyInlineWidget v-bind="options" />
  </div>
</template>
