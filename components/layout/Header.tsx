'use client'

import { EllipsisVerticalIcon, MenuIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname, useSearchParams } from 'next/navigation'
import React, { useState } from 'react'

const links = [
  {
    name: 'Home',
    href: '/',
  },
  {
    name: 'About',
    href: '/about',
  },
  {
    name: 'Services',
    href: '/services',
  },
  {
    name: 'Events',
    href: '/events',
  },
]

interface ActiveLinkProps {
  href: string
  children: React.ReactNode
  onClick?: () => void
}
const ActiveLink = ({ href, children, onClick }: ActiveLinkProps) => {
  const pathname = usePathname()

  const className =
    pathname === href
      ? 'font-semibold mybox'
      : ' font-normal text-white lg:text-[#767799] lg:hover:text-[#7699]'

  return (
    <Link
      onClick={onClick}
      href={href}
      className={`${className} flex items-center py-1 justify-center font-poppins text-base `}>
      {children}
    </Link>
  )
}

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Función para alternar entre abierto y cerrado del menú responsive
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="flex justify-between max-lg:px-6 lg:justify-around py-7 items-center">
      <Link href="/" className="flex gap-1 items-end">
        <Image
          src="/assets/Logo.png"
          alt="Logo"
          width={20}
          height={19.96}
          className="size-6"
        />
        <h2 className="font-inter text-base">Crypton</h2>
      </Link>

      {/*Mobile*/}
      <div className="lg:hidden  block">
        <button onClick={toggleMenu} className="size-[24px]">
          <MenuIcon />
        </button>
        <nav
          className={`min-w-[240px] min-h-[126px] bg-[#162446] rounded-[16px] absolute top-16 right-7 p-5 flex flex-col justify-center items-end pr-8 z-50  gap-[20px] ${
            isMenuOpen ? 'block' : 'hidden'
          }`}>
          {links.slice(1).map(link => (
            <ActiveLink href={link.href} key={link.name}>
              {link.name}
            </ActiveLink>
          ))}
          <button className="font-semibold flex border border-secondary py-2 px-6 items-center justify-center font-poppins hover:underline">
            Sign In
          </button>
        </nav>
      </div>

      {/*Desktop*/}
      <nav className="lg:block  hidden">
        <ul className="flex gap-10 items-center ">
          {links.map(link => (
            <li key={link.name}>
              <ActiveLink href={link.href}>{link.name}</ActiveLink>
            </li>
          ))}
          <button className="font-semibold flex border border-secondary py-2 px-6 items-center justify-center font-poppins hover:underline">
            Sign In
          </button>
        </ul>
      </nav>
    </header>
  )
}
