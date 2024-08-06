import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="grid gap-40 py-20">
      <div className="relative isolate overflow-hidden px-4">
        <div className="grid gap-6 pb-8 text-center sm:pb-16">
          <p className="font-semibold text-stone-500">Error 404</p>
          <h2 className="mx-auto max-w-4xl text-3xl font-bold tracking-tight text-stone-100 sm:text-4xl">
            This page does not exist.
          </h2>
          <Link href="/">Go back to homepage</Link>
        </div>
      </div>
    </div>
  );
}
