"use client";
import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";

const CarouselComponent = ({ children }: { children: React.ReactNode }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
    },
    [AutoScroll({ playOnInit: true, stopOnInteraction: false, speed: 2})]
  );

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        {children}
        {children}
      </div>
    </div>
  );
};

export default CarouselComponent;
