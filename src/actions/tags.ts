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
      alt: 'Franklin electric',
    },
  },
  {
    id: '4cc9f9e6-c396-488e-9566-1abd60fa87e4',
    name: 'Franklin Electric',
    description:
      'Franklin electric memiliki moto “Moving Water, Moving Fuel, Moving Forward” merupakan perusahaan yang berfokus pada manajemen air dan minyak.',
    slug: 'franklin-electric',
    imageDescription: {
      path: franklinElectricLogo,
      alt: 'Franklin electric',
    },
    image: {
      path: franklinElectricLogo,
      alt: 'Franklin electric',
    },
  },
];

export const fetchTag = (tagSlug: string) => {
  return tags.find((tag) => tag.slug === tagSlug);
};
