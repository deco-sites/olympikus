import Icon from "$store/components/ui/Icon.tsx";
import Button from "$store/components/ui/Button.tsx";
import Slider from "$store/components/ui/Slider.tsx";
import SliderControllerJS from "$store/islands/SliderJS.tsx";
import { Picture, Source } from "deco-sites/std/components/Picture.tsx";
import { useId } from "preact/hooks";
import { animation, keyframes, tw } from "twind/css";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";

export interface Banner {
  /** @description desktop otimized image */
  desktop: {
    image: LiveImage;
    width: number;
    height: number;
  };

  /** @description mobile otimized image */
  mobile: {
    image: LiveImage;
    width: number;
    height: number;
  };

  /** @description Image's alt text */
  alt: string;
  action?: {
    /** @description when user clicks on the image, go to this link */
    href: string;
  };
}

export interface Props {
  images?: Banner[];
  /**
   * @description Check this option when this banner is the biggest image on the screen for image optimizations
   */
  preload?: boolean;
  /**
   * @title Autoplay interval
   * @description time (in seconds) to start the carousel autoplay
   */
  interval?: number;
}

function BannerItem({ image, lcp }: { image: Banner; lcp?: boolean }) {
  const {
    alt,
    mobile,
    desktop,
    action,
  } = image;

  return (
    <div class="relative min-w-[100vw] overflow-y-hidden">
      <a href={action?.href ?? "#"}>
        <Picture class="w-full" preload={lcp}>
          <Source
            media="(max-width: 767px)"
            fetchPriority={lcp ? "high" : "auto"}
            src={mobile.image}
            width={mobile.width}
            height={mobile.height}
          />
          <Source
            media="(min-width: 768px)"
            fetchPriority={lcp ? "high" : "auto"}
            src={desktop.image}
            width={desktop.width}
            height={desktop.height}
          />
          <img
            class="object-cover w-full sm:h-full"
            loading={lcp ? "eager" : "lazy"}
            src={desktop.image}
            alt={alt}
          />
        </Picture>
      </a>
    </div>
  );
}

function Controls() {
  return (
    <>
      <div class="flex items-center justify-center z-10 col-start-1 row-start-2">
        <Button
          class="h-12 w-12"
          variant="tertiary"
          data-slide="prev"
          aria-label="Previous item"
        >
          <Icon
            size={20}
            id="ChevronLeft"
            strokeWidth={3}
          />
        </Button>
      </div>
      <div class="flex items-center justify-center z-10 col-start-3 row-start-2">
        <Button
          class="h-12 w-12"
          variant="tertiary"
          data-slide="next"
          aria-label="Next item"
        >
          <Icon
            size={20}
            id="ChevronRight"
            strokeWidth={3}
          />
        </Button>
      </div>
    </>
  );
}

function BannerCarousel({ images, preload, interval }: Props) {
  const id = useId();

  return (
    <div
      id={id}
      class="grid grid-cols-[48px_1fr_48px] sm:grid-cols-[120px_1fr_120px] grid-rows-[1fr_48px_1fr_48px]"
    >
      <Slider class="col-span-full row-span-full scrollbar-none">
        {images?.map((image, index) => (
          <BannerItem image={image} lcp={index === 0 && preload} />
        ))}
      </Slider>

      <div class="hidden lg:contents">
        <Controls />
      </div>

      <SliderControllerJS rootId={id} interval={interval && interval * 1e3} />
    </div>
  );
}

export default BannerCarousel;
