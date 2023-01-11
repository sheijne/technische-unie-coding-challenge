import { computed, ref } from "vue";
import type { Product } from "./model";
import { useControls } from "./controls";
import { useFavourites } from "./favourites";

const products = ref<Product[]>([]);

export function useProducts(data?: Product[]) {
  const { controls, setControls } = useControls();
  const { favourites, addOrRemoveFavourite, isProductInFavourites } =
    useFavourites(products);

  if (data) {
    products.value = data;
  }

  return {
    controls,

    products: computed(() => {
      const filteredProducts = controls.showFavourites
        ? favourites.value
        : products.value;

      return filteredProducts.sort((a, b) => a.price - b.price);
    }),

    setControls,
    isProductInFavourites,
    addOrRemoveFavourite,
  };
}
