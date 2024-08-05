// app/ideas/page.js (or any other page/component where you want to use it)
import { getIdeas } from '@/lib/getIdeas';
import TimeagoComponent from '@/components/TimeagoComponent';
import { complexityList, domainList, timeList } from '@/utils';
import {
  AcademicCapIcon,
  CalendarDaysIcon,
  HeartIcon,
  PuzzlePieceIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';

export default async function IdeasPage() {
  const data = await getIdeas();

  return (
    <div id="list" className="relative isolate overflow-hidden px-4">
      <div className="grid gap-6 pb-8 text-center sm:pb-16">
        <p className="font-semibold text-stone-500">Stop procrastinating, start now</p>
        <h2 className="mx-auto max-w-4xl text-3xl font-bold tracking-tight text-stone-100 sm:text-4xl">
          Find your next project, startup idea, or a side hustle.
        </h2>
        <p className="mx-auto max-w-2xl text-lg leading-8 text-stone-300">
          Most of the ideas require little to no money to start and are possible to build alone.
          They come from various domains, but mostly from web development, UX/UI design, digital
          marketing, productivity, and video games.
        </p>
      </div>
      <div className="mx-auto max-w-7xl">
        <ul role="list" className="divide-y divide-stone-700 rounded-xl border-8 border-stone-800">
          {data.map((item) => (
            <li key={item.slug} className="group grid grid-cols-6 gap-x-8 p-6 hover:bg-stone-800">
              <Link
                href={`/idea/${item.slug}`}
                className="flex-start col-span-4 flex items-center gap-x-8"
              >
                <img alt={item.title} src={item.icon.url} className="h-16 w-16" />
                <div>
                  <h3 className="text-md leading-6 text-stone-300">
                    <span className="font-semibold text-stone-100">{item.title}</span> -{' '}
                    <span>{item.subtitle}</span>
                  </h3>
                  <div className="mt-2 max-w-xl text-sm leading-6 text-stone-500">
                    {item.description}
                  </div>
                </div>
              </Link>
              <div className="grid gap-2 text-xs leading-5 text-stone-300">
                <div className="flex items-center gap-1">
                  <PuzzlePieceIcon aria-label="Complexity" className="h-5 w-5" />
                  {complexityList[item.complexity]}
                </div>
                <div className="flex items-center gap-1">
                  <CalendarDaysIcon aria-label="Time" className="h-5 w-5" />
                  {timeList[item.time]}
                </div>
                <div className="flex items-center gap-1">
                  <AcademicCapIcon aria-label="Domain" className="h-5 w-5" />
                  {domainList[item.domain]}
                </div>
              </div>
              <div className="flex flex-col items-center justify-start text-center">
                <button className="flex h-16 w-16 flex-col items-center justify-center rounded-md bg-amber-100 p-2 text-stone-800 transition-colors hover:bg-amber-200">
                  <HeartIcon aria-hidden="true" className="h-5 w-5" />
                  <div className="mt-1 text-xs leading-5">{item.votes}</div>
                </button>
                <div className="mt-2 whitespace-nowrap text-xs text-stone-500">
                  Abandoned
                  <span className="block font-medium">
                    <TimeagoComponent date={item.date} />
                  </span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="pb-8 text-center sm:pb-16">
        <p className="mx-auto mt-6 text-sm text-stone-500">
          This list only shows featured ideas. If you would like to see way more, please subscribe
          to the newsletter below.
        </p>
      </div>
    </div>
  );
}
