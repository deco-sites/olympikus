import { headerHeight, mobileHeaderHeight } from "./constants.ts";
import Text from "$store/components/ui/Text.tsx";
export type LinkColor = "default" | "positive" | "critical";

export interface INavItem {
  href: string;
  label: string;
  color: LinkColor;

  subcategories?: Array<{
    title: string;
    color: LinkColor;

    children: Array<{
      href: string;
      label: string;
      color: LinkColor;
    }>;
  }>;
}

function NavItem({ item }: { item: INavItem }) {
  const { href, label, subcategories } = item;

  return (
    <li class="group flex items-center">
      <a href={href} class="px-3 py-3">
        <Text
          class="font-logo uppercase text-2xl border-b-4 border-transparent hover:border-badge pb-0.5 dark:text-white"
          tone={item.color}
        >
          {label}
        </Text>
      </a>

      {subcategories && subcategories.length > 0 &&
        (
          <div
            class={`dark:bg-default-bf fixed invisible hover:visible group-hover:visible bg-default z-50 flex items-start justify-center gap-6 border-t-1 border-b-2 border-default w-screen lg:mt-[${headerHeight}] mt-[${mobileHeaderHeight}]`}
            style={{ top: "0px", left: "0px" }}
          >
            <ul class="flex items-start justify-center gap-6">
              {subcategories.map((node) => (
                <li class="p-6">
                  <Text
                    variant="bold"
                    tone={node.color}
                    class="uppercase text-sm dark:text-critical"
                  >
                    {node.title}
                  </Text>

                  <ul class="flex flex-col gap-1 mt-1">
                    {node.children?.map((leaf) => (
                      <li>
                        <a href={leaf.href}>
                          <Text
                            class="text-sm dark:text-white"
                            tone={leaf.color}
                          >
                            {leaf.label}
                          </Text>
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>
        )}
    </li>
  );
}

export default NavItem;
