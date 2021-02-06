import {Product, ProductSummary} from './types';

import pompaLowaraZSeries from '../assets/images/products/lowara-Z-series.jpg';
import pompaLowaraCEACASeries from '../assets/images/products/lowara-cea-ca-series.jpg';
import pompaLowaraCOSeries from '../assets/images/products/lowara-co-series.jpg';
import pompaLowaraEHMSeries from '../assets/images/products/lowara-e-hm-series.jpg';
import pompaLowaraESHSeries from '../assets/images/products/lowara-e-sh-series.jpg';
import pompaLowaraESVSeries from '../assets/images/products/lowara-e-sv-series.jpg';
import pompaLowara1300VSeries from '../assets/images/products/lowara-1300-series.jpg';
import pompaFE4inch from '../assets/images/products/franklin-electric-high-capacity-submersible-pumps-4-inch.jpg';
import pompaFE6inch from '../assets/images/products/franklin-electric-6-Inch-SR-submersible-turbine-pumps.jpg';
import pompaFlugoFASeries from '../assets/images/products/flugo-fa-series.jpg';
import pompaFlugoFESSeries from '../assets/images/products/flugo-fes-series.jpg';
import pompaEbaraFSSeries from '../assets/images/products/ebara-fs-series.jpg';
import pompaEbaraDSeries from '../assets/images/products/ebara-d-series.jpg';
import pompaPulsafeeder100Series from '../assets/images/products/pulsafeeder-100-series.jpg';
import pompaPulsafeederPulsatronMPSeries from '../assets/images/products/pulsafeeder-pulsatron-mp-series.jpg';
import pompaPulsafeederGLMSeries from '../assets/images/products/pulsafeeder-glm-series.jpg';
import pompaSekoAKLSeries from '../assets/images/products/seko-akl-series.jpg';
import pompaSekoMS1Series from '../assets/images/products/seko-ms1-series.jpg';
import motorAllianceAKSeries from '../assets/images/products/alliance-AK-Series.jpg';
import motorAllianceRVSeries from '../assets/images/products/alliance-RV-Series.jpg';
import motorAllianceAY3HSeries from '../assets/images/products/alliance-A-Y3H-series.jpg';
import motorFE4inch from '../assets/images/products/franklin-electric-4-inch-motor.jpg';
import motorFE6inch from '../assets/images/products/franklin-electric-6-inch-motor.jpg';
import motorFE8inch from '../assets/images/products/franklin-electric-8-inch-motor.jpg';

