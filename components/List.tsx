'use client';

import TimeagoComponent from '@/components/TimeagoComponent';
import {
  AdjustmentsHorizontalIcon,
  CheckIcon,
  CodeBracketIcon,
  LinkIcon,
  PaintBrushIcon,
  PaperClipIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function IdeasPage({ data }: { data: any[] }) {
  const [showDetails, setShowDetails] = useState(true);

  return (
    <div id="list" className="relative isolate px-4">
      {/* <div className="mx-auto grid max-w-xl gap-6 pb-8 sm:pb-16 lg:max-w-4xl lg:justify-center lg:text-center">
        <p className="font-semibold text-stone-500">Stop procrastinating, start now</p>
        <h2 className="text-3xl font-bold tracking-tight text-stone-100 sm:text-4xl">
          Find your next project, startup idea, or a side hustle.
        </h2>
        <p className="text-lg leading-8 text-stone-300">
          Most of the ideas require little to no money to start and are possible to build alone.
          They come from various domains, but mostly from web development, UX/UI design, digital
          marketing, productivity, and video games.
        </p>
      </div> */}
      <div className="mx-auto max-w-xl lg:max-w-7xl">
        <div className="flex items-center justify-between">
          <input placeholder="Search for projects" />
          <button
            className="mb-4 flex items-center justify-center gap-1 rounded-lg bg-stone-800 px-4 py-2 text-sm font-semibold text-stone-300 shadow-sm transition-colors hover:bg-stone-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            onClick={() => setShowDetails(!showDetails)}
          >
            <AdjustmentsHorizontalIcon aria-hidden="true" className="h-5 w-5" />
            <span className="ml-1 font-semibold">Toggle details</span>
          </button>
        </div>
        <ul
          role="list"
          className="divide-y divide-stone-700 overflow-auto rounded-xl border-8 border-stone-800"
        >
          {data.map((item) => (
            <li key={item.slug}>
              <Link
                href={`/idea/${item.slug}`}
                className="group grid w-full grid-cols-6 gap-x-8 p-6 hover:bg-stone-800"
              >
                <div className="flex-start col-span-6 flex w-full gap-x-4 lg:col-span-4 lg:items-center lg:gap-x-8">
                  {item.icon && (
                    <Image
                      alt={item.title}
                      src={item.icon.url}
                      width={64}
                      height={64}
                      className="h-12 w-12 lg:h-16 lg:w-16"
                    />
                  )}
                  <div>
                    <h3 className="lg:text-md text-sm leading-6 text-stone-300">
                      <span className="font-semibold text-stone-100">{item.title}</span>
                      {item.subtitle && <span> - {item.subtitle}</span>}
                    </h3>
                    {showDetails && (
                      <div className="mt-2 max-w-xl text-sm leading-6 text-stone-500">
                        {item.description}
                      </div>
                    )}
                  </div>
                </div>
                <div
                  className={`${showDetails ? 'mt-4' : ''} col-span-6 grid grid-cols-2 gap-2 pl-16 text-xs leading-5 text-stone-300 sm:grid-cols-4 lg:col-span-1 lg:mt-0 lg:grid-cols-1 lg:pl-0`}
                >
                  {showDetails && (
                    <>
                      <div className="flex items-center gap-1">
                        <LinkIcon aria-label="Complexity" className="h-5 w-5" />
                        <span className="ml-1 font-semibold">Demo:</span>
                        {item.demoUrl ? (
                          <CheckIcon aria-hidden="true" className="h-5 w-5 text-green-500" />
                        ) : (
                          <XMarkIcon aria-hidden="true" className="h-5 w-5 text-red-500" />
                        )}
                      </div>
                      <div className="flex items-center gap-1">
                        <PaperClipIcon aria-label="Complexity" className="h-5 w-5" />
                        <span className="ml-1 font-semibold">Assets:</span>
                        {item.assetsUrl ? (
                          <CheckIcon aria-hidden="true" className="h-5 w-5 text-green-500" />
                        ) : (
                          <XMarkIcon aria-hidden="true" className="h-5 w-5 text-red-500" />
                        )}
                      </div>
                      <div className="flex items-center gap-1">
                        <PaintBrushIcon aria-label="Complexity" className="h-5 w-5" />
                        <span className="ml-1 font-semibold">Design:</span>
                        {item.designUrl ? (
                          <CheckIcon aria-hidden="true" className="h-5 w-5 text-green-500" />
                        ) : (
                          <XMarkIcon aria-hidden="true" className="h-5 w-5 text-red-500" />
                        )}
                      </div>
                      <div className="flex items-center gap-1">
                        <CodeBracketIcon aria-label="Complexity" className="h-5 w-5" />
                        <span className="ml-1 font-semibold">Source:</span>
                        {item.sourceUrl ? (
                          <CheckIcon aria-hidden="true" className="h-5 w-5 text-green-500" />
                        ) : (
                          <XMarkIcon aria-hidden="true" className="h-5 w-5 text-red-500" />
                        )}
                      </div>
                    </>
                  )}
                </div>
                <div
                  className={`${showDetails ? 'sm:justify-center' : 'sm:justify-end'} col-span-6 mt-4 grid items-center gap-2 pl-16 text-xs text-stone-300 sm:grid-cols-2 lg:col-span-1 lg:mt-0 lg:grid-cols-1 lg:pl-0 lg:text-center`}
                >
                  {showDetails && item.type && (
                    <div className="flex lg:block">
                      <div className="font-semibold">Project type:</div>
                      <div className="ml-1 text-stone-500 lg:mt-1">{item.type}</div>
                    </div>
                  )}
                  {item.dateAbandoned && (
                    <div className="flex lg:block">
                      <div className="font-semibold">Abandoned:</div>
                      <div className="ml-1 text-stone-500 lg:mt-1">
                        <TimeagoComponent date={item.dateAbandoned} />
                      </div>
                    </div>
                  )}
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <p className="mx-auto mt-4 max-w-xl text-sm text-stone-500 lg:max-w-7xl lg:text-center">
        There are currently {data.length} projects on the list. Freshly digged up ideas will be
        published via our newsletter first. Subscribe to get them first.
      </p>
    </div>
  );
}
