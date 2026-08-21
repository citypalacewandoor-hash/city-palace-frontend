"use client";

import { Product } from "@/types/product.types";
import React from "react";
import { WHATSAPP_NUMBER } from "@/lib/contact";

type Props = {
  data: Product & { quantity: number };
  attributes?: string[];
};

const AddToCartBtn = ({ data, attributes = [] }: Props) => {
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_PHONE || WHATSAPP_NUMBER;

  const textMessage = `Hi, I'm interested in enquiring about:\n*${data.title}*\n${attributes.length > 0 ? `Details: ${attributes.join(", ")}\n` : ""}Price: ₹${data.price}`;

  return (
    <a
      href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(textMessage)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-black w-full ml-3 sm:ml-5 rounded-full h-11 md:h-[52px] text-sm sm:text-base text-white hover:bg-black/80 transition-all flex items-center justify-center font-medium"
    >
      Enquiry Now
    </a>
  );
};

export default AddToCartBtn;

