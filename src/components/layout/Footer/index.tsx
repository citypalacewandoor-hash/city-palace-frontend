import { PaymentBadge, SocialNetworks } from "./footer.types";
import { FaFacebookF, FaInstagram, FaYoutube, FaWhatsapp, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import {
  ADDRESS, ADDRESS_LOCAL, EMAIL, MAPS_EMBED_URL, MAPS_URL,
  PHONE_DISPLAY, PHONE_HREF, SOCIAL, whatsappLink,
} from "@/lib/contact";
import Link from "next/link";
import Image from "next/image";
import LayoutSpacing from "./LayoutSpacing";

const socialsData: SocialNetworks[] = [
  {
    id: 1,
    icon: <FaWhatsapp />,
    url: whatsappLink(),
  },
  {
    id: 2,
    icon: <FaFacebookF />,
    url: SOCIAL.facebook,
  },
  {
    id: 3,
    icon: <FaInstagram />,
    url: SOCIAL.instagram,
  },
  {
    id: 4,
    icon: <FaYoutube />,
    url: SOCIAL.youtube,
  },
];

const Footer = () => {
  return (
    <footer className="mt-16 border-t border-black/5">
      <div className="pt-12 pb-6 bg-[#FAF9F6] text-[#1a1a1a] px-4 md:px-6">
        <div className="max-w-frame mx-auto">
          <nav className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 mb-12">
            
            {/* Column 1: Brand & Socials */}
            <div className="flex flex-col lg:col-span-4">
              <Link href="/" className="mb-6 inline-block w-fit">
                <Image
                  src="/images/city-palace-logo.png"
                  alt="City Palace Residency Logo"
                  width={600}
                  height={370}
                  className="rounded-xl object-contain bg-white shadow-sm h-[85px] w-auto max-w-[260px] px-3 py-2"
                  priority
                />
              </Link>
              <p className="text-gray-600 text-sm mb-6 max-w-sm leading-relaxed">
                City Palace Residency, Wandoor — your online store for quality products and items, delivered with a royal experience.
              </p>
              <div className="flex items-center space-x-3">
                {socialsData.map((social) => (
                  <Link
                    href={social.url}
                    key={social.id}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-gray-700 hover:bg-[#D31018] hover:text-white transition-all w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center p-1.5 shadow-sm"
                  >
                    {social.icon}
                  </Link>
                ))}
              </div>
            </div>

            {/* Column 2: Contact Information */}
            <div id="contact" className="flex flex-col lg:col-span-4 scroll-mt-24">
              <h4 className="text-sm font-bold uppercase tracking-wider text-gray-900 mb-5 border-b border-black/5 pb-2">
                Contact Details
              </h4>
              <ul className="space-y-4 text-sm text-gray-600">
                <li className="flex items-start gap-3">
                  <FaMapMarkerAlt className="text-[#D31018] mt-1 flex-shrink-0" />
                  <div>
                    <strong className="text-gray-900 block font-semibold">Address:</strong>
                    <span>{ADDRESS}</span>
                    <span className="block text-xs text-gray-500 mt-0.5">{ADDRESS_LOCAL}</span>
                  </div>
                </li>
                <li className="flex items-center gap-3">
                  <FaPhoneAlt className="text-[#D31018] flex-shrink-0" />
                  <div>
                    <strong className="text-gray-900 block font-semibold">Phone:</strong>
                    <a href={PHONE_HREF} className="hover:text-[#D31018] transition-colors">
                      {PHONE_DISPLAY}
                    </a>
                  </div>
                </li>
                <li className="flex items-center gap-3">
                  <FaEnvelope className="text-[#D31018] flex-shrink-0" />
                  <div>
                    <strong className="text-gray-900 block font-semibold">Email:</strong>
                    <a href={`mailto:${EMAIL}`} className="hover:text-[#D31018] transition-colors">
                      {EMAIL}
                    </a>
                  </div>
                </li>
                <li className="flex items-center gap-3">
                  <FaWhatsapp className="text-[#D31018] flex-shrink-0" />
                  <div>
                    <strong className="text-gray-900 block font-semibold">WhatsApp:</strong>
                    <a
                      href={whatsappLink("Hello City Palace Residency, I'd like to know more.")}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[#D31018] transition-colors"
                    >
                      Chat with us on WhatsApp
                    </a>
                  </div>
                </li>
              </ul>
            </div>

            {/* Column 3: Location Map */}
            <div id="location" className="flex flex-col lg:col-span-4 scroll-mt-24">
              <h4 className="text-sm font-bold uppercase tracking-wider text-gray-900 mb-5 border-b border-black/5 pb-2">
                Our Location
              </h4>
              <p className="text-sm text-gray-600 mb-3">
                Find us at Wandoor, Malappuram. Click below to navigate or view on Google Maps.
              </p>
              
              {/* Premium Google Map Iframe Embed */}
              <div className="w-full h-[160px] rounded-xl overflow-hidden shadow-sm border border-gray-200 mb-3 relative group">
                <iframe
                  src={MAPS_EMBED_URL}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="City Palace Residency Location Map"
                ></iframe>
              </div>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-semibold text-[#0B1B4F] hover:text-[#D31018] transition-colors w-fit"
              >
                <FaMapMarkerAlt /> Open in Google Maps
              </a>
            </div>

          </nav>

          <hr className="h-[1px] border-t border-black/5 my-6" />
          
          <div className="flex flex-col sm:flex-row justify-between items-center text-xs text-gray-500 gap-3">
            <p>© {new Date().getFullYear()} City Palace Residency. All rights reserved.</p>
            <p>Wandoor, Kerala — PIN: 679328</p>
          </div>
        </div>
        <LayoutSpacing />
      </div>
    </footer>
  );
};

export default Footer;
