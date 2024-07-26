import {
  ChartNoAxesCombinedIcon,
  ChartPieIcon,
  FileTextIcon,
  FolderHeartIcon,
  HeadphonesIcon,
  LayoutPanelLeftIcon,
  Package2Icon,
  ViewIcon,
  Wallet2,
  Wallet2Icon,
} from 'lucide-react'
import React from 'react'

export default function UserCentric() {
  return (
    <section className="flex flex-col items-center gap-11 py-20">
      <div className="flex flex-col items-center gap-5">
        <h2 className="md:text-5xl max-md:max-w-[220px] text-center font-semibold  text-5xl text-pretty font-jakarta">
          Make every step user-centric
        </h2>
        <p className="text-secondary text-center lg:w-2/3 max-md:max-w-96">
          Lorem ipsum dolor sit amet. Qui consequatur sint 33 voluptatem officia
          et
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-center">
        {items.map((item, index) => {
          const isNotFirstColumn = index % 3 !== 0 // No es la primera columna en lg
          const isNotLastColumn = (index + 1) % 3 !== 0 // No es la última columna en lg
          const isNotFirstRow = index >= 3 // No es la primera fila en lg

          return (
            <div
              key={item.id}
              className={`flex flex-col w-64 p-8 gap-5 items-center justify-center border-custom
              ${isNotFirstColumn ? 'border-custom-left' : ''}
              ${isNotLastColumn ? 'border-custom-right' : ''}
              ${isNotFirstRow ? 'border-custom-top' : ''}`}>
              {item.icon}
              <h3 className="text-2xl font-jakarta font-semibold">
                {item.title}
              </h3>
              <p className="font-inter text-[#767799] text-sm font-light max-w-[500px]">
                {item.description}
              </p>
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
    title: 'Support',
    description:
      'Lorem ipsum dolor sit amet. Qui consequatur sint 33 voluptatem officia et sint laboriosam sed ipsa sint ut volup.',
    icon: <HeadphonesIcon className="w-12 h-12 stroke-1" />,
  },
  {
    id: 2,
    title: 'Sales',
    description:
      'Lorem ipsum dolor sit amet. Qui consequatur sint 33 voluptatem officia et sint laboriosam sed ipsa sint ut volup.',
    icon: <ChartNoAxesCombinedIcon className="w-12 h-12  stroke-1" />,
  },
  {
    id: 3,
    title: 'Onboarding',
    description:
      'Lorem ipsum dolor sit amet. Qui consequatur sint 33 voluptatem officia et sint laboriosam sed ipsa sint ut volup.',
    icon: <LayoutPanelLeftIcon className="w-12 h-12  stroke-1" />,
  },
  {
    id: 4,
    title: 'Product',
    description:
      'Lorem ipsum dolor sit amet. Qui consequatur sint 33 voluptatem officia et sint laboriosam sed ipsa sint ut volup.',
    icon: <Package2Icon className="w-12 h-12  stroke-1" />,
  },
  {
    id: 5,
    title: 'Quality',
    description:
      'Lorem ipsum dolor sit amet. Qui consequatur sint 33 voluptatem officia et sint laboriosam sed ipsa sint ut volup.',
    icon: <FolderHeartIcon className="w-12 h-12  stroke-1" />,
  },
  {
    id: 6,
    title: 'Result',
    description:
      'Lorem ipsum dolor sit amet. Qui consequatur sint 33 voluptatem officia et sint laboriosam sed ipsa sint ut volup.',
    icon: <ChartPieIcon className="w-12 h-12  stroke-1" />,
  },
]
