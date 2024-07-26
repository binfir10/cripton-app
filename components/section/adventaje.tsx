import { FileTextIcon, ViewIcon, Wallet2, Wallet2Icon } from 'lucide-react'
import React from 'react'

export default function Adventaje() {
  return (
    <section className="flex flex-col items-center  gap-11 py-20">
      <div className="flex flex-col items-center gap-5">
        <h2 className="text-2xl md:text-5xl font-jakarta">
          Automated portfolio tracking
        </h2>
        <p className="text-secondary text-center w-2/3">
          Lorem ipsum dolor sit amet. Qui consequatur sint 33 voluptatem officia
          et sint laboriosam sed ipsa sint ut voluptatum labore et possimus
          voluptas.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5  lg:gap-12 items-center">
        {items.map(item => {
          return (
            <div
              key={item.id}
              className="border-2 flex flex-wrap w-64 p-5 gap-5 items-center justify-center rounded-lg border-[#C23893]">
              {item.icon}
              <h3 className="text-2xl font-jakarta font-semibold">
                {item.title}
              </h3>
              <p className="text-sm font-light">{item.description}</p>
            </div>
          )
        })}
      </div>
    </section>
  )
}

const items = [
  {
    id: 1,
    title: 'Connect wallet & exchanges',
    description:
      'Lorem ipsum dolor sit amet. Qui consequatur sint 33 voluptatem officia et sint laboriosam sed ipsa sint ut volup.',
    icon: <Wallet2Icon className="w-24 h-24" />,
  },
  {
    id: 2,
    title: 'Connect wallet & exchanges',
    description:
      'Lorem ipsum dolor sit amet. Qui consequatur sint 33 voluptatem officia et sint laboriosam sed ipsa sint ut volup.',
    icon: <ViewIcon className="w-24 h-24" />,
  },
  {
    id: 3,
    title: 'Connect wallet & exchanges',
    description:
      'Lorem ipsum dolor sit amet. Qui consequatur sint 33 voluptatem officia et sint laboriosam sed ipsa sint ut volup.',
    icon: <FileTextIcon className="w-24 h-24" />,
  },
]
