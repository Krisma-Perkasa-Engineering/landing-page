import {
  calculatePerImageWidth,
  calculateImageShownLengthPercent,
  calculateImageTransitionLengthPercent,
  calculateImageShownOffset,
  calculateImageTransitionOffset,
} from './calculateAnimation';

export default (
  numberOfImages: number
): [Array<Keyframe>, KeyframeAnimationOptions] => {
  const perImageWidth = calculatePerImageWidth(numberOfImages);
  const imageShownLengthPercent = calculateImageShownLengthPercent(
    numberOfImages
  );
  const imageTransitionLengthPercent = calculateImageTransitionLengthPercent(
    numberOfImages
  );
  const carouselSliding: Array<Keyframe> = [...Array(numberOfImages * 2)].map(
    (_, idx) => {
      return idx % 2 === 0
        ? {
            transform:
              idx === 0
                ? 'translateX(0)'
                : `translateX(-${perImageWidth * (idx / 2)}%)`,
            offset: calculateImageShownOffset(
              imageShownLengthPercent,
              imageTransitionLengthPercent,
              idx
            ),
          }
        : {
            transform:
              idx === 1
                ? 'translateX(0)'
                : `translateX(-${perImageWidth * ((idx - 1) / 2)}%)`,
            offset: calculateImageTransitionOffset(
              imageShownLengthPercent,
              imageTransitionLengthPercent,
              idx
            ),
          };
    }
  );
  const carouselOptions: KeyframeAnimationOptions = {
    duration: numberOfImages * 3500,
    iterations: Infinity,
  };
  return [
    [
      ...carouselSliding,
      {
        transform: 'translateX(0)',
        offset: 1,
      },
    ],
    carouselOptions,
  ];
};
