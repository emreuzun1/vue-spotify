<template>
  <ul>
    <li v-for="category in Object.values(Category)" :key="category">
      <div class="form-control">
        <label class="label cursor-pointer">
          <span class="label-text">{{ category }}</span>
          <input v-model="modelVal" type="checkbox" class="checkbox" :value="category" />
        </label>
      </div>
    </li>
  </ul>
</template>
<script setup lang="ts">
import { Category } from '@/interfaces/SongInterface'
const modelVal = defineModel<string[]>()
</script>
