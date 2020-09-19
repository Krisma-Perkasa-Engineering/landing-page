import ImageProcessor from '../imageProcessor';

const assert = chai.assert;

suite(
  'imageProcessor - Scale the image size to screen size, make it center, and ad opacity to it',
  () => {
    test('should reponse with blob that contain image which height size fit to screen height', async () => {
      const imageData = await ImageProcessor(
        'assets/images/carousel/banner-pump-1.jpg',
        {
          width: 320,
          height: 512,
        }
      );
      assert.strictEqual(imageData.size, 138430);
      assert.strictEqual(imageData.type, 'image/jpeg');
    });

    test('should reponse with blob that contain image which width size fit to screen width', async () => {
      const imageData = await ImageProcessor(
        'assets/images/carousel/banner-pump-1.jpg',
        {
          width: 2000,
          height: 1024,
        }
      );
      assert.strictEqual(imageData.size, 936343);
      assert.strictEqual(imageData.type, 'image/jpeg');
    });
  }
);
