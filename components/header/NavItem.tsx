import { headerHeight } from "./constants.ts";
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
      <a href={href} class="px-4 py-3">
        <Text class="font-logo uppercase text-2xl">
          {label}
        </Text>
      </a>

      {subcategories && subcategories.length > 0 &&
        (
          <div
            class={`fixed invisible hover:visible group-hover:visible bg-default z-50 flex items-start justify-center gap-6 border-t-1 border-b-2 border-default w-screen mt-[${headerHeight}]`}
            style={{ top: "0px", left: "0px" }}
          >
            <ul class="flex items-start justify-center gap-6">
              {subcategories.map((node) => (
                <li class="p-6">
                  <Text
                    variant="bold"
                    tone={node.color}
                    class="uppercase text-sm"
                  >
                    {node.title}
                  </Text>

                  <ul class="flex flex-col gap-1 mt-1">
                    {node.children?.map((leaf) => (
                      <li>
                        <a href={leaf.href}>
                          <Text class="text-sm" tone={leaf.color}>
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
