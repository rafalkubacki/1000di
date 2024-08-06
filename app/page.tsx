import Features from '@/components/Features';
import Newsletter from '@/components/Newsletter';
import Hero from '@/components/Hero';
import List from '@/components/List';
import { getIdeas } from '@/lib/getIdeas';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '1000 Dead Ideas - Revive Abandoned Projects for Your Next Big Idea',
  description:
    'Explore a collection of abandoned projects and ideas across various domains including web development, UX/UI design, and digital marketing. Find inspiration, detailed descriptions, and collaborate to bring these ideas to life.',
};

export default async function Page() {
  const data = await getIdeas();

  return (
    <div className="grid gap-20 py-20 lg:gap-40">
      <Hero />
      <Features />
      <List data={data} />
      <Newsletter />
    </div>
  );
}
