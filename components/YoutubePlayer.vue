<script setup>
import LiteYouTubeEmbed from "vue-lite-youtube-embed"
import "vue-lite-youtube-embed/style.css"

const props = defineProps({
  id: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
    default: "",
  },
})
</script>

<template>
  <LiteYouTubeEmbed
    :id="props.id"
    :title="props.title"
    poster="maxresdefault"
  />
</template>
