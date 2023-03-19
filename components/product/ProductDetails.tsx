import Image from "deco-sites/std/components/Image.tsx";
import Slider from "$store/components/ui/Slider.tsx";
import AddToCartButton from "$store/islands/AddToCartButton.tsx";
import Container from "$store/components/ui/Container.tsx";
import Text from "$store/components/ui/Text.tsx";
import Breadcrumb from "$store/components/ui/Breadcrumb.tsx";
import Button from "$store/components/ui/Button.tsx";
import Icon from "$store/components/ui/Icon.tsx";
import { useOffer } from "$store/sdk/useOffer.ts";
import { formatPrice } from "$store/sdk/format.ts";
import type { LoaderReturnType } from "$live/types.ts";
import { useId } from "preact/hooks";
import type {
  ImageObject,
  ProductDetailsPage,
} from "deco-sites/std/commerce/types.ts";
import { Picture, Source } from "deco-sites/std/components/Picture.tsx";
import SliderControllerJS from "$store/islands/SliderJS.tsx";
import ProductSelector from "./ProductVariantSelector.tsx";
import { useSignal } from "@preact/signals";

export interface Props {
  page: LoaderReturnType<ProductDetailsPage | null>;
}

function NotFound() {
  return (
    <div class="w-full flex justify-center items-center py-28">
      <div class="flex flex-col items-center justify-center gap-6">
        <Text variant="heading-2">Página não encontrada</Text>
        <a href="/">
          <Button>Voltar à página inicial</Button>
        </a>
      </div>
    </div>
  );
}

function Details({ page }: { page: ProductDetailsPage }) {
  const sliderId = useId();

  const { breadcrumbList, product } = page;
  const { description, productID, offers, image, name, gtin } = product;
  const { price, listPrice, seller, installments } = useOffer(offers);
  const images = image!.slice(0, 5);
  const discount = 100 - Math.round((price! * 100) / listPrice!);

  const isDescTruncated = useSignal(description?.length! > 750);
  const desc = isDescTruncated.value ? "max-h-[350px] overflow-hidden" : "";

  const showDescription = () => {
    isDescTruncated.value = false;
  };

  return (
    <Container class="py-10 px-4">
      {/* Breadcrumb */}
      <Breadcrumb
        itemListElement={breadcrumbList?.itemListElement.slice(0, -1)}
      />

      <div class="flex flex-row mt-4 items-start">
        {/* Product Info */}
        <div class="flex flex-1 flex-col max-w-[320px]">
          <h1 class="font-logo text-4xl text-critical uppercase">
            {name}
          </h1>

          <Text class="block mt-2" tone="subdued" variant="caption">
            Ref.: {gtin}
          </Text>

          <p class={`relative block mt-2 font-bold text-sm ${desc}`}>
            {description}

            {isDescTruncated.value && (
              <span class="absolute bottom-0 block w-full h-[40px] bg-gradient-to-t from-white to-transparent" />
            )}
          </p>

          {isDescTruncated.value && (
            <p
              onClick={showDescription}
              class="block mt-2 font-bold text-sm cursor-pointer underline"
            >
              Ver mais {isDescTruncated.value}
            </p>
          )}
        </div>

        {/* Image Gallery */}
        <div
          id={sliderId}
          class="flex flex-1 flex-col items-center justify-center relative mx-12"
        >
          {discount > 0 && (
            <span class="absolute z-10 bg-interactive text-default-inverse uppercase font-logo py-1 px-3 top-0 left-0">
              {discount}% OFF
            </span>
          )}

          <Slider class="scrollbar-none w-[450px]">
            {images?.map((image, index) => (
              <div class="relative w-[450px] overflow-y-hidden">
                <Picture class="w-full" preload={index === 0}>
                  <Source
                    src={image.url!}
                    width={450}
                    height={450}
                    fetchPriority={index === 0 ? "high" : "auto"}
                  />
                  <img
                    src={image.url!}
                    alt={image.alternateName}
                    loading={index === 0 ? "eager" : "lazy"}
                    class="object-cover w-full sm:h-full"
                  />
                </Picture>
              </div>
            ))}
          </Slider>

          <ol class="hidden sm:flex flex-row gap-4 mt-4">
            {images?.map((img, index) => (
              <li class="h-full">
                <button
                  data-dot={index}
                  aria-label={`go to slider item ${index}`}
                  class="h-full rounded focus:outline-none group border-1 border-gray-100 p-1 disabled:border-critical"
                >
                  <Image
                    width={60}
                    height={60}
                    preload={true}
                    src={img.url!}
                    loading={"eager"}
                    alt={img.alternateName}
                    class="w-[60px] h-[60px]"
                    sizes="(max-width: 640px) 10vw"
                    style={{ aspectRatio: "1000 / 1000" }}
                  />
                </button>
              </li>
            ))}
          </ol>

          <SliderControllerJS rootId={sliderId} />
        </div>

        {/* Prices */}
        <div class="flex flex-1 flex-col max-w-[450px]">
          {discount && (
            <p class="line-through text-lg text-default">
              {formatPrice(listPrice, offers!.priceCurrency!)}
            </p>
          )}

          <p class="text-6xl text-default font-logo uppercase">
            {formatPrice(price, offers!.priceCurrency!)}
          </p>

          <Text class="mt-4" tone="subdued" variant="caption">
            {installments}
          </Text>

          {discount && (
            <p class="text-base font-bold text-green-600 mt-1">
              Economize{" "}
              {formatPrice(listPrice! - price!, offers!.priceCurrency!)}
            </p>
          )}

          {/* Sku Selector */}
          <div class="mt-4 sm:mt-6">
            <ProductSelector product={product} />
          </div>
        </div>
      </div>
    </Container>
  );
}

function ProductDetails({ page }: Props) {
  if (page) {
    return <Details page={page} />;
  }

  return <NotFound />;
}

export default ProductDetails;
