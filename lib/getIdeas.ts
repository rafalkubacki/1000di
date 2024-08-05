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
            projects {
              id,
              slug,
              title,
              subtitle,
              description,
              date,
              votes,
              complexity,
              time,
              domain,
              icon {
                url
              }
            }
          }`,
      }),
    },
  );

  const { data } = await response.json();

  return data.projects;
}
