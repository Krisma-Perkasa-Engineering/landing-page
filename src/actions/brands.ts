import {Brand} from './types';

import lowaraLogo from '../assets/images/tags/lowara.png';
import franklinElectricLogo from '../assets/images/tags/franklin-electric.png';
import flugoLogo from '../assets/images/tags/flugo.jpg';
import ebaraLogo from '../assets/images/tags/ebara.png';
import pulsafeederLogo from '../assets/images/tags/pulsafeeder.png';
import sekoLogo from '../assets/images/tags/seko.png';
import allianceMotoriLogo from '../assets/images/tags/alliance-motori.jpg';

const brands: Array<Brand> = [
  {
    id: '0f31c2f2-c388-4d99-bf72-009201d6038d',
    name: 'Lowara',
    slug: 'lowara',
    image: {
      path: lowaraLogo,
      alt: 'Lowara logo',
    },
    tags: ['pompa-industri'],
  },
  {
    id: '401a55e1-3cfe-42f9-aeb0-63f820b40cf6',
    name: 'Franklin Electric',
    slug: 'franklin-electric',
    image: {
      path: franklinElectricLogo,
      alt: 'Franklin electric logo',
    },
    tags: ['pompa-industri', 'motor-elektrik'],
  },
  {
    id: '6388e789-4672-4c1c-9906-998a5a793c13',
    name: 'Flugo',
    slug: 'flugo',
    image: {
      path: flugoLogo,
      alt: 'Flugo logo',
    },
    tags: ['pompa-industri'],
  },
  {
    id: '1f66339b-22a3-46a3-a22d-f2fab7318f6b',
    name: 'Ebara',
    slug: 'ebara',
    image: {
      path: ebaraLogo,
      alt: 'Ebara logo',
    },
    tags: ['pompa-industri'],
  },
  {
    id: 'd5c6d3ac-6b51-4ede-94fb-749c4d76a57f',
    name: 'Pulsafeeder',
    slug: 'pulsafeeder',
    image: {
      path: pulsafeederLogo,
      alt: 'Pulsafeeder logo',
    },
    tags: ['pompa-industri'],
  },
  {
    id: '76a45dfc-aee6-419f-b458-068e2fbb56a3',
    name: 'Seko',
    slug: 'seko',
    image: {
      path: sekoLogo,
      alt: 'Seko logo',
    },
    tags: ['pompa-industri'],
  },
  {
    id: '8f837f3a-ccb8-4e5d-b16f-b57bec3fb129',
    name: 'Alliance Motori',
    slug: 'alliance-motori',
    image: {
      path: allianceMotoriLogo,
      alt: 'Alliance motori logo',
    },
    tags: ['motor-elektrik'],
  },
];

export const fetchBrands = (typeSlug: string): Promise<Array<Brand>> => {
  const matchedBrands = brands.filter((brand) => brand.tags.includes(typeSlug));
  return new Promise((resolve, reject) => {
    matchedBrands.length > 0
      ? resolve(matchedBrands)
      : reject(new Error('No matched brands'));
  });
};
