import { getIdea } from '@/lib/getIdea';
import {
  ArrowLeftIcon,
  CodeBracketIcon,
  LinkIcon,
  PaintBrushIcon,
  PaperClipIcon,
} from '@heroicons/react/24/outline';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata, ResolvingMetadata } from 'next';

type Props = {
  params: { id: string; slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const data = await getIdea(params.slug);

  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: data.title + ' - 1000 Dead Ideas',
    description: data.description,
    openGraph: {
      images: [data.coverImage?.url, ...previousImages],
    },
  };
}

export default async function Page({ params, searchParams }: Props) {
  const data = await getIdea(params.slug);

  if (!data) notFound();

  return (
    <div className="grid gap-20 py-20">
      <div className="relative isolate px-4">
        <div className="mx-auto flex max-w-xl flex-wrap items-center justify-between lg:max-w-7xl">
          <Link
            href="/#list"
            className="flex text-sm font-semibold text-stone-500 transition-colors hover:text-stone-300"
          >
            <ArrowLeftIcon aria-hidden="true" className="mr-2 h-5 w-5" /> Back to ideas
          </Link>
        </div>
      </div>
      <div id="hero" className="relative isolate px-4">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-0 left-1/2 -z-10 -translate-x-1/2 blur-3xl"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-stone-500 to-stone-800 opacity-30"
          />
        </div>
        <div className="mx-auto flex max-w-xl flex-wrap items-center justify-between lg:max-w-7xl">
          <div className="mb-8 grid w-full gap-6 lg:mb-0 lg:max-w-xl lg:flex-auto">
            <div className="flex items-center justify-start gap-2">
              {data.icon && <Image alt={data.title} src={data.icon.url} width={64} height={64} />}
              <h1 className="text-3xl font-bold tracking-tight text-stone-100 sm:text-4xl">
                {data.title}
              </h1>
            </div>
            <p className="font-semibold text-stone-500">{data.subtitle}</p>
            <p className="text-lg leading-8 text-stone-300">{data.description}</p>
            <div className="grid gap-2 text-sm leading-5 text-stone-300">
              {data.demoUrl && (
                <div className="flex items-start gap-1">
                  <LinkIcon aria-label="Complexity" className="h-5 w-5" />
                  <span className="ml-1 mr-1 font-semibold">Demo:</span>
                  <a
                    href={data.demoUrl}
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                    className="text-amber-100 transition-colors hover:text-amber-200"
                  >
                    {data.demoUrl}
                  </a>
                </div>
              )}
              {data.assetsUrl && (
                <div className="flex items-start gap-1">
                  <PaperClipIcon aria-label="Complexity" className="h-5 w-5" />
                  <span className="ml-1 mr-1 font-semibold">Assets:</span>
                  <a
                    href={data.assetsUrl}
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                    className="text-amber-100 transition-colors hover:text-amber-200"
                  >
                    {data.assetsUrl}
                  </a>
                </div>
              )}
              {data.designUrl && (
                <div className="flex items-start gap-1">
                  <PaintBrushIcon aria-label="Complexity" className="h-5 w-5" />
                  <span className="ml-1 mr-1 font-semibold">Design:</span>
                  <a
                    href={data.designUrl}
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                    className="text-amber-100 transition-colors hover:text-amber-200"
                  >
                    {data.designUrl}
                  </a>
                </div>
              )}
              {data.sourceUrl && (
                <div className="flex items-start gap-1">
                  <CodeBracketIcon aria-label="Complexity" className="h-5 w-5" />
                  <span className="ml-1 mr-1 font-semibold">Source:</span>
                  <a
                    href={data.sourceUrl}
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                    className="text-amber-100 transition-colors hover:text-amber-200"
                  >
                    {data.sourceUrl}
                  </a>
                </div>
              )}
            </div>
          </div>
          {data.coverImage && (
            <div className="w-full lg:max-w-lg">
              <Image
                src={data.coverImage.url}
                width={500}
                height={500}
                alt={data.title}
                className="rounded-xl border-8 border-stone-800"
                priority
              />
            </div>
          )}
        </div>
      </div>
      <div id="content" className="relative isolate px-4">
        <div className="mx-auto flex max-w-xl flex-wrap items-center justify-between lg:max-w-7xl">
          {data.content && (
            <div
              className="prose lg:prose-xl prose-invert mx-auto mt-8 max-w-4xl"
              dangerouslySetInnerHTML={{ __html: data.content.html }}
            />
          )}
        </div>
      </div>
    </div>
  );
}
