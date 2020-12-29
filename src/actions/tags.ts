import {Tag} from './types';

import franklinElectricLogo from '../assets/images/tags/Franklin_Electric_logo.png';

const tags: Array<Tag> = [
  {
    id: 'e6be5672-4ac5-446d-a7a2-5458b67de98f',
    name: 'Pompa Sentrifugal',
    description:
      'Pompa sentrifugal digunakan untuk mengangkut cairan dengan konversi energi kinetik rotasi ke energi hidrodinamik aliran cairan. Energi rotasi biasanya berasal dari mesin atau motor listrik.',
    slug: 'pompa-sentrifugal',
    image: {
      path: franklinElectricLogo,
      alt: 'Pompa sentrifugal',
    },
    tag: 'pompa',
  },
  {
    id: 'f0f11dda-50a5-4a61-a5ee-0262e00b0658',
    name: 'Pompa Submersible',
    description:
      'Pompa submersible digunakan untuk mengangkut cairan dengan konversi energi kinetik rotasi ke energi hidrodinamik aliran cairan. Energi rotasi biasanya berasal dari mesin atau motor listrik.',
    slug: 'pompa-celup',
    image: {
      path: franklinElectricLogo,
      alt: 'Pompa submersible',
    },
    tag: 'pompa',
  },
  {
    id: '861f62ba-4a4e-47f0-a6cf-9d136bc8df2a',
    name: 'Single Phase Motor',
    description:
      'Single phase motor digunakan untuk mengangkut cairan dengan konversi energi kinetik rotasi ke energi hidrodinamik aliran cairan. Energi rotasi biasanya berasal dari mesin atau motor listrik.',
    slug: 'single-phase-motor',
    image: {
      path: franklinElectricLogo,
      alt: 'Single phase motor',
    },
    tag: 'motor',
  },
  {
    id: '7235e427-cd5f-42db-8fa3-f02d267425fa',
    name: 'Franklin Electric',
    description:
      'Franklin electric memiliki moto “Moving Water, Moving Fuel, Moving Forward” merupakan perusahaan yang berfokus pada manajemen air dan minyak.',
    imageDescription: {
      path: franklinElectricLogo,
      alt: 'Franklin electric',
    },
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
    description:
      'Flugo memiliki moto “Moving Water, Moving Fuel, Moving Forward” merupakan perusahaan yang berfokus pada manajemen air dan minyak.',
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
    description:
      'Alliance motori memiliki moto “Moving Water, Moving Fuel, Moving Forward” merupakan perusahaan yang berfokus pada manajemen air dan minyak.',
    slug: 'alliance-motori',
    image: {
      path: franklinElectricLogo,
      alt: 'Alliance motori',
    },
    tag: 'motor',
  },
];

export const fetchTag = (tagSlug: string) => {
  return tags.find((tag) => tag.slug === tagSlug);
};
