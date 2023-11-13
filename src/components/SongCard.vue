<template>
  <div
    class="card bg-base-100 shadow-xl cursor-pointer transition-all hover:scale-105"
    @click="router.push(`/song/${song.id}`)"
  >
    <figure><img :src="song.song_img" :alt="song.title" class="w-full" /></figure>
    <div class="card-body">
      <h3 class="card-title text-left">
        <p class="w-4/6 truncate">
          {{ song.singer + ' - ' + song.title }}
        </p>
        <div class="badge badge-secondary">NEW</div>
      </h3>
      <div class="card-actions justify-end">
        <div class="badge badge-outline">{{ song.category }}</div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useRouter } from 'vue-router'
import type { SongType } from '@/interfaces/SongInterface'
const router = useRouter()

defineProps<{ song: SongType }>()
</script>
