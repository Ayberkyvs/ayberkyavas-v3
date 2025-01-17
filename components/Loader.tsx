import { LoaderIcon } from 'lucide-react';
import Image from 'next/image'
import * as React from 'react';
const Loader = ({loaderIcon = null}: {loaderIcon?: React.ReactNode}) => {
  return (
    <>
        <section className='flex justify-center items-center bg-background w-screen h-screen z-[99]'>
            {loaderIcon
            ? loaderIcon
            : <Image src='/logo_icon.svg' alt="Yavas Logo" width={60} height={60} />}
        </section>
    </>
  )
}

export default Loader