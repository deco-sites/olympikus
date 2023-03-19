import ProductCard from "$store/components/product/ProductCard.tsx";
import Container from "$store/components/ui/Container.tsx";
import Button from "$store/components/ui/Button.tsx";
import Text from "$store/components/ui/Text.tsx";
import Icon from "$store/components/ui/Icon.tsx";
import type { LoaderReturnType } from "$live/types.ts";
import type { ProductListingPage } from "deco-sites/std/commerce/types.ts";

export interface Props {
  page: LoaderReturnType<ProductListingPage | null>;
}

function NotFound() {
  return (
    <div class="w-full flex justify-center items-center py-10">
      <Text>Not Found!</Text>
    </div>
  );
}

function Gallery({ page }: { page: ProductListingPage }) {
  const query = getQuery();

  return (
    <div class="mt-[64px]">
      <Container class="px-4 sm:py-10">
        {query && (
          <h2 class="text-4xl uppercase text-critical dark:text-white font-logo mb-4">
            {query}
          </h2>
        )}

        <div class="relative grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-0.5 bg-gray-100 dark:bg-gray-600 items-center">
          {page.products?.map((product, index) => (
            <div class="p-3 w-full flex h-full bg-default dark:bg-black">
              <ProductCard
                hideCta={true}
                product={product}
                preload={index === 0}
              />
            </div>
          ))}
        </div>

        <div class="flex flex-row items-center justify-center gap-2 mt-8 mb-4">
          <a rel="prev" href={`/s?${page.pageInfo.previousPage}`}>
            <Button
              class="dark:bg-white"
              disabled={!page.pageInfo.previousPage}
              variant="icon"
            >
              <Icon id="ChevronLeft" width={20} height={20} strokeWidth={2} />
            </Button>
          </a>
          <Text variant="caption" class="text-default dark:text-white">
            {page.pageInfo.currentPage + 1}
          </Text>
          <a rel="next" href={`/s?${page.pageInfo.nextPage}`}>
            <Button
              class="dark:bg-white"
              disabled={!page.pageInfo.nextPage}
              variant="icon"
            >
              <Icon id="ChevronRight" width={20} height={20} strokeWidth={2} />
            </Button>
          </a>
        </div>
      </Container>
    </div>
  );
}

function ProductGallery({ page }: Props) {
  if (!page) {
    return <NotFound />;
  }

  return <Gallery page={page} />;
}

function getQuery() {
  try {
    const url = location?.href ? new URL(location?.href) : undefined;
    const query = url ? url.searchParams.get("q") : undefined;

    return query;
  } catch {
    return undefined;
  }
}

export default ProductGallery;