const products: Array<Product> = [
  {
    id: '5e1f38d3-893d-4966-af1b-bfbf98997649',
    name: 'Lowara submersible deep well Z series',
    description:
      'Pompa submersible lowara Z series dibuat menggunakan bahan stainless steel dengan standard AISI 304 atau AISI 316 atau duplex (tergantung tipe) sehingga mampu menahan korosi. Beberapa contoh aplikasi yang dapat digunakan yaitu industri umum, supply air, gedung bertingkat, rumah sakit, PDAM, hotel, irigasi, tambang, dan lainnya.',
    image: {
      path: pompaLowaraZSeries,
      alt: 'Lowara submersible deep well Z series',
    },
    slug: 'lowara-submersible-deep-well-Z-series',
    tags: ['pompa-industri', 'pompa-submersible', 'lowara'],
    specifications: [
      {
        name: 'Delivery',
        value: '78 m³/h - 520 m³/h',
      },
      {
        name: 'Head',
        value: 'up to 700 meter',
      },
      {
        name: 'Power supply',
        value: 'three-phase 50 Hz and 60 Hz',
      },
      {
        name: 'Power',
        value: '0.55kW - 150kW',
      },
      {
        name: 'Maximum operating pressure',
        value: '55 bar - 70 bar',
      },
      {
        name: 'Temperature of pumped liquid',
        value: 'up to 60°C',
      },
      {
        name: 'Maximum immersion depth',
        value: '350 meter',
      },
    ],
  },
  {
    id: 'acdac26c-92cc-489a-a60c-dff408749e52',
    name: 'Lowara sentrifugal CEA-CA series',
    description:
      'Pompa sentrifugal lowara CEA-CA series dibuat menggunakan bahan stainless steel dengan standard AISI 304 atau AISI 316. Terdapat 2 jenis, yaitu dengan tipe "V" dengan pelindung FPM yang dapat menahan suhu hingga 110°C dan tipe "N" dengan bahan stainless steel AISI 316. Beberapa contoh aplikasi yang dapat digunakan yaitu pendistribusian air, industri umum, irigasi, water treatment, kolam renang, dan lainnya.',
    image: {
      path: pompaLowaraCEACASeries,
      alt: 'Lowara sentrifugal CEA-CA series',
    },
    slug: 'lowara-sentrifugal-CEA-CA-series',
    tags: ['pompa-industri', 'pompa-sentrifugal', 'lowara'],
    specifications: [
      {
        name: 'Delivery',
        value: 'up to 31 m³/h',
      },
      {
        name: 'Head',
        value: 'up to 62 meter',
      },
      {
        name: 'Power supply',
        value: 'three-phase and single-phase 50 Hz and 60 Hz',
      },
      {
        name: 'Power',
        value: '0.37kW - 3kW',
      },
      {
        name: 'Maximum operating pressure',
        value: '8 bar',
      },
      {
        name: 'Temperature of pumped liquid',
        value: '-10°C - 110°C',
      },
      {
        name: 'Insulation class',
        value: 'F',
      },
      {
        name: 'Protection',
        value: 'IP55',
      },
    ],
  },
  {
    id: '0eaf42c1-41f1-4ca0-b64e-1584f24da431',
    name: 'Lowara sentrifugal CO series',
    description:
      'Pompa sentrifugal lowara CO series dengan model open impeller. Pompa ini dibuat dengan bahan stainless steel dengan standard AISI 316. Kombinasi model dan bahan yang digunakan pompa ini membuat pompa ini cocok untuk memompa cairan yang mengandung padatan. Beberapa contoh aplikasi yang dapat digunakan yaitu industri umum, water treatment, memompa cairan pendingin ke suatu alat, dan lainnya.',
    image: {
      path: pompaLowaraCOSeries,
      alt: 'Lowara sentrifugal CO series',
    },
    slug: 'lowara-sentrifugal-CO-series',
    tags: ['pompa-industri', 'pompa-sentrifugal', 'lowara'],
    specifications: [
      {
        name: 'Delivery',
        value: 'up to 54 m³/h',
      },
      {
        name: 'Head',
        value: 'up to 24 meter',
      },
      {
        name: 'Power supply',
        value: 'three-phase and single-phase 50 Hz and 60 Hz',
      },
      {
        name: 'Power',
        value: '0.37kW - 3kW',
      },
      {
        name: 'Maximum operating pressure',
        value: '8 bar',
      },
      {
        name: 'Temperature of pumped liquid',
        value: '-10°C - 120°C',
      },
      {
        name: 'Insulation class',
        value: 'F',
      },
      {
        name: 'Protection',
        value: 'IP55',
      },
      {
        name: 'Open impeller pumps solids',
        value: 'up to 20 mm',
      },
    ],
  },
  {
    id: 'c37d9dc1-5b94-474e-95ad-f5a7b7ebf735',
    name: 'Lowara sentrifugal horizontal multistage e-HM series',
    description:
      'Pompa sentrifugal lowara e-HM series dibuat dengan bahan stainless steel. Menggunakan motor dengan model IE3 yang dapat menurunkan biaya operasional. Pompa ini memperoleh sertifikat dari WRAS, ACS, dan D.M. 174 sehingga aman digunakan untuk air minum. Beberapa contoh aplikasi yang dapat digunakan, yaitu industri umum, perumahan, supply air, injeksi pupuk, pemindahan air asin, dan lainnya.',
    image: {
      path: pompaLowaraEHMSeries,
      alt: 'Lowara sentrifugal horizontal multistage e-HM series',
    },
    slug: 'lowara-sentrifugal-horizontal-multistage-e-HM-series',
    tags: ['pompa-industri', 'pompa-sentrifugal', 'lowara'],
    specifications: [
      {
        name: 'Delivery',
        value: 'up to 29 m³/h',
      },
      {
        name: 'Head',
        value: 'up to 160 meter',
      },
      {
        name: 'Power supply',
        value: 'single-phase and three-phase 50 Hz and 60 Hz',
      },
      {
        name: 'Power',
        value: '0.30kW - 5.50kW',
      },
      {
        name: 'Maximum operating pressure',
        value: '16 bar',
      },
      {
        name: 'Temperature of pumped liquid',
        value: '-30°C - 120°C',
      },
    ],
  },
  {
    id: '836f9e0c-b5cc-4593-b480-462e59d0ccae',
    name: 'Lowara sentrifugal open impeller e-SH series',
    description:
      'Pompa lowara e-SH series adalah pompa sentrifugal yang dibuat dengan bahan stainless steel dengan standard AISI 316. Pompa ini sangat cocok untuk memindahkan cairan kimia. Desain hydraulic yang baru dan motor dengan model IE3 membuat pompa ini menurunkan biaya operasional. Beberapa contoh aplikasi yang dapat digunakan, yaitu industri umum, minyak dan gas, water treatment, dan lainnya.',
    image: {
      path: pompaLowaraESHSeries,
      alt: 'Lowara sentrifugal open impeller e-SH series',
    },
    slug: 'lowara-sentrifugal-open-impeller-e-SH-series',
    tags: ['pompa-industri', 'pompa-sentrifugal', 'lowara'],
    specifications: [
      {
        name: 'Delivery',
        value: 'up to 240 m³/h',
      },
      {
        name: 'Head',
        value: 'up to 110 meter',
      },
      {
        name: 'Power supply',
        value: 'three-phase 50 Hz and 60 Hz',
      },
      {
        name: 'Power',
        value: '0.25kW - 75kW',
      },
      {
        name: 'Temperature of pumped liquid',
        value: '-30°C - 120°C',
      },
    ],
  },
  {
    id: '4eddae2f-1d44-46cc-bada-23a0e312c2e3',
    name: 'Lowara sentrifugal vertical multistage e-SV series',
    description:
      'Pompa lowara e-SV series dibuat dengan bahan stainless steel. Hard Material Intermediate bush bearing (Tungsten Carbide/Silicon Carbide) dibenamkan meningkatkan daya tahan dan dapat digunakan untuk pekerjaan yang cukup berat. Pompa ini memperoleh sertifikat dari WRAS, ACS, dan D.M. 174 sehingga aman digunakan untuk air minum. Beberapa contoh aplikasi yang dapat digunakan, yaitu industri umum, PDAM, tambang, water treatment, filtrasi, perumahan, dan lainnya.',
    image: {
      path: pompaLowaraESVSeries,
      alt: 'Lowara sentrifugal vertical multistage e-SV series',
    },
    slug: 'lowara-sentrifugal-vertical-multistage-e-SV-series',
    tags: ['pompa-industri', 'pompa-sentrifugal', 'lowara'],
    specifications: [
      {
        name: 'Delivery',
        value: 'up to 160 m³/h',
      },
      {
        name: 'Head',
        value: 'up to 330 meter',
      },
      {
        name: 'Power supply',
        value: 'single-phase and three-phase 50 Hz and 60 Hz',
      },
      {
        name: 'Power',
        value: '0.37kW - 55kW',
      },
      {
        name: 'Maximum operating pressure',
        value: 'up to 40 bar',
      },
      {
        name: 'Temperature of pumped liquid',
        value: '-30°C - 180°C',
      },
    ],
  },
  {
    id: 'db5f125d-82a1-4920-a74d-e475f799e999',
    name: 'Lowara sewage 1300 series',
    description:
      'Pompa submersible lowara 1300 series ini mengkombinasikan performa dengan kualitas. Standard yang digunakan oleh pompa ini dapat mengurangi penyumbatan pada pompa dengan tetap menjaga tingkat efisiensi. Terdapat 2 jenis pompa untuk tipe ini, yaitu non-clog impeller dengan desain auto cleanse yang membuat penanganan benda padat cukup efisien dan vortex impeller yang cocok ketika dibutuhkan saluran yang besar. Pompa ini cocok digunakan untuk pembuangan cairan ke saluran pembuangan atau dari saluran pembuangan.',
    image: {
      path: pompaLowara1300VSeries,
      alt: 'Lowara sewage 1300 series',
    },
    slug: 'lowara-sewage-1300-series',
    tags: ['pompa-industri', 'pompa-submersible', 'lowara'],
    specifications: [
      {
        name: 'Delivery',
        value: 'up to 1770 m³/h',
      },
      {
        name: 'Head',
        value: 'up to 74 meter',
      },
      {
        name: 'Power supply',
        value: 'single-phase and three-phase 50 Hz and 60 Hz',
      },
      {
        name: 'Power',
        value: '0.75kW - 50kW',
      },
      {
        name: 'Temperature of pumped liquid',
        value: 'up to 40°C',
      },
      {
        name: 'Maximum submergence',
        value: '20 meter',
      },
    ],
  },
  {
    id: '2c606794-0903-416f-8047-15ded872ba4e',
    name: 'Franklin electric 4-inch high capacity submersible pumps',
    description:
      'Pompa submersible franklin electric ini dibuat dengan bahan stainless steel. Pompa ini dibuat dengan model high flow hydraulic staging, menyebabkan tingkat efisiensi yang sangat tinggi dan juga membuat produk ini menjadi tahan lama. Beberapa contoh aplikasi yang dapat digunakan yaitu industri umum, perumahan, supply air, gedung bertingkat, rumah sakit, PDAM, hotel, irigasi, tambang, dan lainnya.',
    image: {
      path: pompaFE4inch,
      alt: 'Franklin electric 4-inch high capacity submersible pumps',
    },
    slug: 'franklin-electric-4-inch-high-capacity-submersible-pumps',
    tags: ['pompa-industri', 'pompa-submersible', 'franklin-electric'],
    specifications: [
      {
        name: 'Flow rates',
        value: 'up to 24 m³/h',
      },
      {
        name: 'Power supply',
        value: '50 Hz',
      },
      {
        name: 'Power',
        value: '0.37kW - 5.5kW',
      },
      {
        name: 'Temperature of pumped liquid',
        value: 'up to 49°C',
      },
    ],
  },
  {
    id: '36fd3734-9c1d-4d0c-92a7-a2c4c3ba7a7e',
    name: 'Franklin electric 6-inch SR submersible turbine pumps',
    description:
      'Pompa submersible franklin electric ini dibuat dengan bahan stainless steel dengan kombinasi standard AISI 304 dan AISI 420 untuk bagian tertentu. Motor adaptor didesain secara khusus agar mechanical seal dari motor terlindungi dengan baik. Beberapa contoh aplikasi yang dapat digunakan, yaitu industri umum, perumahan, irigasi, tambang, PDAM, dan lainnya.',
    image: {
      path: pompaFE6inch,
      alt: 'Franklin electric 6-inch SR submersible turbine pumps',
    },
    slug: 'franklin-electric-6-inch-SR-submersible-turbine-pumps',
    tags: ['pompa-industri', 'pompa-submersible', 'franklin-electric'],
    specifications: [
      {
        name: 'Flow rates',
        value: 'up to 65 m³/h',
      },
      {
        name: 'Head',
        value: 'up to 290 meter',
      },
      {
        name: 'Power supply',
        value: '50 Hz',
      },
      {
        name: 'Power',
        value: '3.7kW - 55kW',
      },
    ],
  },
  {
    id: '5458d89a-3a6b-4855-965c-aae52b0b164c',
    name: 'Flugo sentrifugal end suction FA series',
    description:
      'Pompa sentrifugal flugo ini dibuat dengan bahan yang dapat disesuaikan sehingga dapat digunakan untuk keperluan yang beragam. Jenis impeller juga dapat disesuaikan, seperti closed impeller,open impeller, shrouded channel impeller, vortex impeller, screw impeller, mixed flow impeller, dan axial flow impeller. Beberapa contoh aplikasi yang dapat digunakan, yaitu penyaluran cairan pendingin, irigasi, tambang, dan lainnya.',
    image: {
      path: pompaFlugoFASeries,
      alt: 'Flugo sentrifugal end suction FA series',
    },
    slug: 'flugo-sentrifugal-end-suction-FA-series',
    tags: ['pompa-industri', 'pompa-sentrifugal', 'flugo'],
    specifications: [
      {
        name: 'Delivery',
        value: 'up to 440 l/s',
      },
      {
        name: 'Head',
        value: 'up to 152 meter',
      },
      {
        name: 'Speed',
        value: '1450 rpm or 2900 rpm (50Hz)',
      },
      {
        name: 'Maximum operating pressure',
        value: '1.0 MPa',
      },
    ],
  },
  {
    id: 'f2d3c34e-5797-4872-a519-408f2b138d5e',
    name: 'Flugo sentrifugal vortex-nonclogging FES series',
    description:
      'Pompa sentrifugal flugo ini dibuat dengan bahan yang dapat disesuaikan, sehingga dapat digunakan untuk keperluan yang beragam. Pompa ini menggunakan impeller vortex dengan teknologi non-clogging sehingga dapat melewatkan materi yang solid dengan mudah. Beberapa contoh aplikasi yang dapat digunakan, yaitu penyaluran cairan pendingin, irigasi, tambang, dan lainnya.',
    image: {
      path: pompaFlugoFESSeries,
      alt: 'Flugo sentrifugal vortex-nonclogging FES series',
    },
    slug: 'flugo-sentrifugal-vortex-nonclogging-FES-series',
    tags: ['pompa-industri', 'pompa-sentrifugal', 'flugo'],
    specifications: [],
  },
  {
    id: '8ca57814-0226-47df-9d22-930e7be069bc',
    name: 'Ebara sentrifugal end suction FS series',
    description:
      'Pompa sentrifugal ebara ini dibuat dengan model BPO (Back Pull Out) yang membuat pompa ini mudah untuk dilepas dan dibersihkan. Terdapat 2 jenis pompa sentrifugal dengan tipe FS ini, yaitu 2 pole dan 4 pole. Pompa ini dibuat menggunakan kombinasi bahan cast iron dan stainless steel untuk bagian-bagian tertentu. Beberapa contoh aplikasi yang dapat digunakan, yaitu industri umum, gedung bertingkat, perumahan, irigasi, drainase, pompa untuk kebakaran, dan lainnya.',
    image: {
      path: pompaEbaraFSSeries,
      alt: 'Ebara sentrifugal end suction FS series',
    },
    slug: 'ebara-sentrifugal-end-suction-FS-series',
    tags: ['pompa-industri', 'pompa-sentrifugal', 'ebara'],
    specifications: [
      {
        name: 'Delivery',
        value: '22 m³/min - 50 m³/min',
      },
      {
        name: 'Power supply',
        value: 'three-phase 50 Hz and 60 Hz',
      },
      {
        name: 'Power',
        value: '0.4kW - 560kW',
      },
      {
        name: 'Maximum operating pressure',
        value: 'up to 16 bar',
      },
    ],
  },
  {
    id: 'acafeea6-7a56-4210-8d35-e003d6d3ab9c',
    name: 'Ebara submersible sewage D series',
    description:
      'Pompa submersible ebara ini dibuat dengan bahan cast iron dan stainless steel. Terdapat beberapa jenis dari tipe pompa ini dengan jenis impeller yang berbeda sesuai dengan kebutuhan. Terdapat juga model dengan desain impeller yang non-clog sehingga membuat pembuangan cairan menjadi lebih lancar meskipun terdapat padatan. Beberapa contoh aplikasi yang dapat digunakan, yaitu sewage atau saluran pembuangan air, waste water, supply air, drainase cairan, dan lainnya.',
    image: {
      path: pompaEbaraDSeries,
      alt: 'Ebara submersible sewage D series',
    },
    slug: 'ebara-submersible-sewage-D-series',
    tags: ['pompa-industri', 'pompa-submersible', 'ebara'],
    specifications: [
      {
        name: 'Power',
        value: '0.4kW - 5.5kW',
      },
      {
        name: 'Temperature of pumped liquid',
        value: '0°C - 40°C',
      },
      {
        name: 'Insulation class',
        value: 'F',
      },
      {
        name: 'Protection',
        value: 'Built in overload protector',
      },
    ],
  },
  {
    id: 'e982be18-4ff8-4487-a119-1f387cf2205d',
    name: 'Pulsafeeder Chem tech series 100',
    description:
      'Dosing pump pulsafeeder ini menggunakan teknologi motorized-diaphragm yang membuat pompa ini memiliki performa yang bagus dan tahan lama. Keluaran dari pompa ini bisa disesuaikan selama masih dalam batas wajar. Menggunakan bahan chemical resistant membuat pompa ini sangat cocok untuk menyalurkan cairan kimia. Beberapa contoh aplikasi yang dapat digunakan, yaitu pabrik farmasi atau pabrik obat, pengolahan limbah, water treatment, minyak dan gas, tambang, dan lainnya.',
    image: {
      path: pompaPulsafeeder100Series,
      alt: 'Pulsafeeder chem tech series 100',
    },
    slug: 'pulsafeeder-chem-tech-series-100',
    tags: ['pompa-industri', 'dosing-pump', 'pulsafeeder'],
    specifications: [
      {
        name: 'Flow rates',
        value: '0.47 l/h - 15.76 l/h',
      },
      {
        name: 'Power supply',
        value: 'three-phase 50 Hz and 60 Hz',
      },
      {
        name: 'Maximum operating pressure',
        value: 'up to 7 bar',
      },
      {
        name: 'Temperature of pumped liquid',
        value: 'up to 51°C',
      },
    ],
  },
  {
    id: '19810de8-25d7-42bf-8a56-722329dd8f54',
    name: 'Pulsafeeder PULSAtron series MP',
    description:
      'Pompa pulsafeeder ini menggunakan microprocessor, sehingga dapat mengukur dengan akurat dan presisi. Pompa ini sudah dibenamkan kontrol otomatis dan tampilan yang dapat disesuaikan bahasanya. Pompa ini bisa di program sesuai dengan kebutuhan yang ada di lapangan. Beberapa contoh aplikasi yang dapat digunakan, yaitu water treatment, cuci mobil, tambang, perumahan, kolam renang, dan lainnya.',
    image: {
      path: pompaPulsafeederPulsatronMPSeries,
      alt: 'Pulsafeeder PULSAtron series MP',
    },
    slug: 'pulsafeeder-PULSAtron-series-MP',
    tags: ['pompa-industri', 'dosing-pump', 'pulsafeeder'],
    specifications: [
      {
        name: 'Flow rates',
        value: '3 GPD - 504 GPD',
      },
      {
        name: 'Power supply',
        value: '50 Hz and 60 Hz',
      },
      {
        name: 'Power',
        value: '0.3kW',
      },
      {
        name: 'Maximum operating pressure',
        value: '20 psi - 300 psi',
      },
      {
        name: 'Temperature of pumped liquid',
        value: 'up to 60°C',
      },
    ],
  },
  {
    id: 'f7864fcb-7f36-4d45-b4af-40d0707ddbfd',
    name: 'Pulsafeeder diaphragm series GLM',
    description:
      'Pompa pulsafeeder ini merupakan pompa diafragma yang digerakkan secara mekanis. Pompa ini dirancang agar dapat digunakan di berbagai kondisi, mulai dari memindahkan cairan kimia hingga untuk dosing metering pump. Bahan yang digunakan oleh pompa ini adalah polypropylene, PVDF, dan stainless steel dengan standard AISI 316L di beberapa bagian. Beberapa contoh aplikasi yang dapat digunakan, yaitu water treatment, pemrosesan bahan kimia, minyak dan gas, pabrik farmasi atau pabrik obat, dan lainnya.',
    image: {
      path: pompaPulsafeederGLMSeries,
      alt: 'Pulsafeeder diaphragm series GLM',
    },
    slug: 'pulsafeeder-diaphragm-series-GLM',
    tags: ['pompa-industri', 'dosing-pump', 'pulsafeeder'],
    specifications: [
      {
        name: 'Flow rates',
        value: '10 l/h - 3200 l/h',
      },
      {
        name: 'Power supply',
        value: '50 Hz and 60 Hz',
      },
      {
        name: 'Power',
        value: '0.25kW - 1.1kW',
      },
      {
        name: 'Maximum operating pressure',
        value: 'up to 12 bar',
      },
      {
        name: 'Temperature of pumped liquid',
        value: '0°C - 45°C',
      },
    ],
  },
  {
    id: 'd9e39106-bb51-4f50-8382-265cd6e31738',
    name: 'Seko plastic dosing pump AKL series',
    description:
      'Pompa seko ini merupakan analog dosing pump. Pompa ini memiliki flow rate yang konstan dengan penyesuaian manual menggunakan kontrol yang ada di bagian depan panel. Beberapa contoh aplikasi yang dapat digunakan, yaitu kolam renang, cooling water treatment, industri umum, potable water treatment, waste water treatment, dan lainnya.',
    image: {
      path: pompaSekoAKLSeries,
      alt: 'Seko plastic dosing pump AKL series',
    },
    slug: 'seko-plastic-dosing-pump-AKL-series',
    tags: ['pompa-industri', 'dosing-pump', 'seko'],
    specifications: [
      {
        name: 'Flow rates',
        value: '0.4 l/h - 110 l/h',
      },
      {
        name: 'Max back pressure',
        value: 'up to 20 bar',
      },
      {
        name: 'Power supply',
        value: '100 - 240 Vac - 50/60 Hz',
      },
      {
        name: 'Stroke rate',
        value: '120 - 300 stroke/minutes',
      },
      {
        name: 'Pump head',
        value: 'PVDF',
      },
      {
        name: 'Diaphragm',
        value: 'PTFE',
      },
    ],
  },
  {
    id: '0985d562-6f53-4c7c-8884-7cff264a0aa2',
    name: 'Seko dosing pump MS1 series',
    description:
      'Pompa seko ini merupakan dosing pump yang fleksibel, dengan kombinasi pump head dan power yang beragam. Pompa ini memiliki tingkat proteksi IP55. Pompa jenis ini menggunakan teknologi AVS (Assisted Vacuum System) yang membuat pompa ini dapat bekerja dengan flow rate yang tinggi dengan tetap menjaga level noise dan mechanical stress rendah. Beberapa contoh aplikasi yang dapat digunakan, yaitu water treatment, pertanian, power generation, industri umum, dan lainnya.',
    image: {
      path: pompaSekoMS1Series,
      alt: 'Seko dosing pump MS1 series',
    },
    slug: 'seko-dosing-pump-MS1-series',
    tags: ['pompa-industri', 'dosing-pump', 'seko'],
    specifications: [
      {
        name: 'Flow rates',
        value: '5.5 l/h - 1200 l/h',
      },
      {
        name: 'Max pressure',
        value: 'up to 20 bar',
      },
      {
        name: 'Max dosage temperature',
        value: 'up to 40°C',
      },
      {
        name: 'Stroke rate',
        value: '58 - 116 stroke/minutes',
      },
      {
        name: 'Protection',
        value: 'IP55',
      },
    ],
  },
  {
    id: 'c5806e08-ba4b-458c-9e77-3880ef5631e2',
    name: 'Alliance gear helical and bevel gearbox AK series',
    description:
      'Gearbox alliance ini memiliki jenis gear helical. Ukuran yang tersedia sangat beragam, yaitu 37, 47, 57, 67, 77, 87, 97, 107, 127, 157, 167, dan 187. Beberapa aplikasi yang dapat digunakan, yaitu conveyor, elevator, agitator, crane, crusher, dan lainnya.',
    image: {
      path: motorAllianceAKSeries,
      alt: 'Alliance gear helical and bevel gearbox AK series',
    },
    slug: 'alliance-gear-helical-and-bevel-gearbox-AK-series',
    tags: ['motor-elektrik', 'gearbox', 'alliance-motori'],
    specifications: [
      {
        name: 'M2Max',
        value: '@1400 rpm = 50000Nm',
      },
      {
        name: 'Ratio',
        value: '3.98 ~ 32625',
      },
      {
        name: 'Power',
        value: '0.12 ~ 200 kW',
      },
    ],
  },
  {
    id: '877b1979-7f81-47f1-80c3-6d37bce8bb38',
    name: 'Alliance worm-gear speed reducer RV series',
    description:
      'Gearbox alliance ini merupakan worm-gear yang berfungsi sebagai speed reducer atau penurun kecepatan. Beberapa jenis yang tersedia untuk tipe ini adalah RV, RV-F1, RVL-S, RV-S, dan RVL. Beberapa aplikasi yang dapat digunakan, yaitu conveyor, elevator, agitator, crane, crusher, dan lainnya.',
    image: {
      path: motorAllianceRVSeries,
      alt: 'Alliance worm-gear speed reducer RV series',
    },
    slug: 'alliance-worm-gear-speed-reducer-RV-series',
    tags: ['motor-elektrik', 'gearbox', 'alliance-motori'],
    specifications: [
      {
        name: 'M2Max',
        value: '@1400 rpm = 18000Nm',
      },
      {
        name: 'Ratio',
        value: '1.3 ~ 27001',
      },
      {
        name: 'Power',
        value: '0.12 ~ 160 kW',
      },
    ],
  },
  {
    id: 'de859e7c-5482-42ef-8d8b-be786e330798',
    name: 'Alliance heavy duty A-Y3H series',
    description:
      'Motor induksi Alliance ini dibuat dengan casing cast iron dengan ketahanan yang sangat bagus. Motor ini memiliki beberapa model instalasi, yaitu B3, B5, B14, dan B35.',
    image: {
      path: motorAllianceAY3HSeries,
      alt: 'Alliance heavy duty A-Y3H series',
    },
    slug: 'alliance-heavy-duty-A-Y3H-series',
    tags: ['motor-elektrik', 'motor-induksi', 'alliance-motori'],
    specifications: [
      {
        name: 'Speed',
        value: '1500 rpm',
      },
      {
        name: 'Power supply',
        value: 'three-phase 50 Hz and 60 Hz',
      },
      {
        name: 'Power',
        value: '0.5 HP - 425 HP',
      },
      {
        name: 'Insulation class',
        value: 'F',
      },
      {
        name: 'Protection',
        value: 'IP55',
      },
    ],
  },
  {
    id: '1bf2f915-850c-4d5c-a105-95a8e34770a0',
    name: 'Franklin electric 4-inch submersible motors',
    description:
      'Motor submersible franklin electric ini sudah dipatenkan sejak 1950 dan terpercaya untuk menjadi motor untuk pompa air di berbagai perumahan. Motor ini dibuat dengan bahan stainless steel sehingga tahan terhadap korosi. Motor ini sudah memiliki sertifikat, yaitu CSA certified dan ANSI/NSF 61 certified.',
    image: {
      path: motorFE4inch,
      alt: 'Franklin electric 4-inch submersible motors',
    },
    slug: 'franklin-electric-4-inch-submersible-motors',
    tags: ['motor-elektrik', 'motor-submersible', 'franklin-electric'],
    specifications: [
      {
        name: 'Power supply',
        value: 'three-phase and single-phase 50 Hz and 60 Hz',
      },
    ],
  },
  {
    id: 'a0fa0e68-ee4a-4a17-a3e7-f128c2795ec3',
    name: 'Franklin electric 6-inch submersible motors',
    description:
      'Motor submersible 6 inci dari franklin electric ini dipergunakan untuk sumur air yang cukup besar yang memerlukan flow rate cukup tinggi atau instalasi yang cukup dalam.',
    image: {
      path: motorFE6inch,
      alt: 'Franklin electric 6-inch submersible motors',
    },
    slug: 'franklin-electric-6-inch-submersible-motors',
    tags: ['motor-elektrik', 'motor-submersible', 'franklin-electric'],
    specifications: [],
  },
  {
    id: '1cae320e-3ee2-442b-bdba-a036c8f09c8b',
    name: 'Franklin electric 8-inch submersible motors',
    description:
      'Motor submersible 8 inci dari franklin electric ini dipergunakan untuk sumur air yang besar yang memerlukan flow rate tinggi atau instalasi yang dalam.',
    image: {
      path: motorFE8inch,
      alt: 'Franklin electric 8-inch submersible motors',
    },
    slug: 'franklin-electric-8-inch-submersible-motors',
    tags: ['motor-elektrik', 'motor-submersible', 'franklin-electric'],
    specifications: [],
  },
];

export const fetchProductsSummaryByTag = (
  tagSlug: string,
  mainCategory: string
): Promise<Array<ProductSummary>> => {
  const productsSummary = products
    .filter(
      (product) =>
        product.tags.includes(tagSlug) && product.tags.includes(mainCategory)
    )
    .map((product) => {
      const {description, specifications, tags, ...rest} = product;
      return rest;
    });
  return new Promise((resolve, reject) => {
    productsSummary.length > 0
      ? resolve(productsSummary)
      : reject(new Error('Product summary not found'));
  });
};

export const fetchProductBySlug = (slug: string): Promise<Product> => {
  const product = products.find((product) => product.slug === slug);
  return new Promise((resolve, reject) => {
    product ? resolve(product) : reject(new Error('Product not found'));
  });
};
