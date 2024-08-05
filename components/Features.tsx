import {
  ClipboardDocumentCheckIcon,
  CreditCardIcon,
  UserPlusIcon,
} from '@heroicons/react/24/outline';

export default function Features() {
  return (
    <div id="features" className="relative isolate px-4">
      <div className="mx-auto max-w-7xl">
        <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-3">
          <div className="flex flex-col items-start">
            <div className="aspect-square rounded-md bg-white/5 p-2 text-center text-xl text-white ring-1 ring-white/10">
              <CreditCardIcon aria-hidden="true" className="h-6 w-6" />
            </div>
            <dt className="mt-4 font-semibold text-stone-100">Completly free of charge</dt>
            <dd className="mt-2 leading-7 text-stone-500">
              They say that idea is worth nothing without the execution. That's why I decided to
              share them for free. No hidden fees or charges. No copyright.
            </dd>
          </div>
          <div className="flex flex-col items-start">
            <div className="aspect-square rounded-md bg-white/5 p-2 text-center text-xl text-white ring-1 ring-white/10">
              <ClipboardDocumentCheckIcon aria-hidden="true" className="h-6 w-6" />
            </div>
            <dt className="mt-4 font-semibold text-stone-100">All details included</dt>
            <dd className="mt-2 leading-7 text-stone-500">
              This are not a shower thoughs. Each idea comes with a detailed description, a list of
              key features, handful tips, or even a proof of concept.
            </dd>
          </div>
          <div className="flex flex-col items-start">
            <div className="aspect-square rounded-md bg-white/5 p-2 text-center text-xl text-white ring-1 ring-white/10">
              <UserPlusIcon aria-hidden="true" className="h-6 w-6" />
            </div>
            <dt className="mt-4 font-semibold text-stone-100">Open to collaboration</dt>
            <dd className="mt-2 leading-7 text-stone-500">
              Would you like to resurrect one of the ideas? Ask me any question, and I'll do my best
              to answer. Want to built it together? That's even better!
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
}
