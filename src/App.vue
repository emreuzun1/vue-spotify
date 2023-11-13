<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { songData } from './data/dummy-data'
import { SongCard, Collapse, CategoryCollapse, CreatePlaylistModal } from './components'
import { playlistStore } from './stores/playlist'
import { type SongType } from './interfaces/SongInterface'
const router = useRouter()
const store = playlistStore()
const selectedCategories = ref<string[]>([])
const songs = computed(() => {
  if (selectedCategories.value.length <= 0) return songData
  return songData.filter((song: SongType) => selectedCategories.value.includes(song.category))
})
</script>

<template>
  <div class="pt-6">
    <div class="w-full flex items-center justify-center">
      <button class="btn btn-neutral" onclick="my_modal_2.showModal()">Create Playlist</button>
    </div>
    <div class="flex pt-12">
      <div class="w-1/6">
        <Collapse>
          <template v-slot:title>Categories</template>
          <template v-slot:content>
            <CategoryCollapse v-model="selectedCategories" />
          </template>
        </Collapse>
        <Collapse>
          <template v-slot:title> Playlists </template>
          <template v-slot:content>
            <ul>
              <li v-for="playlist in store.playlists" :key="playlist.id">
                <button
                  class="btn w-full justify-start"
                  @click="router.push(`/playlist/${playlist.id}`)"
                >
                  {{ playlist.title }} ({{ playlist.songs.length }})
                </button>
              </li>
            </ul>
          </template>
        </Collapse>
      </div>
      <ul class="w-5/6 grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-2">
        <li v-for="song in songs" :key="song.id">
          <SongCard :song="song" />
        </li>
      </ul>
    </div>
    <CreatePlaylistModal />
  </div>
</template>
