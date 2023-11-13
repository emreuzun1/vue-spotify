<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="collapse bg-base-200 collapse-arrow">
    <input type="checkbox" />
    <div class="collapse-title text-xl font-medium"><slot name="title"></slot></div>
    <div class="collapse-content">
      <slot name="content"></slot>
    </div>
  </div>
</template>
<script setup lang="ts" generic="T"></script>
