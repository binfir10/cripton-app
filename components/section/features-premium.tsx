import { BoxesIcon, BoxIcon, SparkleIcon } from 'lucide-react'
import Image from 'next/image'

export default function FeaturesPremium() {
  return (
    <div className="relative flex justify-evenly w-full items-center flex-col md:flex-row ">
      <Image
        src={'/assets/Ellipse 175.svg'}
        alt="bg"
        width={1000}
        height={1000}
        className="absolute left-0  -z-10 -top-52 w-[900px] h-[1000px] "
      />
      <div>
        <Image
          src={'/assets/Group 39887.png'}
          alt="bg"
          width={2000}
          height={2000}
          className="z-20 w-[300px] h-[300px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] "
        />
      </div>
      <article className="font-jakarta flex flex-col gap-3">
        <div className="gap-0 flex flex-col">
          <h3 className="text-[#C23893] text-sm font-normal">FEATURES</h3>
          <h2 className="text-5xl font-semibold">Crypo Premium</h2>
        </div>

        {criptoPremium.map(item => {
          return (
            <div key={item.id} className="max-w-[500px]">
              <div className="flex gap-2 font-medium items-center">
                {item.icon}
                <h3 className="text-xl">{item.title}</h3>
              </div>
              <p className="font-inter w-80 md:w-10/12 lg:w-full text-[#767799] text-sm">
                {item.description}
              </p>
            </div>
          )
        })}
      </article>
    </div>
  )
}

const criptoPremium = [
  {
    id: 1,
    title: 'Connect wallet & exchanges',
    description:
      'Lorem ipsum dolor sit amet. Qui consequatur sint 33 voluptatem officia et sint laboriosam sed ipsa sint ut volup.',
    icon: (
      <SparkleIcon className="w-7 h-7 fill-[#C23893] text-[#12132A] stroke-1" />
    ),
  },
  {
    id: 2,
    title: 'Connect wallet & exchanges',
    description:
      'Lorem ipsum dolor sit amet. Qui consequatur sint 33 voluptatem officia et sint laboriosam sed ipsa sint ut volup.',
    icon: (
      <BoxIcon className="w-7 h-7 fill-[#C23893] text-[#12132A] stroke-1" />
    ),
  },
  {
    id: 3,
    title: 'Connect wallet & exchanges',
    description:
      'Lorem ipsum dolor sit amet. Qui consequatur sint 33 voluptatem officia et sint laboriosam sed ipsa sint ut volup.',
    icon: (
      <BoxesIcon className="w-7 h-7 fill-[#C23893] text-[#12132A] stroke-1" />
    ),
  },
]
