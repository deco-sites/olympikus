import Button from "$store/components/ui/Button.tsx";
import Container from "$store/components/ui/Container.tsx";
import { Picture, Source } from "deco-sites/std/components/Picture.tsx";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";

export interface Banner {
  mobile: {
    image: LiveImage;
    width: number;
    height: number;
  };

  desktop: {
    image: LiveImage;
    width: number;
    height: number;
  };

  /**
   * @description Image alt text
   */
  alt: string;
  /**
   * @description When you click you go to
   */
  href: string;
  /**
   * @description A button to be added if it's necessary
   */
  action?: string;
}

export interface Props {
  containerClasses?: string;

  /**
   * @description Default is 2 for mobile and all for desktop
   */
  itemsPerLine: {
    mobile?: number;
    desktop?: number;
  };
  /**
   * @description Item's border radius in px
   */
  borderRadius: {
    mobile?: number;
    desktop?: number;
  };
  banners: Banner[];
}

export default function BannnerGrid({
  containerClasses,
  itemsPerLine,
  borderRadius,
  banners = [],
}: Props) {
  return (
    <Container class={containerClasses}>
      <section class="w-full px-4 md:px-0 mx-auto">
        <div
          class={`grid gap-4 md:gap-6 grid-cols-${
            itemsPerLine && itemsPerLine.mobile ? itemsPerLine.mobile : "2"
          } md:grid-cols-${
            itemsPerLine && itemsPerLine.desktop
              ? itemsPerLine.desktop
              : banners.length
          }`}
        >
          {banners.map(({ href, mobile, desktop, alt, action }) => (
            <div class="flex flex-col items-center">
              <a
                href={href}
                class={`overflow-hidden ${
                  borderRadius?.mobile && `rounded-[${borderRadius.mobile}px]`
                } ${
                  borderRadius?.desktop
                    ? `sm:rounded-[${borderRadius.desktop}px]`
                    : `sm:rounded-none`
                }`}
              >
                <Picture>
                  <Source
                    media="(max-width: 767px)"
                    src={mobile.image}
                    width={mobile.width}
                    height={mobile.height}
                  />
                  <Source
                    media="(min-width: 768px)"
                    src={desktop.image}
                    width={desktop.width}
                    height={desktop.height}
                  />
                  <img
                    class="w-full"
                    sizes="(max-width: 640px) 100vw, 30vw"
                    src={mobile.image}
                    alt={alt}
                    decoding="async"
                    loading="lazy"
                  />
                </Picture>
              </a>

              {action && (
                <Button as="a" href={href} variant="primary" class="mt-4">
                  {action}
                </Button>
              )}
            </div>
          ))}
        </div>
      </section>
    </Container>
  );
}
