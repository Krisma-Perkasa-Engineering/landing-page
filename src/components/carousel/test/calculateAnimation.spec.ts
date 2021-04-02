import {
  calculatePerImageWidth,
  calculateImageShownLengthPercent,
  calculateImageTransitionLengthPercent,
  calculateImageShownOffset,
  calculateImageTransitionOffset,
} from '../calculateAnimation';

const assert = chai.assert;

suite(
  'calculatePerImageWidth - Calculate width per image on percentage compared to carousel width',
  () => {
    test('should response 25 for 4 images', () => {
      const perImageWidth = calculatePerImageWidth(4);
      assert.equal(perImageWidth, 25);
    });

    test('should response 20 for 5 images', () => {
      const perImageWidth = calculatePerImageWidth(5);
      assert.equal(perImageWidth, 20);
    });
  }
);

suite(
  'calculateImageShownLengthPercent - Calculate image shown length in percent',
  () => {
    test('should response 21.875 for 4 images', () => {
      const imageShownLengthPercent = calculateImageShownLengthPercent(4);
      assert.equal(imageShownLengthPercent, 21.875);
    });

    test('should response 17.5 for 5 images', () => {
      const imageShownLengthPercent = calculateImageShownLengthPercent(5);
      assert.equal(imageShownLengthPercent, 17.5);
    });
  }
);

suite(
  'calculateImageTransitionLengthPercent - Calculate image shown length in percent',
  () => {
    test('should response 3.125 for 4 images', () => {
      const imageTransitionLengthPercent = calculateImageTransitionLengthPercent(
        4
      );
      assert.equal(imageTransitionLengthPercent, 3.125);
    });

    test('should response 2.5 for 5 images', () => {
      const imageTransitionLengthPercent = calculateImageTransitionLengthPercent(
        5
      );
      assert.equal(imageTransitionLengthPercent, 2.5);
    });
  }
);

suite(
  'calculateImageShownOffset - Calculate image shown length in percent',
  () => {
    test('should response 0.25 (25% keyframe) for 21.875% image shown length and 3.125% image transition length for image 2 of 4', () => {
      const imageShownOffset = calculateImageShownOffset(21.875, 3.125, 2);
      assert.equal(imageShownOffset, 0.25);
    });
  }
);

suite(
  'calculateImageTransitionOffset - Calculate image transition length in percent',
  () => {
    test('should response 0.46875 (46.875% keyframe) for 21.875% image shown length and 3.125% image transition length for image 2 of 4', () => {
      const imageTransitionOffset = calculateImageTransitionOffset(
        21.875,
        3.125,
        3
      );
      assert.equal(imageTransitionOffset, 0.46875);
    });
  }
);
