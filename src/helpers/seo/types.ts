export enum SeoActionStatus {
  CREATED = 'created',
  UPDATED = 'updated',
  REMOVED = 'removed',
  UNCHANGED = 'unchanged',
}

export enum SeoMetaAttribute {
  PROPERTY = 'property',
  NAME = 'name',
}

export enum SeoMetaBasic {
  DESCRIPTION = 'description',
}

export enum SeoMetaOG {
  TITLE = 'og:title',
  DESCRIPTION = 'og:description',
  IMAGE = 'og:image',
  URL = 'og:url',
  TYPE = 'og:type',
}

export enum SeoMetaTwitter {
  CARD = 'twitter:card',
  TITLE = 'twitter:title',
  DESCRIPTION = 'twitter:description',
  IMAGE = 'twitter:image',
}

export type CustomWindow = Window & {
  prerenderReady?: boolean;
};
