import ProductCard from "$store/components/product/ProductCard.tsx";
import Container from "$store/components/ui/Container.tsx";
import Slider from "$store/components/ui/Slider.tsx";
import SliderControllerJS from "$store/islands/SliderJS.tsx";
import Button from "$store/components/ui/Button.tsx";
import Icon from "$store/components/ui/Icon.tsx";
import type { LoaderReturnType } from "$live/types.ts";
import type { Product } from "deco-sites/std/commerce/types.ts";
import * as uuid from "https://deno.land/std@0.175.0/uuid/mod.ts";

export interface Props {
  title: string;
  products: LoaderReturnType<Product[] | null>;
  itemsPerPage?: number;
}

function ProductShelf({
  title,
  products,
}: Props) {
  const id = uuid.v1.generate().toString();

  if (!products || products.length === 0) {
    return null;
  }

  return (
    <Container
      id={id}
      class="grid grid-cols-[48px_1fr_48px] grid-rows-[48px_1fr_48px_1fr] py-10 px-0 gap-4"
    >
      <h2 class="text-center row-start-1 col-span-full text-4xl uppercase text-critical font-logo">
        {title}
      </h2>

      <Slider
        class="gap-6 col-span-full row-start-2 row-end-5 overflow-hidden"
        snap="snap-center lg:snap-start block first:ml-6 lg:first:ml-0 last:mr-6 lg:last:mr-0"
      >
        {products?.map((product) => (
          <div class="min-w-[228px] max-w-[228px]">
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

export default ProductShelf;
