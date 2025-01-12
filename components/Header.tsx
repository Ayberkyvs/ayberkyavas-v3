import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Navbar from '@/components/Navbar';

const Header = () => {
  return (
    <>
      <header className='header'>
        <div className='inner-header'>
          <Image src='/logo.svg' alt='Logo' width={100} height={24} />
          <Navbar />
        </div>
      </header>
    </>
  )
}

export default Header