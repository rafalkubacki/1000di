import Image from 'next/image';
import HeroImage from '../public/hero.jpeg';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

export default function Hero() {
  return (
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
          <p className="font-semibold text-stone-500">🪦 Welcome to 1000 Dead Ideas</p>
          <h1 className="text-3xl font-bold tracking-tight text-stone-100 sm:text-4xl">
            Do you want to build a side project, start a business, or launch a micro SaaS?{' '}
            <span className="text-amber-100">Resurrect one instead!</span>
          </h1>
          <p className="text-lg leading-8 text-stone-300">
            Over the years I've had a lot of ideas in all shapes and forms. Sadly, I had to abandon
            most of them for various reasons. Maybe you will find something interesting and bring it
            back to life?
          </p>
          <div className="flex items-center justify-center gap-x-6 lg:justify-start">
            <a
              href="#list"
              className="flex rounded-md bg-amber-100 px-3.5 py-2.5 text-sm font-semibold text-stone-800 shadow-sm hover:bg-amber-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Browse the list of ideas{' '}
              <ArrowRightIcon aria-hidden="true" className="ml-2 h-5 w-5" />
            </a>
            {/* <a
              href="#"
              className="text-sm font-semibold leading-6 text-white hover:text-stone-300"
            >
              Read the full story <span aria-hidden="true">→</span>
            </a> */}
          </div>
        </div>
        <div className="w-full lg:max-w-lg">
          <Image
            src={HeroImage}
            alt="1000 Dead Ideas"
            className="rounded-xl border-8 border-stone-800"
            priority
          />
        </div>
      </div>
    </div>
  );
}
