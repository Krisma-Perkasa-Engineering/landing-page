import {scaleImageAndGetPointToCenterBottom} from '../calculatePositionAndScaleImage';

const assert = chai.assert;

suite(
  'scaleImageAndGetPointToCenterBottom - Scale the image size to screen size and point to center bottom',
  () => {
    test('Image size height fit screen height and image width scale to fit the image height on portrait screen', () => {
      const imagePointAndSize = scaleImageAndGetPointToCenterBottom(
        320,
        512,
        1998,
        1332
      );
      assert.deepEqual(imagePointAndSize, [582.75, 0, 832.5, 1332]);
    });

    test('Image size width fit screen width and image height scale to fit the image width on portrait screen', () => {
      const imagePointAndSize = scaleImageAndGetPointToCenterBottom(
        1550,
        1024,
        1998,
        1332
      );
      assert.deepEqual(imagePointAndSize, [
        0,
        12.030967741935456,
        1998,
        1319.969032258064516,
      ]);
    });

    test('Image size width and height bigger but fit screen width and height should not be scaled', () => {
      const imagePointAndSize = scaleImageAndGetPointToCenterBottom(
        1500,
        1000,
        3000,
        2000
      );
      assert.deepEqual(imagePointAndSize, [0, 0, 3000, 2000]);
    });

    test('Image size width and height smaller but fit screen width and height should not be scaled', () => {
      const imagePointAndSize = scaleImageAndGetPointToCenterBottom(
        1500,
        1000,
        750,
        500
      );
      assert.deepEqual(imagePointAndSize, [0, 0, 750, 500]);
    });

    test('Image size width and height exact same with screen width and height should not be scaled', () => {
      const imagePointAndSize = scaleImageAndGetPointToCenterBottom(
        1500,
        1000,
        1500,
        1000
      );
      assert.deepEqual(imagePointAndSize, [0, 0, 1500, 1000]);
    });
  }
);
