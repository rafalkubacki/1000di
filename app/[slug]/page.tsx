import { getIdea } from '@/lib/getIdeas';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata, ResolvingMetadata } from 'next';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

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
    <div className="grid gap-8 py-8 lg:gap-12 lg:py-12">
      <div className="container">
        <Button variant="ghost" asChild>
          <Link href="/">
            <ArrowLeft className="mr-1 h-4 w-4" /> Back to the list
          </Link>
        </Button>
      </div>
      <div className="container flex flex-wrap items-center justify-between">
        <div className="mb-8 grid w-full gap-4 lg:mb-0 lg:max-w-3xl lg:flex-auto">
          <Avatar className="h-16 w-16">
            <AvatarImage src={data.icon?.url} />
            <AvatarFallback>{data.title.substring(0, 1)}</AvatarFallback>
          </Avatar>
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
            {data.title}
          </h1>
          <p className="text-sm font-medium leading-none">{data.subtitle}</p>
          <p className="leading-7">{data.description}</p>
        </div>
        {data.coverImage && (
          <div className="w-full lg:max-w-md">
            <Image src={data.coverImage.url} alt={data.title} width={500} height={500} priority />
          </div>
        )}
      </div>
      <div className="container">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Link</TableHead>
              <TableHead>Url</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.demoUrl && (
              <TableRow>
                <TableCell>Demo</TableCell>
                <TableCell>
                  {' '}
                  <a href={data.demoUrl} target="_blank" rel="nofollow noopener noreferrer">
                    {data.demoUrl}
                  </a>
                </TableCell>
              </TableRow>
            )}
            {data.assetsUrl && (
              <TableRow>
                <TableCell>Assets</TableCell>
                <TableCell>
                  {' '}
                  <a href={data.assetsUrl} target="_blank" rel="nofollow noopener noreferrer">
                    {data.assetsUrl}
                  </a>
                </TableCell>
              </TableRow>
            )}
            {data.designUrl && (
              <TableRow>
                <TableCell>Design</TableCell>
                <TableCell>
                  {' '}
                  <a href={data.designUrl} target="_blank" rel="nofollow noopener noreferrer">
                    {data.designUrl}
                  </a>
                </TableCell>
              </TableRow>
            )}
            {data.sourceUrl && (
              <TableRow>
                <TableCell>Source</TableCell>
                <TableCell>
                  {' '}
                  <a href={data.sourceUrl} target="_blank" rel="nofollow noopener noreferrer">
                    {data.sourceUrl}
                  </a>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="container">
        {data.content && (
          <div
            className="prose prose-invert prose-zinc w-full lg:max-w-3xl"
            dangerouslySetInnerHTML={{ __html: data.content.html }}
          />
        )}
      </div>
    </div>
  );
}
