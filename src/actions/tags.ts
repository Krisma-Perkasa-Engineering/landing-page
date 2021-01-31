import {Tag} from './types';

import lowaraLogo from '../assets/images/tags/lowara.png';
import franklinElectricLogo from '../assets/images/tags/franklin-electric.png';
import flugoLogo from '../assets/images/tags/flugo.jpg';
import ebaraLogo from '../assets/images/tags/ebara.png';
import pulsafeederLogo from '../assets/images/tags/pulsafeeder.png';
import sekoLogo from '../assets/images/tags/seko.png';
import allianceMotoriLogo from '../assets/images/tags/alliance-motori.jpg';

const tags: Array<Tag> = [
  {
    id: '5f5f53b3-0215-4b0f-ad98-f438354cfd45',
    name: 'Pompa Submersible',
    description:
      'Pompa submersible atau pompa celup adalah jenis pompa air yang hanya dapat dioperasikan di dalam air. Pompa jenis ini lebh banyak dibutuhkan oleh industri besar atau gedung bertingkat yang membutuhkan debit air yang besar.',
    slug: 'pompa-submersible',
  },
  {
    id: '5d50acc6-b608-4fc2-8908-a35fa5607ada',
    name: 'Pompa Sentrifugal',
    description:
      'Pompa sentrifugal digunakan untuk memindahkan cairan dengan konversi energi kinetik rotasi ke energi hidrodinamik aliran cairan. Energi rotasi biasanya berasal dari mesin atau motor listrik.',
    slug: 'pompa-sentrifugal',
  },
  {
    id: 'dc7c48fc-486b-4141-9eda-6d8a7b99f7a6',
    name: 'Dosing Pump',
    description:
      'Dosing pump banyak digunakan untuk mengontrol penambahan bahan kimia dalam suatu proses. Pengontrolan ini dilakukan dengan mengatur kecepatan kecepatan motor penggerak.',
    slug: 'dosing-pump',
  },
  {
    id: '47be4ad2-81d7-4aff-876f-9da7c928f1b7',
    name: 'Gearbox',
    description:
      'Gearbox digunakan untuk menyesuaikan daya atau torsi dari suatu motor. Motor dengan spesifikasi yang sama, bila dipasangkan dengan gearbox dengan spesifikasi yang berbeda, bisa menghasilkan daya atau torsi yang berbeda.',
    slug: 'gearbox',
  },
  {
    id: '5ead5cb8-588f-4c92-b3ca-7701b9d34e99',
    name: 'Motor Induksi',
    description:
      'Motor induksi merupakan motor yang sangat banyak digunakan di industri, hal ini dikarenakan pembuatan yang murah dan dapat beroperasi langsung dengan sumber daya AC. Terdapat 2 jenis motor induksi, yaitu motor dengan fase tunggal dan motor dengan tiga fase.',
    slug: 'motor-induksi',
  },
  {
    id: '83b8a88b-1bd1-4ba1-a0ae-425509e99eac',
    name: 'Motor Submersible',
    description:
      'Motor submersible adalah motor yang dirancang khusus agar dapat bekerja meskipun posisinya terendam oleh air. Motor ini biasanya dipasangkan dengan pompa submersible atau pompa celup.',
    slug: 'motor-submersible',
  },
  {
    id: '0f31c2f2-c388-4d99-bf72-009201d6038d',
    name: 'Lowara',
    description:
      'Lowara merupakan salah satu merek dari xylem dan menjadi leader di industri pompa dan penggerak yang menawarkan solusi lengkap untuk pasokan air, air limbah, HVAC dan proteksi kebakaran di pertanian, gedung bertingkat, serta untuk aplikasi komersial dan industri.',
    slug: 'lowara',
    image: {
      path: lowaraLogo,
      alt: 'Lowara logo',
    },
  },
  {
    id: '401a55e1-3cfe-42f9-aeb0-63f820b40cf6',
    name: 'Franklin Electric',
    description:
      'Franklin electric memiliki moto “Moving Water, Moving Fuel, Moving Forward” merupakan perusahaan yang berfokus pada manajemen air dan minyak.',
    slug: 'franklin-electric',
    image: {
      path: franklinElectricLogo,
      alt: 'Franklin electric logo',
    },
  },
  {
    id: '6388e789-4672-4c1c-9906-998a5a793c13',
    name: 'Flugo',
    description: '',
    slug: 'flugo',
    image: {
      path: flugoLogo,
      alt: 'Flugo logo',
    },
  },
  {
    id: '1f66339b-22a3-46a3-a22d-f2fab7318f6b',
    name: 'Ebara',
    description:
      'Ebara merupakan perusahaan yang memiliki kompetensi utama manajemen air, produksi energi, dan solusi lingkungan. Perusahaan ini didirikan di Jepang pada tahun 1912.',
    slug: 'ebara',
    image: {
      path: ebaraLogo,
      alt: 'Ebara logo',
    },
  },
  {
    id: 'd5c6d3ac-6b51-4ede-94fb-749c4d76a57f',
    name: 'Pulsafeeder',
    description:
      'Pulsafeeder merupakan perusahaan yang berfokus pada solusi pompa untuk kebutuhan penyaluran air serta minyak dan gas. Perusahaan yang didirikan pada tahun 1942 ini memiliki beberapa merek seperti Pulsatron dan Chem-Tech.',
    slug: 'pulsafeeder',
    image: {
      path: pulsafeederLogo,
      alt: 'Pulsafeeder logo',
    },
  },
  {
    id: '76a45dfc-aee6-419f-b458-068e2fbb56a3',
    name: 'Seko',
    description:
      'Seko merupakan perusahaan yang berfokus pada dosing pump dan metering system yang sudah berpengalaman lebih dari 40 tahun. Perusahaan ini memiliki tim yang tersebar di lebih dari 20 negara dan partner terpilih sehingga perusahaan ini memiliki support di lebih dari 120 negara.',
    slug: 'seko',
    image: {
      path: sekoLogo,
      alt: 'Seko logo',
    },
  },
  {
    id: '8f837f3a-ccb8-4e5d-b16f-b57bec3fb129',
    name: 'Alliance Motori',
    description: '',
    slug: 'alliance-motori',
    image: {
      path: allianceMotoriLogo,
      alt: 'Alliance motori logo',
    },
  },
];

export const fetchTag = (tagSlug: string): Promise<Tag> => {
  const tag = tags.find((tag) => tag.slug === tagSlug);
  return new Promise((resolve, reject) => {
    tag ? resolve(tag) : reject(new Error('Tag not found'));
  });
};
