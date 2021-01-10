type Specification = {
  name: string;
  value: string;
};

export type ProductDetail = {
  id: string;
  name: string;
  description: string;
  specifications: Array<Specification>;
};

export type Product = ProductDetail & {
  image: Image;
};

export type Corporate = {
  phone: string;
  email: string;
  whatsapp: string;
};

type ContactTemplate = {
  bodyTemplate: (productName: string) => string;
};

type Email = ContactTemplate & {
  subjectTemplate: (productName: string) => string;
};

type Whatsapp = ContactTemplate;

export type CorporateTemplate = {
  email: Email;
  whatsapp: Whatsapp;
};

type Image = {
  path: string;
  alt: string;
};

export type ContactIcon = {
  phone: Image;
  email: Image;
  whatsapp: Image;
};
