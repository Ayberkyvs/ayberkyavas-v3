import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Navbar from '@/components/Navbar';
import {MobileMenu, MobileMenuTrigger, MobileMenuContent } from '@/components/MobileMenu';
const Header = () => {
  return (
    <>
      <header className='header z-[99]'>
        <div className='inner-header'>
          <Image src='/logo.svg' alt='Logo' width={100} height={24} />
          <Navbar direction="horizontal" className='hidden md:block'/>
          <MobileMenu className='md:hidden'>
            <MobileMenuTrigger>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-6 w-6'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M4 6h16M4 12h16m-7 6h7'
                />
              </svg>
            </MobileMenuTrigger>
            <MobileMenuContent>
              <Navbar direction='vertical' className='glass-effect'/>
            </MobileMenuContent>
          </MobileMenu>
        </div>
      </header>
    </>
  )
}

export default Header