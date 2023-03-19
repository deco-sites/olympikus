import NavItem from "./NavItem.tsx";
import { navbarHeight } from "./constants.ts";
import type { INavItem } from "./NavItem.tsx";
import Icon from "$store/components/ui/Icon.tsx";
import Button from "$store/components/ui/Button.tsx";
import HeaderButton from "$store/islands/HeaderButton.tsx";
import HeaderSearch from "$store/islands/HeaderSearch.tsx";
import type { Props as SearchbarProps } from "$store/components/search/Searchbar.tsx";

function Navbar({ items, searchbar }: {
  items: INavItem[];
  searchbar: SearchbarProps;
}) {
  return (
    <>
      {/* Mobile Version */}
      <div class="lg:hidden flex flex-col justify-center border-b-1 border-default w-full">
        <div class="flex flex-row justify-between items-center w-full">
          <HeaderButton variant="menu" />

          <a
            href="/"
            class={`flex-grow inline-flex items-center justify-center min-h-[${navbarHeight}]`}
            aria-label="Store logo"
          >
            <Icon id="Logo" width={175} height={19.5} />
          </a>

          <div class="flex gap-1">
            <Button variant="icon">
              <Icon
                id="Heart"
                class="text-critical"
                width={20}
                height={20}
                strokeWidth={2}
              />
            </Button>

            <HeaderButton variant="cart" />
          </div>
        </div>

        <HeaderSearch searchbar={searchbar} />
      </div>

      {/* Desktop Version */}
      <div class="hidden lg:flex justify-center border-b-1 border-default w-full pl-2 pr-3">
        <div class="flex flex-1 flex-row justify-between items-center max-w-[1408px]">
          <div class="flex-none">
            <a
              href="/"
              aria-label="Store logo"
              class="block px-4 py-3"
            >
              <Icon id="Logo" width={175} height={19.5} />
            </a>
          </div>
          <div class="flex-auto flex justify-center">
            {items.map((item) => <NavItem item={item} />)}
          </div>
          <div class="flex-none flex items-center justify-end gap-2">
            <HeaderSearch searchbar={searchbar} />

            <Button variant="icon">
              <Icon
                id="User"
                class="text-critical"
                width={20}
                height={20}
                strokeWidth={0.4}
              />
            </Button>

            <Button variant="icon">
              <Icon
                id="Heart"
                class="text-critical"
                width={20}
                height={20}
                strokeWidth={2}
              />
            </Button>

            <HeaderButton variant="cart" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
