<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="p-48">
    <div class="flex gap-8">
      <img :src="playlist.playlist_img" :alt="playlist.title" class="w-96 h-96" />
      <div class="flex flex-col justify-between">
        <div>
          <h2 class="font-bold text-5xl">{{ playlist.title }}</h2>
          <p class="text-xl">{{ playlist.songs.length }} Song(s)</p>
        </div>
        <button class="btn" @click="startPlaying(playlist.songs[0].src, 0)">
          <img :src="playSvg" alt="play" />
          Play the Playlist
        </button>
      </div>
    </div>
    <div class="mt-12">
      <ul>
        <li v-for="(song, index) in playlist.songs" :key="song.id">
          <div class="flex gap-4 items-center bg-base-200 rounded-lg p-2 my-2 overflow-hidden">
            <button
              class="btn btn-neutral btn-circle"
              @click="srcIndex !== index ? startPlaying(song.src, index) : stopPlaying()"
            >
              <img v-if="srcIndex === index" :src="pauseSvg" alt="stop" />
              <img v-else :src="playSvg" alt="play" />
            </button>
            <button
              class="btn w-full flex gap-2 justify-start bg-transparent border-none"
              @click="router.push(`/song/${song.id}`)"
            >
              <div class="w-12">
                <img :src="song.song_img" :alt="song.title" class="w-full h-12" />
              </div>
              <div class="flex justify-between">
                <div>
                  <p class="font-bold text-lg">{{ song.title }}</p>
                  <p class="text-left text-md">{{ song.singer }}</p>
                </div>
              </div>
            </button>
          </div>
        </li>
      </ul>
    </div>
    <audio ref="player" controls class="w-full mt-4">
      <source :src="src" type="audio/mp3" />
    </audio>
  </div>
</template>
<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { storeToRefs } from 'pinia'
import { playlistStore } from '@/stores/playlist'
import type { PlayList } from '@/interfaces/PlaylistInterface'
import playSvg from '@/components/icons/play.svg'
import pauseSvg from '@/components/icons/pause.svg'
const player = ref<HTMLAudioElement>()
const src = ref<string>()
const srcIndex = ref<number>(-1)
const route = useRoute()
const router = useRouter()
const store = playlistStore()
const { playlists } = storeToRefs(store)
const id: string = route.params.id as string
const playlist = ref<PlayList>(playlists.value[parseInt(id)])

// Starts the playing.
// song_dir: Direction of the song
// index: Current index of the song
const startPlaying = (song_dir: string, index: number) => {
  src.value = song_dir
  srcIndex.value = index
  player.value?.load()
  player.value?.play()
}

// It is for go to the next song. Checks if current song is last or not
const nextSong = async () => {
  if (srcIndex.value === playlist.value.songs.length) return
  startPlaying(playlist.value.songs[srcIndex.value + 1].src, srcIndex.value + 1)
}

// Stops and clear everything about player
const stopPlaying = () => {
  srcIndex.value = -1
  src.value = ''
  player.value?.pause()
}

// Listens to player whenever the music has ended, changes the song.
onMounted(() => {
  player.value?.addEventListener('ended', nextSong)
})

// Clears the event listener
onBeforeUnmount(() => {
  player.value?.removeEventListener('ended', nextSong)
})
</script>
