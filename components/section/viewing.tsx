import { BoxesIcon, BoxIcon, SparkleIcon } from 'lucide-react'
import Image from 'next/image'

export default function Viewing() {
  return (
    <div className="relative flex justify-evenly w-full items-center flex-col md:flex-row max-md:gap-10">
      <Image
        src={'/assets/Ellipse 175.svg'}
        alt="bg"
        width={1000}
        height={1000}
        className="absolute left-0  -z-10 -top-52 w-[900px] h-[1000px] "
      />
      <div>
        <Image
          src={'/assets/Group 39894.png'}
          alt="bg"
          width={2000}
          height={2000}
          className="z-20 w-[250px] h-[350px] md:w-[300px] md:h-[400px] "
        />
      </div>
      <article className="font-jakarta flex flex-col max-md:items-center md:justify-between gap-6">
        <div className="flex flex-col gap-2 max-md:items-center">
          <h3 className="text-[#C23893] text-sm font-normal">How it works</h3>
          <h2 className="text-3xl font-semibold max-w-[250px] text-center md:text-start md:max-w-[300px] line-clamp-3">
            Viewing long- term and short -term forcast
          </h2>
        </div>
        <p className="font-inter text-[#767799] text-sm max-w-[300px] lg:max-w-[500px]">
          Lorem ipsum dolor sit amet. Qui consequatur sint 33 voluptatem officia
          et sint laboriosam sed ipsa sint ut voluptatum labore et possimus
          voluptas. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Veritatis animi voluptatibus voluptas aut cupiditate.
        </p>
        <button className="font-inter font-semibold flex border border-secondary py-2 px-6 items-center justify-center w-40 hover:underline">
          Explore Now
        </button>
      </article>
    </div>
  )
}
