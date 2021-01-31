import {Category} from './types';

import franklinElectricLogo from '../assets/images/tags/franklin-electric.png';
import pompaSubmersibleLogo from '../assets/images/products/lowara-Z-series.jpg';
import pompaSentrifugalLogo from '../assets/images/products/lowara-e-sh-series.jpg';
import dosingPumpLogo from '../assets/images/products/pulsafeeder-100-series.jpg';
import gearboxLogo from '../assets/images/products/alliance-AK-Series.jpg';
import motorInduksiLogo from '../assets/images/products/alliance-A-Y3H-series.jpg';
import motorSubmersibleLogo from '../assets/images/products/franklin-electric-4-inch-motor.jpg';

const categories: Array<Category> = [
  {
    id: '5f5f53b3-0215-4b0f-ad98-f438354cfd45',
    name: 'Pompa Submersible',
    slug: 'pompa-submersible',
    image: {
      path: pompaSubmersibleLogo,
      alt: 'Pompa submersible',
    },
    tag: 'pompa-industri',
  },
  {
    id: '5d50acc6-b608-4fc2-8908-a35fa5607ada',
    name: 'Pompa Sentrifugal',
    slug: 'pompa-sentrifugal',
    image: {
      path: pompaSentrifugalLogo,
      alt: 'Pompa sentrifugal',
    },
    tag: 'pompa-industri',
  },
  {
    id: 'dc7c48fc-486b-4141-9eda-6d8a7b99f7a6',
    name: 'Dosing Pump',
    slug: 'dosing-pump',
    image: {
      path: dosingPumpLogo,
      alt: 'Dosing pump',
    },
    tag: 'pompa-industri',
  },
  {
    id: '47be4ad2-81d7-4aff-876f-9da7c928f1b7',
    name: 'Gearbox',
    slug: 'gearbox',
    image: {
      path: gearboxLogo,
      alt: 'Gearbox',
    },
    tag: 'motor-elektrik',
  },
  {
    id: '5ead5cb8-588f-4c92-b3ca-7701b9d34e99',
    name: 'Motor Induksi',
    slug: 'motor-induksi',
    image: {
      path: motorInduksiLogo,
      alt: 'Motor induksi',
    },
    tag: 'motor-elektrik',
  },
  {
    id: '83b8a88b-1bd1-4ba1-a0ae-425509e99eac',
    name: 'Motor Submersible',
    slug: 'motor-submersible',
    image: {
      path: motorSubmersibleLogo,
      alt: 'Motor submersible',
    },
    tag: 'motor-elektrik',
  },
];

export const fetchCategories = (typeSlug: string): Promise<Array<Category>> => {
  const matchedCategories = categories.filter(
    (category) => category.tag === typeSlug
  );
  return new Promise((resolve, reject) => {
    matchedCategories.length > 0
      ? resolve(matchedCategories)
      : reject(new Error('No matched categories'));
  });
};
