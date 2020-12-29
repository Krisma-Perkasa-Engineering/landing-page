type Specification = {
  name: string;
  value: string;
};

type Image = {
  path: string;
  alt: string;
};

export type ProductSummary = {
  id: string;
  name: string;
  image: Image;
};

export type Product = {
  id: string;
  name: string;
  description: string;
  specification: Array<Specification>;
  image: Image;
  tags: Array<string>;
};

export type Tag = {
  id: string;
  name: string;
  description: string;
  slug: string;
  image?: Image;
};
