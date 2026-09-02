import localFont from "next/font/local";

// integralcf-bold.woff is "FONTSPRING DEMO - Integral CF Bold": a trial font.
// The demo stamps a "DEMO" watermark outline over 28 glyphs — every one of
// them shares an identical 9-contour, 316-byte outline where the real glyph
// should be. That is why "DELUXE A/C ROOM" rendered with a blob for the slash.
//
// unicode-range excludes those 28 codepoints from this @font-face, so the
// browser silently falls back for them and leaves the rest in Integral CF.
// Excluded: ! " # $ % & ' ( ) * + - / 4 < = > @ [ \ ] ^ _ ` { | } ~
//
// ponytail: mitigation, not a fix. The licensed font (or a free alternative)
// is the real answer — see the note in README before shipping more headings.
//
// The range is inlined rather than pulled from a const: next/font arguments
// must be statically analysable literals, and a variable reference fails the
// build with "Can't resolve 'next/font/local/target.css'".
const integralCF = localFont({
  src: [
    {
      path: "./integralcf-bold.woff",
      weight: "700",
      style: "normal",
    },
  ],
  declarations: [
    {
      prop: "unicode-range",
      value:
        "U+0-20, U+2C, U+2E, U+30-33, U+35-3B, U+3F, U+41-5A, U+61-7A, U+7F-10FFFF",
    },
  ],
  fallback: ["sans-serif"],
  variable: "--font-integralCF",
});

const satoshi = localFont({
  src: [
    {
      path: "./Satoshi-Regular.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "./Satoshi-Medium.woff",
      weight: "500",
      style: "normal",
    },
    {
      path: "./Satoshi-Bold.woff",
      weight: "700",
      style: "normal",
    },
  ],
  fallback: ["sans-serif"],
  variable: "--font-satoshi",
});

export { integralCF, satoshi };
