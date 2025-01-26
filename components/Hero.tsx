import Image from 'next/image'
import FadeIn from './animations/FadeIn'

export default function Hero() {

  return (
    <div className="flex-center w-full mt-[60px] md:mt-[80px]">
      {/* Arka plan */}
      <div className="relative w-full flex flex-col items-center bg-black bg-[url('/bg_vector.svg')] bg-bottom bg-no-repeat bg-cover mt-28 max-w-screen-2xl">
        {/* Zeus ve Metin */}
        <div className="flex-center flex-col w-full relative z-10 -mt-16 md:-mt-28">
        <FadeIn direction='down' delay={0.1} duration={0.5} distance={30} className='flex-center w-full'>
          <h1 className="text-[50px] xs:text-[80px] md:text-[130px] lg:text-[150px] font-bold text-white text-center -mb-16 md:-mb-28">
            CREATING
          </h1>
          </FadeIn>
          <FadeIn direction='up' delay={0.1} duration={0.5} distance={30} className='flex-center w-full'>
            <Image
                src="/zeus.webp"
                width={618}
                height={572}
                className="w-10/12 sm:w-9/12 md:max-w-[500px] lg:max-w-[618px] h-auto mt-4 shadow-xl"
                alt="Zeus Statue"
                draggable={false}
                priority
            />
          </FadeIn>
        </div>
        {/* 3D Efekti için Gölge */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/40 to-black/80 z-0" />
      </div>
    </div>
  )
}
