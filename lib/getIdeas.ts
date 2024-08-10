export type Idea = {
  id: string;
  icon: {
    url: string;
  };
  featured: boolean;
  title: string;
  slug: string;
  subtitle: string;
  description: string;
  demoUrl: string;
  assetsUrl: string;
  sourceUrl: string;
  designUrl: string;
  dateAbandoned: string;
  type: string;
  coverImage: {
    url: string;
  };
  content: {
    html: string;
  };
};

export async function getIdea(slug: string): Promise<Idea> {
  const res = await fetch(
    'https://eu-central-1-shared-euc1-02.cdn.hygraph.com/content/clzadjpto01jg08w1dy3bbemu/master',
    {
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
      next: { revalidate: 3600 },
    },
  );

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  const { data } = await res.json();

  return data.project;
}

export async function getIdeas(): Promise<Idea[]> {
  const res = await fetch(
    'https://eu-central-1-shared-euc1-02.cdn.hygraph.com/content/clzadjpto01jg08w1dy3bbemu/master',
    {
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
      next: { revalidate: 3600 },
    },
  );

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  const { data } = await res.json();

  return data.projects;
}
