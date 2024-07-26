import Image from 'next/image'
import React from 'react'

export default function LeftFilter() {
  return (
    <div className='absolute left-0 top-0 -z-50'>

      <Image src='/assets/Ellipse172.png' width={850} height={750} alt='hero' />

    </div>
  )
}
