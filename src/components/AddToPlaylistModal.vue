<template>
  <dialog id="add_to_playlist_modal" class="modal" ref="modal">
    <div class="modal-box">
      <h3 class="font-bold text-lg">Add To Playlist</h3>
      <ul>
        <li v-for="playlist in store.playlists" :key="playlist.id">
          <button class="w-full btn btn-neutral mt-4" @click="add(song, playlist)">
            {{ playlist.title }}
          </button>
        </li>
      </ul>
    </div>
  </dialog>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import type { SongType } from '@/interfaces/SongInterface'
import { playlistStore } from '@/stores/playlist'
import type { PlayList } from '@/interfaces/PlaylistInterface'
const modal = ref<HTMLDialogElement>()
const store = playlistStore()
defineProps<{ song: SongType }>()

const add = (song: SongType, playlist: PlayList) => {
  store.addSong(song, playlist.id)
  modal.value?.close()
}
</script>
