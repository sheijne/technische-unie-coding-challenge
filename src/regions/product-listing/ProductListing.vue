<script lang="ts" setup>
import { ProductListing } from "@/islands/product-listing";
import { products as data } from "./data";
</script>

<template>
  <ProductListing title="Gevonden producten" :data="data" />
</template>
