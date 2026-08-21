// Single source of truth for contact + social details.
// Update here — every page reads from this file.

export const WHATSAPP_NUMBER = "919400857530"; // country code + number, digits only
export const PHONE_DISPLAY = "+91 94008 57530";
export const PHONE_HREF = "tel:+919400857530";
export const EMAIL = "info@citypalacewandoor.com";

export const ADDRESS = "Wandoor, Malappuram, Kerala, PIN: 679328";
export const ADDRESS_LOCAL = "(വണ്ടൂർ, 679328)";

export const MAPS_URL = "https://maps.app.goo.gl/KJWJrQLzZ84WxNWv6?g_st=awb";
// Short maps.app.goo.gl links cannot be embedded in an iframe, so the embed
// keeps using coordinates while the click-through uses the share link above.
export const MAPS_EMBED_URL =
  "https://maps.google.com/maps?q=11.207972,76.233894&z=15&output=embed";

export const SOCIAL = {
  facebook: "https://www.facebook.com/citypalacewandoor",
};

/** Direct WhatsApp chat link, optionally pre-filled with a message. */
export const whatsappLink = (message?: string) =>
  message
    ? `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
    : `https://wa.me/${WHATSAPP_NUMBER}`;
