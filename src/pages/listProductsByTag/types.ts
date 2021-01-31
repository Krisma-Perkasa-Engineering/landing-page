type Image = {
  path: string;
  alt: string;
};

export type Tag = {
  id: string;
  name: string;
  description: string;
  slug: string;
  image?: Image;
};
