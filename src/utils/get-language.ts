import { DEFAULT_LANGUAGE } from "@/config";

export function getCurrentLanguage() {
  return navigator?.language ?? DEFAULT_LANGUAGE;
}
