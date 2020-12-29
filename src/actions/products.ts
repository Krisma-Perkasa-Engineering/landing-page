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
    specification: [
      {name: 'Bahan', value: 'Metal'},
      {name: 'Tekanan minimal', value: '3 MPA'},
    ],
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
    specification: [
      {name: 'Bahan', value: 'Metal'},
      {name: 'Tekanan minimal', value: '3 MPA'},
    ],
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
    specification: [
      {name: 'Bahan', value: 'Metal'},
      {name: 'Tekanan minimal', value: '3 MPA'},
    ],
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
    specification: [
      {name: 'Bahan', value: 'Metal'},
      {name: 'Tekanan minimal', value: '3 MPA'},
    ],
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
    specification: [
      {name: 'Bahan', value: 'Metal'},
      {name: 'Tekanan minimal', value: '3 MPA'},
    ],
    tags: ['pompa-sentrifugal', 'franklin-electric'],
  },
];

export const fetchProductsSummaryByTag = (
  tagSlug: string
): Array<ProductSummary> =>
  products
    .filter((product) => product.tags.includes(tagSlug))
    .map((product) => {
      const {description, specification, tags, ...rest} = product;
      return rest;
    });
