<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="w-full h-screen flex flex-col items-center justify-center gap-4">
    <img
      :src="song.song_img"
      class="w-[500px] h-[500px] rounded-3xl"
      :alt="song.title"
      @load="loading = false"
    />
    <div v-if="loading" class="w-[500px] h-[500px] rounded-3xl skeleton"></div>
    <p class="text-xl font-bold">{{ song.singer + ' - ' + song.title }}</p>
    <Audio class="w-1/2" :src="song.src" />
    <button class="btn btn-neutral" onclick="add_to_playlist_modal.showModal()">
      Add to playlist
    </button>
    <AddToPlaylistModal :song="song" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

import { useRoute } from 'vue-router'
import Audio from '@/components/Audio.vue'
import { songData } from '../data/dummy-data'
import AddToPlaylistModal from '@/components/AddToPlaylistModal.vue'
const loading = ref<boolean>(true)

const route = useRoute()
const id: string = route.params.id as string
const song = songData[parseInt(id)]
</script>
