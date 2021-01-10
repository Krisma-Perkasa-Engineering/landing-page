import {PageSeo} from './types';

const pageSeos: Array<PageSeo> = [
  {
    id: '5d0f8803-29cb-492b-a438-07182a528e52',
    title: 'Krisma Perkasa Engineering - Pompa Industri dan Motor Elektrik',
    description:
      'Penyedia pompa industri seperti Franklin dan Flugo serta motor elektrik seperti Alliance Motori dengan kualitas dan pelayanan terbaik.',
    slug: '',
  },
  {
    id: 'b5a27e38-e9a2-4c0c-bbae-d7e842a29b6d',
    title:
      'Merek dan kategori pompa industri yang kami jual | Krisma Perkasa Engineering',
    description:
      'Kami menyediakan beberapa merek antara lain Franklin dan Flugo dengan kategori seperti pompa submersible, pompa kimia, dan lain sebagainya.',
    slug: 'pompa-industri',
  },
  {
    id: '51714361-b001-489f-9b30-2396ac548354',
    title:
      'Merek dan kategori motor elektrik yang kami jual | Krisma Perkasa Engineering',
    description:
      'Kami menyediakan beberapa merek antara lain Alliance Motori dengan kategori seperti single pahse motor, speed drive motor, dan lain sebagainya.',
    slug: 'motor-elektrik',
  },
];

export const fetchPageSeo = (slug: string): Promise<PageSeo> => {
  const pageSeo = pageSeos.find((pageSeo) => pageSeo.slug === slug);
  console.log(pageSeo);
  return new Promise((resolve, reject) =>
    pageSeo ? resolve(pageSeo) : reject(new Error('Seo data not found'))
  );
};
