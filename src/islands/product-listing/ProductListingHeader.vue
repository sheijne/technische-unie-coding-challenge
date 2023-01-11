<script lang="ts" setup>
defineProps<{ title: string }>();
</script>

<template>
  <div class="product-listing__header">
    <h1>{{ title }}</h1>
    <slot />
  </div>
</template>

<style>
.product-listing__header {
  border-bottom: 1px solid #999999;
  margin-bottom: 2rem;
}
</style>
