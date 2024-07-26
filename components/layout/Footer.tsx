import Image from 'next/image'
import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-[#962F79] w-full flex justify-around flex-col md:flex-row items-center h-28 lg:h-20 mt-32">
      <span>© 2024 Untitled UI. All rights reserved.</span>
      <Image
        src={'/assets/Social icons.png'}
        alt="footer"
        width={1000}
        height={1000}
        className="w-[200px] h-[20px]"
      />
    </footer>
  )
}
