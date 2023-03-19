import type { Product } from "deco-sites/std/commerce/types.ts";

export const useVariantPossibilities = ({ isVariantOf }: Product) => {
  const allProperties = (isVariantOf?.hasVariant ?? [])
    .flatMap(({ additionalProperty = [], url }) =>
      additionalProperty.map((property) => ({ property, url }))
    )
    .filter((x) => x.url)
    .sort((a, b) => a.url! < b.url! ? -1 : a.url === b.url ? 0 : 1);

  const possibilities = allProperties.reduce((acc, { property, url }) => {
    const { name = "", value = "" } = property;
    const normalizedName = name.toLowerCase();
    const normalizedValue = value.toLowerCase();

    if (url) {
      acc[normalizedName] = {
        ...acc[normalizedName],
        [url]: normalizedValue,
      };
    }

    return acc;
  }, {} as Record<string, Record<string, string>>);

  return possibilities;
};
