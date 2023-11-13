import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { PlayList } from '@/interfaces/PlaylistInterface'
import type { SongType } from '@/interfaces/SongInterface'

export const playlistStore = defineStore('playlist', () => {
  const playlists = ref<PlayList[]>([])

  const createPlaylist = (name: string, playlist_img: string) => {
    playlists.value.push({
      id: playlists.value.length,
      title: name,
      playlist_img: playlist_img,
      songs: []
    })
  }

  const addSong = (song: SongType, playlistId: number) => {
    if (playlists.value[playlistId].songs.some((s: SongType) => s.id === song.id) === true) return
    playlists.value[playlistId].songs.push(song)
  }

  return {
    playlists,
    createPlaylist,
    addSong
  }
})
