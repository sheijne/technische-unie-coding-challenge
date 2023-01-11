import { reactive, readonly } from "vue";

const controls = reactive({
  showFavourites: false,
});

export function useControls() {
  function setControls(input: Partial<typeof controls>) {
    const keys = Object.keys(input) as (keyof typeof controls)[];

    for (const key of keys) {
      controls[key] = input[key] ?? controls[key];
    }
  }

  return {
    controls: readonly(controls),
    setControls,
  };
}
