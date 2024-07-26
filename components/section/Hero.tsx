import React from 'react'
import LeftFilter from '../background/leftFilter'
import Image from 'next/image'
import Companies from './Companies'

export default function Hero() {
  return (
    <div className="flex flex-col items-center">
      <section className="flex relative container flex-col lg:flex-row justify-end lg:items-end items-center gap-10 xl:px-20 max-w-[1400px]">
        <LeftFilter />

        <div className=" container flex flex-col  items-center lg:items-start lg:py-16 gap-8 ">
          <Image
            src="/assets/Arrow_03.png"
            alt="hero"
            className="absolute top-0 lg:right-2/4 xl:left-1/4  xl:right-1/4 2xl:right-2/3 hidden lg:block "
            width={150}
            height={130}
          />
          <h2 className="font-jakarta text-responsive text-center lg:text-start w-10/12 lg:w-8/12 xl:w-2/4 text-balance">
            live and <br /> on-demand trading
          </h2>
          <p className="font-inter text-base px-10 lg:px-0 w-2/3 text-secondary text-center lg:text-start">
            Lorem ipsum dolor sit amet. Qui consequatur sint 33 volupta officia
            et sint laboriosam sed ipsa sint ut voluptatum labore et possimus
            voluptas.
          </p>
          <button className="font-inter font-semibold flex border border-secondary py-2 px-6 items-center justify-center w-40 hover:underline">
            Explore Now
          </button>
        </div>
        <picture className="h-full flex lg:justify-end items-center justify-center ">
          <img
            src="/assets/Wood-Hand.png"
            alt="hero"
            className="w-72 min-w-72 md:w-96 md:min-w-96 lg:w-full xl:w-4/5 h-full object-cover "
          />
        </picture>
      </section>
      <Companies />
    </div>
  )
}
