'use client';

import { useState } from 'react';
import { CalendarDaysIcon, HandRaisedIcon } from '@heroicons/react/24/outline';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState(0);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch('/api/subscribe', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    });

    const data = await res.json();
    setMessage(data.message);
    setStatus(res.status);

    if (res.status === 200) {
      setEmail('');

      setTimeout(() => {
        setMessage('');
        setStatus(0);
      }, 3000);
    }
  };

  return (
    <div id="newsletter" className="relative isolate px-4">
      <div className="mx-auto grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-7xl lg:grid-cols-2">
        <div className="max-w-xl lg:max-w-lg">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Get up to 1000 project ideas directly to your inbox. For free.
          </h2>
          <p className="mt-4 text-lg leading-8 text-stone-300">
            Digging up projects from the past is quite time consuming. Receive all new ideas as soon
            as I garter the information.
          </p>
          <form onSubmit={handleSubmit} className="mt-6 flex max-w-md gap-x-4">
            <label htmlFor="email-address" className="sr-only">
              Email address
            </label>
            <input
              id="email-address"
              name="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              autoComplete="email"
              className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm outline-none ring-1 ring-inset ring-white/10 sm:text-sm sm:leading-6"
            />
            <button
              type="submit"
              className="flex-none rounded-md bg-amber-100 px-3.5 py-2.5 text-sm font-semibold text-stone-900 shadow-sm hover:bg-amber-200"
            >
              Subscribe
            </button>
          </form>
          {message && (
            <p className={`${status === 200 ? 'text-green-300' : 'text-red-500'} mt-4 text-sm`}>
              {message}
            </p>
          )}
        </div>
        <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
          <div className="flex flex-col items-start">
            <div className="aspect-square rounded-md bg-white/5 p-2 text-center text-xl text-white ring-1 ring-white/10">
              <CalendarDaysIcon aria-hidden="true" className="h-6 w-6" />
            </div>
            <dt className="mt-4 font-semibold text-white">Constant stream of ideas</dt>
            <dd className="mt-2 leading-7 text-stone-400">
              No one have time to refresh the page every day. Be the first one to know about freshly
              digged up ideas.
            </dd>
          </div>
          <div className="flex flex-col items-start">
            <div className="aspect-square rounded-md bg-white/5 p-2 text-center text-xl text-white ring-1 ring-white/10">
              <HandRaisedIcon aria-hidden="true" className="h-6 w-6" />
            </div>
            <dt className="mt-4 font-semibold text-white">Access to unpublished content</dt>
            <dd className="mt-2 leading-7 text-stone-400">
              Get direct access to the content that is not available on the main list. Explore even
              wider range of ideas.
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
}
