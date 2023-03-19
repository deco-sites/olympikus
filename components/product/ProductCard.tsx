import Image from "deco-sites/std/components/Image.tsx";
import Text from "$store/components/ui/Text.tsx";
import Button from "$store/components/ui/Button.tsx";
import { useOffer } from "$store/sdk/useOffer.ts";
import { formatPrice } from "$store/sdk/format.ts";
import type { Product } from "deco-sites/std/commerce/types.ts";

interface Props {
  product: Product;
  hideCta?: boolean;
  /** Preload card image */
  preload?: boolean;
}

function ProductCard({ product, preload, hideCta }: Props) {
  const { url, productID, name, image, offers } = product;
  const { listPrice, price } = useOffer(offers);
  const [front] = image ?? [];
  const discount = 100 - Math.round((price! * 100) / listPrice!);

  return (
    <div
      id={`product-card-${productID}`}
      class="w-full flex h-full bg-default dark:bg-black"
    >
      <a href={url} aria-label="product link" class="flex flex-col flex-1">
        <div class="relative w-full overflow-hidden">
          {discount > 0 && (
            <span class="absolute z-10 bg-interactive text-default-inverse uppercase font-logo py-1 px-3">
              {discount}% OFF
            </span>
          )}

          <Image
            src={front.url!}
            alt={front.alternateName}
            width={228}
            height={208}
            preload={preload}
            class="rounded w-full"
            loading={preload ? "eager" : "lazy"}
            sizes="(max-width: 640px) 50vw, 20vw"
          />
        </div>

        <div class="flex flex-col gap-1 py-2 flex-1">
          <span class="font-bold text-sm text-default dark:text-white">
            {name}
          </span>

          <div class="flex flex-col mt-auto">
            <Text
              class="line-through min-h-[20px]"
              variant="list-price"
              tone="subdued"
            >
              {listPrice !== price && (
                `de ${formatPrice(listPrice, offers!.priceCurrency!)}`
              )}
            </Text>

            <span class="text-gray-600 dark:text-white font-bold text-[16px]">
              por {formatPrice(price, offers!.priceCurrency!)}
            </span>

            <span class="text-gray-800 dark:text-gray-400 font-bold text-sm">
              10x de {formatPrice(price! / 10, offers!.priceCurrency!)}
            </span>

            <span class="p-2 mt-4 bg-gray-200 text-gray-500 w-min text-sm whitespace-nowrap">
              +4 Cores
            </span>

            {!hideCta && (
              <Button class="mt-4 p-2" href={product.url}>
                Comprar agora
              </Button>
            )}
          </div>
        </div>
      </a>
    </div>
  );
}

export default ProductCard;
