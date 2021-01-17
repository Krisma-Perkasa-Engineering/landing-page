import {Item} from '../components/item/types';

export type ScreenSize = {
  width: number;
  height: number;
};

export type ProductSummary = Item & {
  slug: string;
};
