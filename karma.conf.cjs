const {createDefaultConfig} = require('@open-wc/testing-karma');
const merge = require('deepmerge');

module.exports = (config) => {
  config.set(
    merge(createDefaultConfig(config), {
      frameworks: ['mocha', 'chai'],
      client: {
        mocha: {ui: 'tdd', timeout: 60000},
      },
      files: [
        {pattern: 'dist/**/*.spec.js', type: 'module'},
        {pattern: 'dist/**/*_test.js', type: 'module'},
        {
          pattern: 'dist/assets/images/carousel/banner-pump-1.jpg',
          watched: false,
          included: false,
          served: true,
        },
      ],
      proxies: {
        '/assets/images/carousel/banner-pump-1.jpg':
          '/base/dist/assets/images/carousel/banner-pump-1.jpg',
        '/assets/images/carousel/banner-pump-2.jpg':
          '/base/dist/assets/images/carousel/banner-pump-2.jpg',
        '/assets/images/carousel/banner-pump-3.jpg':
          '/base/dist/assets/images/carousel/banner-pump-3.jpg',
      },
      esm: {
        nodeResolve: true,
      },
    })
  );
  return config;
};
