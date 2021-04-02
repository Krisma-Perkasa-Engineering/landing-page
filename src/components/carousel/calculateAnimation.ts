export const calculatePerImageWidth = (numberOfImages: number) =>
  100 / numberOfImages;

export const calculateImageShownLengthPercent = (numberOfImages: number) =>
  ((100 / numberOfImages) * 7) / 8;

export const calculateImageTransitionLengthPercent = (numberOfImages: number) =>
  100 / numberOfImages / 8;

export const calculateImageShownOffset = (
  imageShownLengthPercent: number,
  imageTransitionLengthPercent: number,
  keyFrameIndex: number
) =>
  ((imageShownLengthPercent + imageTransitionLengthPercent) *
    (keyFrameIndex / 2)) /
  100;

export const calculateImageTransitionOffset = (
  imageShownLengthPercent: number,
  imageTransitionLengthPercent: number,
  keyFrameIndex: number
) =>
  ((imageShownLengthPercent + imageTransitionLengthPercent) *
    ((keyFrameIndex - 1) / 2) +
    imageShownLengthPercent) /
  100;
