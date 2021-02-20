import {
  SeoActionStatus,
  SeoMetaAttribute,
  SeoMetaBasic,
  SeoMetaOG,
  SeoMetaTwitter,
  CustomWindow,
} from './types';

/**
 * Create meta tag with attribute in SeoMetaAttribute and its content
 * @param attribute SeoMetaAttribute
 * @param property SeoMetaBasic | SeoMetaOG | SeoMetaTwitter
 * @param content string
 */
const createMetaTag = (
  attribute: SeoMetaAttribute,
  property: SeoMetaBasic | SeoMetaOG | SeoMetaTwitter,
  content: string
): HTMLMetaElement => {
  const element = document.createElement('meta');
  element.setAttribute(attribute, property);
  element.setAttribute('content', content);
  return element;
};

/**
 * Update meta tag content
 * @param element HTMLMetaElement
 * @param content string
 */
const updateMetaTag = (
  element: HTMLMetaElement,
  content: string
): HTMLMetaElement => {
  element.setAttribute('content', content);
  return element;
};

/**
 * Remove meta tags using removeChild method from its parent.
 * This approach have better browser support compared to remove the element directly.
 * @param element HTMLMetaElement
 */
const removeMetaTag = (element: HTMLMetaElement): true => {
  element.parentNode.removeChild(element);
  return true;
};

/**
 * Add meta element to HTML head
 * @param metaTag HTMLMetaElement
 */
const addMetaToHead = (metaTag: HTMLMetaElement): true => {
  document.head.appendChild(metaTag);
  return true;
};

/**
 * Actions belong to meta tag based on content and element availability.
 * @param content string
 * @param element HTMLMetaElement
 * @param createAttribute SeoMetaAttribute
 * @param createProperty SeoMetaBasic | SeoMetaOG | SeoMetaTwitter
 */
const metaActions = (
  content: string,
  element: HTMLMetaElement,
  createAttribute?: SeoMetaAttribute,
  createProperty?: SeoMetaBasic | SeoMetaOG | SeoMetaTwitter
) => {
  if (!content && !element) return SeoActionStatus.UNCHANGED;
  else if (!content && element)
    return removeMetaTag(element) && SeoActionStatus.REMOVED;
  else if (content && !element)
    return (
      addMetaToHead(createMetaTag(createAttribute, createProperty, content)) &&
      SeoActionStatus.CREATED
    );
  else if (content && element)
    return updateMetaTag(element, content) && SeoActionStatus.UPDATED;
};

/**
 * Set document title to HTML head
 * @param title string
 */
const setTitle = (title: string): SeoActionStatus => {
  document.title = title;
  return SeoActionStatus.UPDATED;
};

const setMetaDescription = (description: string): SeoActionStatus => {
  const element: HTMLMetaElement = document.head.querySelector(
    `meta[${SeoMetaAttribute.NAME}="${SeoMetaBasic.DESCRIPTION}"]`
  );
  return metaActions(
    description,
    element,
    SeoMetaAttribute.NAME,
    SeoMetaBasic.DESCRIPTION
  );
};

const setMetaBasic = (title: string, description: string): SeoActionStatus => {
  return setTitle(title) && setMetaDescription(description);
};

const setMetaOGTitle = (title: string): SeoActionStatus => {
  const element: HTMLMetaElement = document.head.querySelector(
    `meta[${SeoMetaAttribute.PROPERTY}="${SeoMetaOG.TITLE}"]`
  );
  return metaActions(
    title,
    element,
    SeoMetaAttribute.PROPERTY,
    SeoMetaOG.TITLE
  );
};

const setMetaOGDescription = (description: string): SeoActionStatus => {
  const element: HTMLMetaElement = document.head.querySelector(
    `meta[${SeoMetaAttribute.PROPERTY}="${SeoMetaOG.DESCRIPTION}"]`
  );
  return metaActions(
    description,
    element,
    SeoMetaAttribute.PROPERTY,
    SeoMetaOG.DESCRIPTION
  );
};

