import ProductListSec from "@/components/common/ProductListSec";
import HeroBanner from "@/components/homepage/Header";
import FacilitiesSection from "@/components/homepage/FacilitiesSection";
import { Product } from "@/types/product.types";
import { Banner } from "@/types/banner.types";
import { API_URL as api } from "@/lib/utils";
import { PRODUCT_IMAGE_PLACEHOLDER } from "@/lib/placeholder";

export const revalidate = 60;


async function getProducts(): Promise<Product[]> {
  if (!api) return [];
  try {
    const res = await fetch(`${api}/product`, {
      next: { revalidate: 60 },
    });
    if (!res.ok || !res.headers.get("content-type")?.includes("application/json")) return [];
    const data = await res.json();
    if (!data.products) return [];

    return data.products.map((p: any) => {
      const defaultVariant =
        p.variants?.find((v: any) => v.isDefault) || p.variants?.[0];
      const startingPrice = defaultVariant?.price || 0;

      return {
        id: p._id,
        title: p.name,
        category: p.category?.name || "General",
        description: p.description || "No description available.",
        srcUrl: defaultVariant?.images?.[0] || PRODUCT_IMAGE_PLACEHOLDER,
        gallery: defaultVariant?.images || [],
        price: startingPrice,
        discount: { amount: 0, percentage: 0 },
        rating: 4,
        amenities: p.amenities || []
      };
    });
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
}

async function getFacilities() {
  if (!api) return [];
  try {
    const res = await fetch(`${api}/facility`, {
      next: { revalidate: 60 },
    });
    if (!res.ok || !res.headers.get("content-type")?.includes("application/json")) return [];
    const data = await res.json();
    return data.facilities ?? [];
  } catch {
    return [];
  }
}

async function getBanners(): Promise<Banner[]> {
  if (!api) return [];
  try {
    const res = await fetch(`${api}/banner`, {
      next: { revalidate: 60 },
    });
    if (!res.ok || !res.headers.get("content-type")?.includes("application/json")) return [];
    const data = await res.json();
    return data.banners ?? [];
  } catch (error) {
    console.error("Error fetching banners:", error);
    return [];
  }
}

// Server component — no "use client", no useEffect, no client-side waterfall
export default async function Home() {
  const [products, facilities, banners] = await Promise.all([
    getProducts(),
    getFacilities(),
    getBanners(),
  ]);

  return (
    <>
      <HeroBanner banners={banners} />
      <FacilitiesSection facilities={facilities} />
      {/* Bottom margin stays tight on mobile: the footer supplies its own
          top spacing and border, so a large mb here reads as dead space. */}
      <main className="mt-[50px] mb-6 sm:mt-[72px] sm:mb-12">
        <div id="products">
          <ProductListSec
            title="Our Products"
            data={products}
            viewAllLink="/shop"
          />
        </div>
      </main>
    </>
  );
}
