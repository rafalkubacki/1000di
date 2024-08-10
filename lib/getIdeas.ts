import { Idea } from '@/types';

export async function getIdea(slug: string): Promise<Idea> {
  const res = await fetch(process.env.GRAPHQL_ENDPOINT || '', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      query: `{
          project(where: {slug: "${slug}"}) {
            id
            icon {
              url
            }
            featured
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
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  const { data } = await res.json();

  return data.project;
}

export async function getIdeas(): Promise<Idea[]> {
  const res = await fetch(process.env.GRAPHQL_ENDPOINT || '', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      query: `{
          projects(orderBy: dateAbandoned_DESC) {
            id
            icon {
              url
            }
            featured
            title
            slug
            subtitle
            type
            demoUrl
            assetsUrl
            dateAbandoned
          }
        }`,
    }),
    next: { revalidate: 300 },
  });

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  const { data } = await res.json();

  return data.projects;
}
