// app/ideas/page.js (or any other page/component where you want to use it)
import { getIdeas } from '@/lib/getIdeas';
import TimeagoComponent from '@/components/TimeagoComponent';
import { complexityList, domainList, timeList } from '@/utils';
import {
  AcademicCapIcon,
  ArrowTopRightOnSquareIcon,
  CalendarDaysIcon,
  CheckIcon,
  CodeBracketIcon,
  FolderArrowDownIcon,
  HeartIcon,
  LinkIcon,
  PaintBrushIcon,
  PaperClipIcon,
  PuzzlePieceIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import Image from 'next/image';

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
                <div className="flex-start col-span-4 flex w-full items-center gap-x-8">
                  {item.icon && (
                    <Image alt={item.title} src={item.icon.url} width={64} height={64} />
                  )}
                  <div>
                    <h3 className="text-md leading-6 text-stone-300">
                      <span className="font-semibold text-stone-100">{item.title}</span>
                      {item.subtitle && <span> - {item.subtitle}</span>}
                    </h3>
                    <div className="mt-2 max-w-xl text-sm leading-6 text-stone-500">
                      {item.description}
                    </div>
                  </div>
                </div>
                <div className="grid gap-2 text-xs leading-5 text-stone-300">
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
                </div>
                <div className="grid items-center gap-2 text-center text-xs text-stone-300">
                  {item.type && (
                    <div>
                      <div className="font-semibold">Project type:</div>
                      <div className="mt-1 text-stone-500">{item.type}</div>
                    </div>
                  )}
                  {item.dateAbandoned && (
                    <div>
                      <div className="font-semibold">Abandoned:</div>
                      <div className="mt-1 text-stone-500">
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
      <div className="pb-8 text-center sm:pb-16">
        <p className="mx-auto mt-6 text-sm text-stone-500">
          There are currently {data.length} projects on the list. Freshly digged up ideas will be
          published via our newsletter first. Subscribe to get them first.
        </p>
      </div>
    </div>
  );
}
