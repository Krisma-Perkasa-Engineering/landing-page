import {Brand} from './types';

import franklinElectricLogo from '../assets/images/tags/Franklin_Electric_logo.png';

const brands: Array<Brand> = [
  {
    id: '7235e427-cd5f-42db-8fa3-f02d267425fa',
    name: 'Franklin Electric',
    slug: 'franklin-electric',
    image: {
      path: franklinElectricLogo,
      alt: 'Franklin electric',
    },
    tag: 'pompa',
  },
  {
    id: 'a407e197-12f5-4fde-b4c5-56f98e7197fa',
    name: 'Flugo',
    slug: 'flugo',
    image: {
      path: franklinElectricLogo,
      alt: 'Flugo',
    },
    tag: 'pompa',
  },
  {
    id: 'c1688848-cf3c-4e31-adc2-a07b42d45114',
    name: 'Alliance Motori',
    slug: 'alliance-motori',
    image: {
      path: franklinElectricLogo,
      alt: 'Alliance motori',
    },
    tag: 'motor',
  },
];

export const fetchBrands = (typeSlug: string): Array<Brand> =>
  brands.filter((brand) => brand.tag === typeSlug);
