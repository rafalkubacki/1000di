import Hero from '@/components/Hero';
import { getIdeas } from '@/lib/getIdeas';
import { columns } from '../components/columns';
import { DataTable } from '../components/data-table';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '1000 Dead Ideas - Revive Abandoned Projects for Your Next Big Idea',
  description:
    'Explore a collection of abandoned projects and ideas across various domains including web development, UX/UI design, and digital marketing. Find inspiration, detailed descriptions, and collaborate to bring these ideas to life.',
};

export default async function Page() {
  const data = await getIdeas();

  return (
    <div className="grid gap-8 py-8 lg:gap-12 lg:py-12">
      <Hero />
      <DataTable columns={columns} data={data} />
    </div>
  );
}
