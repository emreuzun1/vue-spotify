import AppVue from '@/App.vue'
import SongVue from '@/views/Song.vue'
import Playlist from '@/views/Playlist.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: AppVue
    },
    {
      path: '/song/:id',
      component: SongVue
    },
    {
      path: '/playlist/:id',
      component: Playlist
    }
  ]
})

export default router
