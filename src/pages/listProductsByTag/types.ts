type Image = {
  path: string;
  alt: string;
};

export type Tag = {
  id: string;
  name: string;
  description: string;
  imageDescription?: Image;
  slug: string;
};
