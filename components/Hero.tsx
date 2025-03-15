import Image from "next/image";
import FadeIn from "./animations/FadeIn";

export default function Hero() {
  return (
    <div className="flex-center mt-[60px] w-full md:mt-[80px]">
      {/* Arka plan */}
      <div className="relative mt-28 flex w-full max-w-screen-2xl flex-col items-center bg-black bg-[url('/bg_vector.svg')] bg-cover bg-bottom bg-no-repeat">
        {/* Zeus ve Metin */}
        <div className="flex-center relative z-10 -mt-16 w-full flex-col md:-mt-28">
          <FadeIn
            direction="down"
            delay={0.2}
            duration={0.5}
            distance={30}
            className="flex-center w-full"
          >
            <h1 className="-mb-16 text-center text-[50px] font-bold text-white xs:text-[80px] md:-mb-28 md:text-[130px] lg:text-[150px]">
              CREATING
            </h1>
          </FadeIn>
          <FadeIn
            direction="up"
            delay={0.4}
            duration={0.7}
            distance={30}
            className="flex-center w-full"
          >
            <Image
              src="/zeus.webp"
              width={618}
              height={572}
              className="mt-4 h-auto w-10/12 shadow-xl sm:w-9/12 md:max-w-[500px] lg:max-w-[618px]"
              alt="Zeus Statue"
              draggable={false}
              priority
            />
          </FadeIn>
        </div>
        {/* 3D Efekti için Gölge */}
        <div className="absolute left-0 top-0 z-0 size-full bg-gradient-to-b from-black/40 to-black/80" />
      </div>
    </div>
  );
}
