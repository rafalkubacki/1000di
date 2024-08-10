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
