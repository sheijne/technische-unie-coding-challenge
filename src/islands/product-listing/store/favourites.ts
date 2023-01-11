import { computed, ref, type Ref } from "vue";
import type { Product } from "./model";

const favourites = ref<Product["id"][]>([]);

export function useFavourites(products: Ref<Product[]>) {
  function isProductInFavourites(product: Product) {
    return favourites.value.includes(product.id);
  }

  function addToFavourites(product: Product) {
    favourites.value.push(product.id);
  }

  function removeFromFavourites(product: Product) {
    const index = favourites.value.findIndex(
      (productID) => productID === product.id
    );
    favourites.value.splice(index, 1);
  }

  function addOrRemoveFavourite(product: Product) {
    if (isProductInFavourites(product)) {
      removeFromFavourites(product);
    } else {
      addToFavourites(product);
    }
  }

  return {
    favourites: computed(() => products.value.filter(isProductInFavourites)),
    isProductInFavourites,
    addOrRemoveFavourite,
  };
}
