/**
 * Neutral placeholder for products that have no uploaded image yet.
 *
 * Inline SVG rather than a stock photo: an unrelated product shot (the old
 * /images/pic1.png clothing image) reads as real data and misleads. next/image
 * also throws on an empty src, so every render path needs *something*.
 */
export const PRODUCT_IMAGE_PLACEHOLDER =
  "data:image/svg+xml;charset=utf-8," +
  encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" width="400" height="400" viewBox="0 0 400 400">
       <rect width="400" height="400" fill="#F1F3F7"/>
       <g fill="none" stroke="#C6CCDA" stroke-width="8" stroke-linecap="round" stroke-linejoin="round">
         <rect x="130" y="140" width="140" height="110" rx="10"/>
         <path d="M130 215l38-34 30 26 32-28 40 36"/>
         <circle cx="171" cy="174" r="11"/>
       </g>
       <text x="200" y="290" font-family="system-ui,sans-serif" font-size="19" fill="#9AA3B5" text-anchor="middle">No image</text>
     </svg>`
  );
