import generateAnimationConfig from '../generateAnimationConfig';

const assert = chai.assert;

suite(
  'generateAnimationConfig - Generate browser animation API configuration',
  () => {
    test('should response 6 keyframe for 3 images', () => {
      const expectedAnimationConfig: [
        Array<Keyframe>,
        KeyframeAnimationOptions
      ] = [
        [
          {
            offset: 0,
            transform: 'translateX(0)',
          },
          {
            offset: 0.2916666666666667,
            transform: 'translateX(0)',
          },
          {
            offset: 0.33333333333333337,
            transform: 'translateX(-33.333333333333336%)',
          },
          {
            offset: 0.625,
            transform: 'translateX(-33.333333333333336%)',
          },
          {
            offset: 0.6666666666666667,
            transform: 'translateX(-66.66666666666667%)',
          },
          {
            offset: 0.9583333333333335,
            transform: 'translateX(-66.66666666666667%)',
          },
          {
            offset: 1,
            transform: 'translateX(0)',
          },
        ],
        {
          duration: 10500,
          iterations: Infinity,
        },
      ];
      const animationConfig = generateAnimationConfig(3);
      console.log(animationConfig);
      assert.deepEqual(animationConfig, expectedAnimationConfig);
    });
  }
);
