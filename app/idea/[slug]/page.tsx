import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

const getIdea = async (params) => {
  const response = await fetch(
    'https://eu-central-1-shared-euc1-02.cdn.hygraph.com/content/clzadjpto01jg08w1dy3bbemu/master',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        query: `{
          project(where: {slug: "${params.slug}"}) {
            id
            icon {
              url
            }
            title
            slug
            subtitle
            description
            demoUrl
            assetsUrl
            sourceUrl
            designUrl
            dateAbandoned
            type
            coverImage {
              url
            }
            content {
              html
            }
          }
        }`,
      }),
    },
  );

  const { data } = await response.json();

  return data.project;
};

export default async function Page({ params }) {
  const data = await getIdea(params);

  if (!data) notFound();

  return (
    <div className="grid gap-40 py-20">
      <div className="relative isolate px-4">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between">
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
          className="absolute bottom-0 left-1/2 -z-10 -translate-x-1/2 blur-3xl"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-stone-500 to-stone-800 opacity-30"
          />
        </div>
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between">
          <div className="mx-auto grid w-full gap-6 text-center lg:mx-0 lg:max-w-xl lg:flex-auto lg:text-left">
            <p className="font-semibold text-stone-500">{data.subtitle}</p>
            <h1 className="text-3xl font-bold tracking-tight text-stone-100 sm:text-4xl">
              {data.title}
            </h1>
            <p className="text-lg leading-8 text-stone-300">{data.description}</p>
          </div>
          <div className="w-full lg:max-w-lg">
            <Image
              src={data.icon.url}
              width={500}
              height={500}
              alt={data.title}
              className="rounded-xl border-8 border-stone-800"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}
