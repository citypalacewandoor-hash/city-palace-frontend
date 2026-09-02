import { Leaf } from "lucide-react";

export default function SectionHeading({
  children = "OUR PACKAGES & TARIFF",
}: {
  children?: React.ReactNode;
}) {
  return (
    <h2 className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-center font-extrabold uppercase tracking-wide text-[#0e2d1d] text-2xl sm:text-3xl md:text-4xl">
      <span>OUR</span>
      <Leaf aria-hidden className="h-5 w-5 md:h-6 md:w-6 shrink-0 -rotate-45" />
      <span>PACKAGES &amp; TARIFF</span>
    </h2>
  );
}
