<script lang="ts" setup>
import ProductListingHeader from "./ProductListingHeader.vue";
import ProductListingControls from "./ProductListingControls.vue";
import ProductListingItem from "./ProductListingItem.vue";
import { useProducts, type Product } from "./store";

interface ProductListingProps {
  title: string;
  data: Product[];
}

const props = defineProps<ProductListingProps>();

const { products } = useProducts(props.data);
</script>

<template>
  <div class="product-listing">
    <ProductListingHeader :title="title">
      <ProductListingControls />
    </ProductListingHeader>

    <div class="product-listing__items">
      <template v-for="product in products" :key="product.id">
        <ProductListingItem :product="product" />
      </template>

      <template v-if="!products.length">
        <p>Geen producten gevonden</p>
      </template>
    </div>
  </div>
</template>

<style>
.product-listing {
  padding: 4rem;
}

.product-listing__items {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
</style>
