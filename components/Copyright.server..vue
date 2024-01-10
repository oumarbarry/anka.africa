<script setup lang="ts">
const { t } = useI18n()

const year = new Date().getFullYear()
</script>

<template>
  <span class="text-[#939393]">
    Copyright © {{ year }} ANKA. {{ t('links.copyright') }}.
  </span>
</template>
