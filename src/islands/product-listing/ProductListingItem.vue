<script lang="ts" setup>
import { computed } from "vue";
import { formatPrice } from "@/utils/format-price";
import {
  AddToCard as AddToCardIcon,
  Star as StarIcon,
} from "@/components/atoms/icons";
import { useProducts, type Product } from "./store";

interface ProductListingItemProps {
  product: Product;
}

const props = defineProps<ProductListingItemProps>();
const { addOrRemoveFavourite, isProductInFavourites } = useProducts();
const formattedPrice = computed(() => formatPrice(props.product.price));
</script>

<template>
  <article
    class="product-listing__item"
    :class="
      isProductInFavourites(props.product)
        ? 'product-listing__item--favourite'
        : ''
    "
  >
    <figure class="product-listing__item__image">
      <img :src="product.image" :alt="product.description" />
    </figure>

    <div class="product-listing__item__details">
      <h2>{{ product.name }}</h2>
      <p>{{ product.description }}</p>
    </div>

    <div class="product-listing__item__aside">
      <h3>{{ formattedPrice }} <small>netto</small></h3>

      <div class="product-listing__item__actions">
        <button class="add-to-card-action">
          <AddToCardIcon />
        </button>

        <button
          class="toggle-favourite-action"
          @click="() => addOrRemoveFavourite(product)"
        >
          <StarIcon />
        </button>
      </div>
    </div>
  </article>
</template>

<style>
.product-listing__item {
  background: var(--color-background-accent);
  border: 1px solid var(--color-border);
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 1rem;
  gap: 2rem;
}

@media screen and (min-width: 1025px) {
  .product-listing__item {
    flex-wrap: nowrap;
  }
}

.product-listing__item__image {
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 9.75rem;
}

.product-listing__item__image img {
  display: block;
  height: 9.75rem;
}

.product-listing__item__details {
  flex: 0 0 calc(100% - 9.75rem - 2rem);
}

@media screen and (min-width: 1025px) {
  .product-listing__item__details {
    flex: 1 1 auto;
  }
}

.product-listing__item__aside {
  display: flex;
  flex: 0 0 100%;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100%;
}

@media screen and (min-width: 1025px) {
  .product-listing__item__aside {
    flex: 0 0 13.375rem;
  }
}

.product-listing__item__actions {
  display: flex;
  justify-content: space-between;
}

.add-to-card-action {
  background: var(--color-secondary);
  border: 0;
  border-radius: 6px;
  padding: 0.725rem 1rem;
}

.toggle-favourite-action {
  background: 0;
  border: 0;
  opacity: 0.5;
  padding: 0.725rem 1rem;
}

.product-listing__item--favourite .toggle-favourite-action:not(:hover) {
  opacity: 1;
}
</style>
