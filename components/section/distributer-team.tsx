import Image from 'next/image'

export default function DistributerTeam() {
  return (
    <div className=" flex flex-col items-center justify-center gap-4">
      <div className="flex items-center justify-center text-center flex-col gap-2">
        <h3 className="text-[#C23893] text-sm font-normal">About us</h3>
        <h2 className="text-5xl md:text-5xl font-semibold max-md:max-w-[250px]">
          We’re a distributed team
        </h2>
      </div>
      <p className="font-inter text-[#767799] text-sm max-w-[220px] md:max-w-[500px] text-center">
        We have offices and teams all around the world.
      </p>

      <Image
        src={'/assets/Container.png'}
        alt=""
        width={1000}
        height={500}
        className="max-md:object-contain w-96 md:w-10/12 "
      />
    </div>
  )
}
