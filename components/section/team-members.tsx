import { BoxesIcon, BoxIcon, SparkleIcon } from 'lucide-react'
import Image from 'next/image'

export default function TeamMembers() {
  return (
    <div className="relative flex justify-evenly w-full items-center flex-col md:flex-row">
      <Image
        src={'/assets/Ellipse 176.png'}
        alt="bg"
        width={1000}
        height={1000}
        className="absolute right-0  -z-10 -top-72 w-[900px] h-[1000px] "
      />

      <article className="font-jakarta flex flex-col h-full justify-around min-h-[400px]">
        <h2 className="text-3xl lg:text-5xl">
          Invite team members <br /> & enlarge your <br /> groups
        </h2>
        <p className="font-inter text-[#767799] text-sm max-w-80 lg:max-w-[500px]">
          Lorem ipsum dolor sit amet. Qui consequatur sint 33 voluptatem officia
          et sint laboriosam sed ipsa sint ut voluptatum labore et possimus
          voluptas. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Veritatis animi voluptatibus voluptas aut cupiditate.
        </p>
        <button className="font-inter font-semibold flex border border-secondary py-2 px-6 items-center justify-center w-40 hover:underline">
          Explore Now
        </button>
      </article>
      <div>
        <Image
          src={'/assets/Group 39890.png'}
          alt="bg"
          width={1000}
          height={1000}
          className="z-20  w-[350px] h-[320px] lg:w-[450px] lg:h-[420px] "
        />
      </div>
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
