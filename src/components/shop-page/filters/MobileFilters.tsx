"use client";

import React, { useState } from "react";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { FiSliders } from "react-icons/fi";
import Filters from "./index";

const MobileFilters = () => {
  const [open, setOpen] = useState(false);

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <button
          type="button"
          aria-label="Open category and price filters"
          className="md:hidden inline-flex items-center gap-2 rounded-full bg-[#D31018] px-4 py-2.5 text-white shadow-sm transition-transform active:scale-95"
        >
          <FiSliders className="text-base shrink-0" />
          <span className="text-sm font-semibold whitespace-nowrap">
            Filter / Categories
          </span>
        </button>
      </DrawerTrigger>
      <DrawerContent className="max-h-[90%]">
        <DrawerHeader>
          <div className="flex items-center justify-between">
            <span className="font-bold text-black text-xl">Filters</span>
            <FiSliders className="text-2xl text-black/40" />
          </div>
          <DrawerTitle className="hidden">filters</DrawerTitle>
          <DrawerDescription className="hidden">filters</DrawerDescription>
        </DrawerHeader>
        <div className="max-h-[90%] overflow-y-auto w-full px-5 md:px-6 py-5 space-y-5 md:space-y-6">
          <Filters onApply={() => setOpen(false)} />
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default MobileFilters;
