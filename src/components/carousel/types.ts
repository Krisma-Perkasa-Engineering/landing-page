export enum Direction {
  Previous = 'previous',
  Next = 'next',
}

export type Images = {
  title: string;
  path: string;
  alt: string;
};

export type ImagesProcessed = {
  url: string;
} & Images;