const setMetaOGImage = (imageUrl: string): SeoActionStatus => {
  const element: HTMLMetaElement = document.head.querySelector(
    `meta[${SeoMetaAttribute.PROPERTY}="${SeoMetaOG.IMAGE}"]`
  );
  return metaActions(
    imageUrl,
    element,
    SeoMetaAttribute.PROPERTY,
    SeoMetaOG.IMAGE
  );
};

const setMetaOGUrl = (pageUrl: string): SeoActionStatus => {
  const element: HTMLMetaElement = document.head.querySelector(
    `meta[${SeoMetaAttribute.PROPERTY}="${SeoMetaOG.URL}"]`
  );
  return metaActions(
    pageUrl,
    element,
    SeoMetaAttribute.PROPERTY,
    SeoMetaOG.URL
  );
};

const setMetaOGType = (type: string): SeoActionStatus => {
  const element: HTMLMetaElement = document.head.querySelector(
    `meta[${SeoMetaAttribute.PROPERTY}="${SeoMetaOG.TYPE}"]`
  );
  return metaActions(type, element, SeoMetaAttribute.PROPERTY, SeoMetaOG.TYPE);
};

const setMetaOG = (
  title: string,
  description: string,
  imageUrl: string,
  pageUrl: string,
  type: string
): SeoActionStatus => {
  return (
    setMetaOGTitle(title) &&
    setMetaOGDescription(description) &&
    setMetaOGImage(imageUrl) &&
    setMetaOGUrl(pageUrl) &&
    setMetaOGType(type)
  );
};

const setMetaTwitterCard = (content: string): SeoActionStatus => {
  const element: HTMLMetaElement = document.head.querySelector(
    `meta[${SeoMetaAttribute.NAME}="${SeoMetaTwitter.CARD}"]`
  );
  return metaActions(
    content,
    element,
    SeoMetaAttribute.NAME,
    SeoMetaTwitter.CARD
  );
};

const setMetaTwitterTitle = (title: string): SeoActionStatus => {
  const element: HTMLMetaElement = document.head.querySelector(
    `meta[${SeoMetaAttribute.NAME}="${SeoMetaTwitter.TITLE}"]`
  );
  return metaActions(
    title,
    element,
    SeoMetaAttribute.NAME,
    SeoMetaTwitter.TITLE
  );
};

const setMetaTwitterDescription = (description: string): SeoActionStatus => {
  const element: HTMLMetaElement = document.head.querySelector(
    `meta[${SeoMetaAttribute.NAME}="${SeoMetaTwitter.DESCRIPTION}"]`
  );
  return metaActions(
    description,
    element,
    SeoMetaAttribute.NAME,
    SeoMetaTwitter.DESCRIPTION
  );
};

const setMetaTwitterImage = (imageUrl: string): SeoActionStatus => {
  const element: HTMLMetaElement = document.head.querySelector(
    `meta[${SeoMetaAttribute.NAME}="${SeoMetaTwitter.IMAGE}"]`
  );
  return metaActions(
    imageUrl,
    element,
    SeoMetaAttribute.NAME,
    SeoMetaTwitter.IMAGE
  );
};

const setMetaTwitter = (
  card: string,
  title: string,
  description: string,
  imageUrl: string
): SeoActionStatus => {
  return (
    setMetaTwitterCard(card) &&
    setMetaTwitterTitle(title) &&
    setMetaTwitterDescription(description) &&
    setMetaTwitterImage(imageUrl)
  );
};

export const setMetaTags = (
  title: string,
  description: string,
  pageUrl: string,
  imageUrl: string = '',
  type: string = 'website',
  card: string = 'summary'
): SeoActionStatus => {
  return (
    setMetaBasic(title, description) &&
    setMetaOG(title, description, imageUrl, pageUrl, type) &&
    setMetaTwitter(card, title, description, imageUrl)
  );
};

export const onSeoUpdated = (window: CustomWindow) => {
  window.prerenderReady = true;
};
