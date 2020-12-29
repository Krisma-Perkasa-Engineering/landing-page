import {Item} from '../components/item/types';

export type ScreenSize = {
  width: number;
  height: number;
};

export type ProductSummary = Item;

type Image = {
  path: string;
  alt: string;
};

export type Tag = {
  id: string;
  name: string;
  description: string;
  slug: string;
  image?: Image;
};
