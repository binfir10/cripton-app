/* eslint-disable @next/next/no-img-element */
'use client'
import { animate, useMotionValue } from 'framer-motion'
import React, { useEffect } from 'react'
import useMeasure from 'react-use-measure'
import { motion } from 'framer-motion'

export default function Companies() {
  let [ref, { width }] = useMeasure()
  const xTranslate = useMotionValue(0)

  useEffect(() => {
    let finalPosition = -width / 2 - 8
    let controls = animate(xTranslate, [0, finalPosition], {
      ease: 'linear',
      duration: 20,
      repeat: Infinity,
      repeatType: 'loop',
      repeatDelay: 0,
    })
    return controls.stop
  }, [xTranslate, width])

  return (
    <section className="bg-[#162446] h-28 w-full flex items-center">
      <div className="relative  overflow-hidden flex gap-52  ">
        <motion.div
          className="flex items-center justify-center gap-24 "
          ref={ref}
          style={{ x: xTranslate }}>
          {dataCompanies.map(({ id, image, height, weigth }) => (
            <img
              src={`/assets/companies/${image}`}
              alt="payment"
              className="w-full h-full object-fill"
              key={id}
              height={height}
              width={weigth}
            />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

const dataCompanies = [
  {
    id: 1,
    image: 'waverio.svg',
    height: 46,
    weigth: 189,
  },
  {
    id: 2,
    image: 'logoipsum.svg',
    height: 42,
    weigth: 164,
  },
  {
    id: 3,
    image: 'alterbone.svg',
    height: 46,
    weigth: 220,
  },
  {
    id: 4,
    image: 'ridoria.svg',
    height: 38,
    weigth: 162,
  },
  {
    id: 5,
    image: 'tinygone.svg',
    height: 35,
    weigth: 197,
  },
  {
    id: 6,
    image: 'waverio.svg',
    height: 46,
  },
  {
    id: 7,
    image: 'logoipsum.svg',
    height: 42,
  },
  {
    id: 8,
    image: 'alterbone.svg',
    height: 46,
  },
  {
    id: 9,
    image: 'ridoria.svg',
    height: 38,
  },
  {
    id: 10,
    image: 'tinygone.svg',
    height: 34,
  },
]
