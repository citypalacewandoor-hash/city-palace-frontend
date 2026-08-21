"use client";

import Image, { ImageProps } from "next/image";
import { useEffect, useState } from "react";
import { PRODUCT_IMAGE_PLACEHOLDER } from "@/lib/placeholder";

/**
 * next/image that degrades to the placeholder instead of a broken-image icon.
 *
 * Every product image in the app routes through here so a dead Cloudinary URL
 * (deleted asset, bad public_id, stale record) fails the same way everywhere.
 */
const ProductImage = ({ src, ...props }: ImageProps) => {
  // Old records may hold http:// Cloudinary URLs; those are blocked as mixed
  // content on the https site, so upgrade the scheme rather than fail.
  const resolved =
    typeof src === "string" && src.startsWith("http://")
      ? src.replace(/^http:\/\//, "https://")
      : src;

  const [current, setCurrent] = useState(resolved);

  // A parent swapping src (variant change, gallery thumb) must clear a prior error.
  useEffect(() => setCurrent(resolved), [resolved]);

  return (
    <Image
      {...props}
      src={current || PRODUCT_IMAGE_PLACEHOLDER}
      onError={() => setCurrent(PRODUCT_IMAGE_PLACEHOLDER)}
    />
  );
};

export default ProductImage;
