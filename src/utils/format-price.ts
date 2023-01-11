import { getCurrentLanguage } from "@/utils/get-language";

export function formatPrice(price: number): string {
  const formatLanguage = getCurrentLanguage();

  const formatOptions = {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  };

  return new Intl.NumberFormat(formatLanguage, formatOptions).format(price);
}
