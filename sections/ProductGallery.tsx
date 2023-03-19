import ProductGallery from "$store/islands/ProductGallery.tsx";
import { Props } from "$store/components/product/ProductGallery.tsx";

function ProductGallerySection(props: Props) {
  return <ProductGallery {...props} />;
}

export default ProductGallerySection;
