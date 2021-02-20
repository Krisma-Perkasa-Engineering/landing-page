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
};

type ItemSummaryImageMandatory = ItemSummary & {
  image: Image;
};

type ItemSummaryImageOptional = ItemSummary & {
  image?: Image;
};

export type ProductSummary = ItemSummaryImageMandatory;

export type Product = ProductSummary & {
  description: string;
  specifications: Array<Specification>;
  tags: Array<string>;
};

export type Tag = ItemSummaryImageOptional & {
  description: string;
};

export type Category = ItemSummaryImageMandatory & {
  tag: string;
};

export type Brand = ItemSummaryImageMandatory & {
  tags: Array<string>;
};

export type PageSeo = {
  id: string;
  title: string;
  description: string;
  slug: string;
  image?: string;
};
