"use client";
import React from "react";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { dataBrands } from "./SliderBrands.data";

export function SliderBrands() {
  return (
      <div className="w-full bg-black py-12 flex justify-center">
  <Carousel
    className="w-full max-w-5xl"
    plugins={[Autoplay({ delay: 2000 })]}
  >
    <CarouselContent className="flex space-x-6">
      {dataBrands.map(({ url }) => (
        <CarouselItem
          key={url}
          className="basis-full md:basis-1/2 lg:basis-1/3"
        >
          <div className="flex justify-center items-center">
            <Image
              src={`/images/${url}`}
              alt="Brand"
              width={375}
              height={375}
              className="object-contain rounded-xl"
            />
          </div>
        </CarouselItem>
      ))}
    </CarouselContent>
  </Carousel>
</div>

  );
}