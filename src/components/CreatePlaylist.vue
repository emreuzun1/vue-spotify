<template>
  <dialog id="my_modal_2" class="modal" ref="modal">
    <div class="modal-box">
      <h3 class="font-bold text-lg">Create a Playlist</h3>
      <div class="form-control w-full max-w-xs">
        <label class="label">
          <span class="label-text">Name of the Playlist</span>
        </label>
        <input
          v-model="name"
          type="text"
          placeholder="Type here"
          class="input input-bordered w-full max-w-xs"
        />
      </div>
      <div class="form-control w-full max-w-xs">
        <label class="label">
          <span class="label-text">Background Url of the Playlist</span>
        </label>
        <input
          v-model="img_url"
          type="text"
          placeholder="Type here"
          class="input input-bordered w-full max-w-xs"
        />
      </div>
      <button class="btn btn-neutral mt-2" @click="create">Create</button>
    </div>
    <form method="dialog" class="modal-backdrop">
      <button>close</button>
    </form>
  </dialog>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { playlistStore } from '@/stores/playlist'
const store = playlistStore()
const name = ref<string>()
const img_url = ref<string>(
  'https://w7.pngwing.com/pngs/399/769/png-transparent-computer-icons-music-playlist-apple-text-logo-number-thumbnail.png'
)
const modal = ref<HTMLDialogElement>()

const create = () => {
  store.createPlaylist(name.value!, img_url.value!)
  modal.value?.close()
}
</script>
