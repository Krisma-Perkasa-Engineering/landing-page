import {SeoActionStatus} from './types';

export const setTitle = (title: string): SeoActionStatus => {
  document.title = title;
  return SeoActionStatus.UPDATED;
};

const createMetaDescription = (description: string): HTMLMetaElement => {
  const element = document.createElement('meta');
  element.setAttribute('name', 'description');
  element.setAttribute('content', description);
  return element;
};

const updateMetaDescription = (
  element: HTMLMetaElement,
  description: string
): HTMLMetaElement => {
  element.setAttribute('content', description);
  return element;
};

export const setMetaDescription = (description: string): SeoActionStatus => {
  const element: HTMLMetaElement = document.head.querySelector(
    `meta[name="description"]`
  );
  if (!element) {
    document.head.appendChild(createMetaDescription(description));
    return SeoActionStatus.CREATED;
  } else {
    updateMetaDescription(element, description);
    return SeoActionStatus.UPDATED;
  }
};
