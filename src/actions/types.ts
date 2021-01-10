type Specification = {
  name: string;
  value: string;
};

type Image = {
  path: string;
  alt: string;
};

type ItemSummary = {
  id: string;
  name: string;
  slug: string;
  image: Image;
};

export type ProductSummary = ItemSummary;

export type Product = ProductSummary & {
  description: string;
  specifications: Array<Specification>;
  tags: Array<string>;
};

export type Tag = (Category | Brand) & {
  description: string;
  imageDescription?: Image;
};

export type Category = ItemSummary & {
  tag: string;
};

export type Brand = ItemSummary & {
  tag: string;
};
