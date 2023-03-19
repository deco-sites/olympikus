import Text from "$store/components/ui/Text.tsx";
import Avatar from "$store/components/ui/Avatar.tsx";
import { useVariantPossibilities } from "$store/sdk/useVariantPossiblities.ts";
import type { Product } from "deco-sites/std/commerce/types.ts";

interface Props {
  product: Product;
}

function VariantSelector({ product }: Props) {
  const { tamanho } = useVariantPossibilities(product);
  const { url: currentUrl } = product;

  return (
    <ul class="flex flex-col gap-4">
      <li class="flex flex-col gap-2">
        <span class="font-logo uppercase text-lg tracking-widest	">
          3 cores disponíveis
        </span>

        <ul class="grid grid-cols-10 gap-4">
          <li>
            <a href="#">
              <Avatar content="laranja" variant="color" />
            </a>
          </li>

          <li>
            <a href="#">
              <Avatar content="cinza-escura" variant="color" />
            </a>
          </li>

          <li>
            <a href="#">
              <Avatar content="verde-clara" variant="color" />
            </a>
          </li>
        </ul>
      </li>

      <li class="flex flex-col gap-2">
        <span class="font-logo uppercase text-lg tracking-widest	">
          Tamanho
        </span>

        <ul class="grid grid-cols-10 gap-2">
          {Object.entries(tamanho).map(([url, value]) => (
            <li>
              <a href={url}>
                <Avatar
                  // deno-lint-ignore no-explicit-any
                  content={value as any}
                  variant="abbreviation"
                  disabled={url === currentUrl}
                />
              </a>
            </li>
          ))}
        </ul>
      </li>
    </ul>
  );
}

export default VariantSelector;
