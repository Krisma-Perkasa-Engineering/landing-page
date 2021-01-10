import {Product, ProductSummary} from './types';

import pompaSentrifugalVerticalMultistageSS from '../assets/images/products/pompa-sentrifugal-vertical-multistage-ss.webp';

const products: Array<Product> = [
  {
    id: '123af29f0eb-c622-4679-8475-0db8f1b67422',
    name: 'Pompa sentrifugal vertical multistage ss',
    description:
      'Pompa sentrifugal terbaik di kelasnya. Terbuat dari bahan metal anti karat yang dapat bertahan di cairan kimia sekalipun. Pompa ini dapat digunakan untuk kebutuhan sumur dan pabrik anda. Pompa centrifugal SS ini dapat bertahan hingga 10 tahun dalam kondisi optimal.',
    image: {
      path: pompaSentrifugalVerticalMultistageSS,
      alt: 'Pompa sentrifugal vertical multistage ss',
    },
    specifications: [
      {name: 'Bahan', value: 'Metal'},
      {name: 'Tekanan minimal', value: '3 MPA'},
    ],
    slug: 'pompa-sentrifugal-vertical-multistage-ss',
    tags: ['pompa-sentrifugal', 'franklin-electric'],
  },
  {
    id: '4cc9f9e6-c396-488e-9566-1abd60fa87e4',
    name: 'Pompa sentrifugal horizontal multistage ss',
    description:
      'Pompa sentrifugal terbaik di kelasnya. Terbuat dari bahan metal anti karat yang dapat bertahan di cairan kimia sekalipun. Pompa ini dapat digunakan untuk kebutuhan sumur dan pabrik anda. Pompa centrifugal SS ini dapat bertahan hingga 10 tahun dalam kondisi optimal.',
    image: {
      path: pompaSentrifugalVerticalMultistageSS,
      alt: 'Pompa sentrifugal horizontal multistage ss',
    },
    specifications: [
      {name: 'Bahan', value: 'Metal'},
      {name: 'Tekanan minimal', value: '3 MPA'},
    ],
    slug: 'pompa-sentrifugal-horizontal-multistage-ss',
    tags: ['pompa-sentrifugal', 'franklin-electric'],
  },
  {
    id: '50fae6f7-eef9-4153-9ab0-22e9d9357f94',
    name: 'Pompa sentrifugal D series',
    description:
      'Pompa sentrifugal terbaik di kelasnya. Terbuat dari bahan metal anti karat yang dapat bertahan di cairan kimia sekalipun. Pompa ini dapat digunakan untuk kebutuhan sumur dan pabrik anda. Pompa centrifugal SS ini dapat bertahan hingga 10 tahun dalam kondisi optimal.',
    image: {
      path: pompaSentrifugalVerticalMultistageSS,
      alt: 'Pompa sentrifugal D series',
    },
    specifications: [
      {name: 'Bahan', value: 'Metal'},
      {name: 'Tekanan minimal', value: '3 MPA'},
    ],
    slug: 'pompa-sentrifugal-D-series',
    tags: ['pompa-sentrifugal', 'franklin-electric'],
  },
  {
    id: '2bea28b7-2116-4af6-8489-fcb3e2a06cec',
    name: 'Pompa sentrifugal DR series',
    description:
      'Pompa sentrifugal terbaik di kelasnya. Terbuat dari bahan metal anti karat yang dapat bertahan di cairan kimia sekalipun. Pompa ini dapat digunakan untuk kebutuhan sumur dan pabrik anda. Pompa centrifugal SS ini dapat bertahan hingga 10 tahun dalam kondisi optimal.',
    image: {
      path: pompaSentrifugalVerticalMultistageSS,
      alt: 'Pompa sentrifugal DR series',
    },
    specifications: [
      {name: 'Bahan', value: 'Metal'},
      {name: 'Tekanan minimal', value: '3 MPA'},
    ],
    slug: 'pompa-sentrifugal-DR-series',
    tags: ['pompa-sentrifugal', 'franklin-electric'],
  },
  {
    id: '3f9cfb93-e99e-4048-a34c-1556077dc286',
    name: 'Pompa submersible Flugo V-6',
    description:
      'Pompa submersible terbaik di kelasnya. Terbuat dari bahan metal anti karat yang dapat bertahan di cairan kimia sekalipun. Pompa ini dapat digunakan untuk kebutuhan sumur dan pabrik anda. Pompa submersible ini dapat bertahan hingga 10 tahun dalam kondisi optimal.',
    image: {
      path: pompaSentrifugalVerticalMultistageSS,
      alt: 'Pompa submersible flugo V-6',
    },
    specifications: [
      {name: 'Bahan', value: 'Metal'},
      {name: 'Tekanan minimal', value: '3 MPA'},
    ],
    slug: 'pompa-submersible-flugo-v-6',
    tags: ['pompa-celup', 'flugo'],
  },
];

export const fetchProductsSummaryByTag = (
  tagSlug: string
): Array<ProductSummary> =>
  products
    .filter((product) => product.tags.includes(tagSlug))
    .map((product) => {
      const {description, specifications, tags, ...rest} = product;
      return rest;
    });

export const fetchProductBySlug = (slug: string): Promise<Product> => {
  const product = products.find((product) => product.slug === slug);
  return new Promise((resolve, reject) => {
    product ? resolve(product) : reject(new Error('Product not found'));
  });
};
