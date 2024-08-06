export async function getIdeas() {
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
          projects(orderBy: dateAbandoned_DESC) {
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

  return data.projects;
}
