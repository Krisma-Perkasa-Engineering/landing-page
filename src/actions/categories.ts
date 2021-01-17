import {Category} from './types';

import franklinElectricLogo from '../assets/images/tags/Franklin_Electric_logo.png';

const categories: Array<Category> = [
  {
    id: 'e6be5672-4ac5-446d-a7a2-5458b67de98f',
    name: 'Pompa Sentrifugal',
    slug: 'pompa-sentrifugal',
    image: {
      path: franklinElectricLogo,
      alt: 'Pompa sentrifugal',
    },
    tag: 'pompa-industri',
  },
  {
    id: 'f0f11dda-50a5-4a61-a5ee-0262e00b0658',
    name: 'Pompa Submersible',
    slug: 'pompa-celup',
    image: {
      path: franklinElectricLogo,
      alt: 'Pompa submersible',
    },
    tag: 'pompa-industri',
  },
  {
    id: '861f62ba-4a4e-47f0-a6cf-9d136bc8df2a',
    name: 'Single Phase Motor',
    slug: 'single-phase-motor',
    image: {
      path: franklinElectricLogo,
      alt: 'Single phase motor',
    },
    tag: 'motor-elektrik',
  },
];

export const fetchCategories = (typeSlug: string): Array<Category> =>
  categories.filter((category) => category.tag === typeSlug);
