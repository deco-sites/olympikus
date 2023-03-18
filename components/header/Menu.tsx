import Icon from "$store/components/ui/Icon.tsx";
import Text from "$store/components/ui/Text.tsx";
import { useSignal } from "@preact/signals";
import type { INavItem } from "./NavItem.tsx";

export interface Props {
  items: INavItem[];
}

function MenuItem({ item, level = 0 }: { item: INavItem; level?: number }) {
  const open = useSignal(false);
  const hasChildren = Array.isArray(item.subcategories) &&
    item.subcategories.length > 0;

  const title = (
    <Text class="font-logo uppercase text-2xl">
      {item.label}
    </Text>
  );

  return (
    <li class="border-b-1 border-default bg-default">
      <div class="flex justify-between items-center w-full p-4">
        {hasChildren
          ? title
          : <a class="w-full inline-block" href={item.href}>{title}</a>}

        {hasChildren && (
          <Icon
            width={24}
            height={24}
            class="mr-2"
            strokeWidth={3}
            id="ChevronRight"
          />
        )}
      </div>
    </li>
  );
}

function Menu({ items }: Props) {
  return (
    <ul class="flex-grow flex flex-col divide-y divide-default bg-gray-200">
      {items.map((item) => <MenuItem item={item} />)}
    </ul>
  );
}

export default Menu;
