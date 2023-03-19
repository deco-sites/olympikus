import Icon from "$store/components/ui/Icon.tsx";
import moment from "$store/helpers/moment.ts";
import Slider from "$store/components/ui/Slider.tsx";
import Button from "$store/components/ui/Button.tsx";
import type { LoaderReturnType } from "$live/types.ts";
import Container from "$store/components/ui/Container.tsx";
import SliderControllerJS from "$store/islands/SliderJS.tsx";
import type { Product } from "deco-sites/std/commerce/types.ts";
import * as uuid from "https://deno.land/std@0.175.0/uuid/mod.ts";
import ProductCard from "$store/components/product/ProductCard.tsx";

export interface Props {
  title: string;
  products: LoaderReturnType<Product[] | null>;
  validUntil?: string;
}

function Shelf({
  title,
  products,
}: Props) {
  const id = uuid.v1.generate().toString();

  return (
    <Container
      id={id}
      class="grid grid-cols-[48px_1fr_48px] grid-rows-[48px_1fr_48px_1fr] gap-8"
    >
      <h2 class="text-center row-start-1 col-span-full text-4xl uppercase text-critical dark:text-white font-logo">
        {title}
      </h2>

      <Slider
        class="gap-6 col-span-full row-start-2 row-end-5 overflow-hidden"
        snap="snap-center lg:snap-start block first:ml-6 lg:first:ml-0 last:mr-6 lg:last:mr-0 flex h-full"
      >
        {products?.map((product) => (
          <div class="min-w-[228px] max-w-[228px] w-full flex h-full bg-default">
            <ProductCard product={product} />
          </div>
        ))}
      </Slider>

      <div class="hidden relative lg:block z-10 col-start-1 row-start-3">
        <div class="absolute right-1/2 rounded-full">
          <Button
            class="h-12 w-12"
            variant="tertiary"
            data-slide="prev"
            aria-label="Previous item"
          >
            <Icon size={20} id="ChevronLeft" strokeWidth={3} />
          </Button>
        </div>
      </div>

      <div class="hidden relative lg:block z-10 col-start-3 row-start-3">
        <div class="absolute left-1/2 rounded-full">
          <Button
            class="h-12 w-12"
            variant="tertiary"
            data-slide="next"
            aria-label="Next item"
          >
            <Icon size={20} id="ChevronRight" strokeWidth={3} />
          </Button>
        </div>
      </div>

      <SliderControllerJS rootId={id} />
    </Container>
  );
}

function ProductShelf({
  title,
  products,
  validUntil: _validUntil,
}: Props) {
  const validUntil = _validUntil ? moment(_validUntil) : null;
  const remainingTime = validUntil?.diff(new Date());

  if (remainingTime && remainingTime < 0) {
    return <div />;
  }

  if (!products || products.length === 0) {
    return <div />;
  }

  if (validUntil) {
    return (
      <Container class="border-2 border-badge dark:border-white mt-10">
        <div class="flex flex-1 justify-center items-center bg-badge dark:bg-white h-[48px]">
          <span class="font-logo uppercase text-2xl text-white dark:text-critical mt-[-5px]">
            Encerra {validUntil.fromNow()}
          </span>
        </div>

        <div class="px-8 mt-4">
          <Shelf title={title} products={products} />
        </div>
      </Container>
    );
  }

  return (
    <div class="mt-10 mx-0">
      <Shelf title={title} products={products} />
    </div>
  );
}

export default ProductShelf;
