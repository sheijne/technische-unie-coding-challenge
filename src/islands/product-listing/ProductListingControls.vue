<script lang="ts" setup>
import { useProducts } from "./store";
const { products, controls, setControls } = useProducts();
</script>

<template>
  <div class="product-listing__controls">
    <button
      class="product-listing__controls__control"
      @click="setControls({ showFavourites: !controls.showFavourites })"
      :title="
        controls.showFavourites
          ? 'Alle producten weergeven'
          : 'Mijn favorieten weergeven'
      "
    >
      {{ controls.showFavourites ? "Alle producten" : "Mijn favorieten" }}
    </button>

    <span class="product-listing__controls__result-count">
      Zoekresultaten: <b>{{ products.length }}</b>
    </span>
  </div>
</template>

<style>
.product-listing__controls {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 0.5rem 0;
}

.product-listing__controls__control {
  background: var(--color-background-accent);
  border: 0;
  border-radius: 20px;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.45);
  color: var(--color-primary);
  font-weight: 700;
  margin-left: auto;
  padding: 0.5rem 1rem;
  width: fit-content;
}
</style>
