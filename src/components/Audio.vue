<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <audio ref="audio" controls>
    <source :src="src" type="audio/mp3" />
  </audio>
</template>
<script setup lang="ts">
import { ref } from 'vue'
const audio = ref<HTMLAudioElement>()
defineProps<{ src: string }>()
</script>
