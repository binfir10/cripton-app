import Image from 'next/image'

export default function Testimonials() {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <Image
        src={'/assets/Ellipse 178.png'}
        alt="bg"
        width={1000}
        height={1000}
        className="absolute right-0  -z-10  w-[900px] h-[1000px] "
      />
      <div className="flex flex-col gap-2 items-center">
        <span className="text-[#C23893] text-6xl font-bold flex font-jakarta gap-1">
          {'" '}

          <h2 className="text-5xl text-white font-semibold font-jakarta">
            Testimonials
          </h2>
          {' " '}
        </span>
      </div>
      <p className="font-inter text-[#767799] text-sm max-w-[250px] md:max-w-[500px] text-center">
        Lorem ipsum dolor sit amet. Qui consequatur sint 33 voluptatem officia
        et sint laboriosam sed ipsa sint ut voluptatum labore et.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-10 mt-8 items-center justify-center">
        <Image
          src={'/assets/1.png'}
          alt=""
          width={1000}
          height={1000}
          className="w-[200px] h-[350px] md:w-[300px] md:h-[550px] object-contain"
        />
        <Image
          src={'/assets/2.png'}
          alt=""
          width={1000}
          height={1000}
          className="w-[200px] h-[350px] md:w-[300px] md:h-[550px] object-contain"
        />
        <Image
          src={'/assets/3.png'}
          alt=""
          width={1000}
          height={1000}
          className="w-[200px] h-[350px] md:w-[300px] md:h-[550px] object-contain"
        />
      </div>
    </div>
  )
}
